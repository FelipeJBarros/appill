import React, { useEffect } from 'react';
import { Box } from "native-base";

import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

export default function LoginToken({ navigation }) {

    const { navigate } = navigation;

    useEffect(() => {
        const loginWithToken = async () => {
            let token = await AsyncStorage.getItem('@Auth_token')
            if (token) {
                try {
                    api.defaults.headers["Authorization"] = `Bearer ${token}`
                    const response = await api.get('/auth/me');
                    navigate('tab-screens')
                } catch (error) {
                    navigate('login')
                }
            } else {
                navigate('login')
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