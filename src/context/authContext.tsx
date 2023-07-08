import React, { useEffect, useState } from 'react';
import { createContext } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api";

interface AuthContextData {
    authenticated: boolean;
    user: any;
    isFeatching: boolean;
    signIn(email: string, password: string): Promise<{ error: boolean, errorMessage?: string }>;
    signOut(): void;
    signUp(params: Object): Promise<{ error: boolean, errorMessage?: string }>;
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<Object | null>(null)
    const [isFeatching, setFeatching] = useState(false);

    useEffect(() => {
        async function getStorageData() {
            const [[, storageUser], [, storageToken]] = await AsyncStorage.multiGet(
                ['@AppillAuth_user', '@AppillAuth_token']
            )

            if (storageToken && storageUser) {
                setUser(JSON.parse(storageUser));
                api.defaults.headers["Authorization"] = `Bearer ${storageToken}`
            }
        }
        getStorageData();
    }, [])

    async function signIn(email: string, password: string) {
        setFeatching(true);
        try {
            const response = await api.post('/auth/login', {
                email,
                password
            })
            const { user, token } = response.data;
            setUser(user);
            await AsyncStorage.setItem(
                '@AppillAuth_user',
                JSON.stringify(user)
            )
            await AsyncStorage.setItem(
                '@AppillAuth_token',
                token
            )
            api.defaults.headers["Authorization"] = `Bearer ${token}`
            return { error: false }
        } catch (error: any) {
            if(error.response.data.statusCode === 500) {
                return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
            }
            return { error: true, errorMessage: error.response.data.message }
        } finally {
            setFeatching(false);
        }
    }

    async function signUp(params: Object) {
        setFeatching(true);
        try {
            const response = await api.post('/auth/register', params)
            console.log('Cadastrando...')
            console.log(JSON.stringify(response.data, null, 2))
            return { error: false }
        } catch (error: any) {
            console.log(JSON.stringify(error.response.data, null, 2))
            if(error.response.data.statusCode === 500) {
                return { error: true, errorMessage: "Erro inesperado, tento novamente mais tarde" }
            }
            return { error: true, errorMessage: error.response.data.message }
        } finally {
            setFeatching(false);
        }
    }

    async function signOut() {
        setUser(null);
        await AsyncStorage.clear();
    }


    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                isFeatching,
                signIn,
                signOut,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;