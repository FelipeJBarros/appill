import React, { useEffect, useContext } from 'react';
import { Box } from "native-base";

import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

import { Context as AuthContext } from '../../context/authContext';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type LoginTokenScreenProps = NativeStackScreenProps<RootStackParamList, 'loginToken'>

export default function LoginToken({ navigation }: LoginTokenScreenProps) {

    const { navigate, reset } = navigation;
    const { setUser } = useContext(AuthContext);

    useEffect(() => {
        const loginWithToken = async () => {
            let token = await AsyncStorage.getItem('@Auth_token')
            if (token) {
                try {
                    api.defaults.headers["Authorization"] = `Bearer ${token}`
                    const response = await api.get('/auth/me');
                    console.log("login com sucesso - via token")
                    setUser(response.data)
                    reset({
                        index: 0,
                        routes: [{ name: 'tab-screens'}]
                    })
                } catch (error) {
                    console.log('erro na função de login')
                    reset({
                        index: 0,
                        routes: [{ name: 'login'}]
                    })
                }
            } else {
                console.log('não existe token para loginToken')
                
                reset({
                    index: 0,
                    routes: [{ name: 'login'}]
                })
            }
        }

        loginWithToken();
    }, []);

    return (
        <Box
            flex={1}
            justifyContent='center'
            alignItems='center'
        >
            <ActivityIndicator
                color='#AC0C29'
                size={40}
            />
        </Box>
    )
}