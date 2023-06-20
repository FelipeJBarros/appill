import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterMedicationScreen from '../screens/registerMedication';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import AlarmScreen from '../screens/alarm';

import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

import TabRoutes from '../routes/TabRoutes';

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='tab-screens'
                component={TabRoutes}
            />
            <Stack.Screen
                name='login'
                component={LoginScreen}
            />
            <Stack.Screen
                name='register'
                component={RegisterScreen}
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F2F2F2' },
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name='alarm'
                component={AlarmScreen}
            />
            <Stack.Screen
                name='register-medication'
                component={RegisterMedicationScreen}
                options={{
                    headerShown: true,
                    title: 'Nova medicação',
                    headerStyle: {
                        backgroundColor: '#AC0C29'
                    },
                    headerTintColor: '#F2F2F2'
                }}
            />
        </Stack.Navigator>
    )
}