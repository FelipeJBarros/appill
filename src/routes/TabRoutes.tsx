import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { CustomTabItem, FloatingTabItem } from '../components/layout';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import RegisterMedicationScreen from '../screens/registerMedication';
import MedicationScreen from '../screens/medications';

import { RootStackParamList, RootTabParamList } from '../types';
type TabScreensProps = NativeStackScreenProps<RootStackParamList, 'tab-screens'>

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabRoutes({ navigation }: TabScreensProps) {

    const { navigate } = navigation;

    return (
        <Tab.Navigator
            initialRouteName='medication'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#AC0C29',
                tabBarInactiveTintColor: '#ADADAD',
                tabBarStyle: {
                    backgroundColor: '#f9f9f9',
                    height: 64
                }
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <CustomTabItem
                            label='Home'
                            iconName='home'
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="register"
                component={RegisterMedicationScreen}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Ionicons name='add' size={size * 2} color="#F2F2F2" />
                    ),
                    tabBarButton: ({ children }) => (
                        <FloatingTabItem
                            onPress={() => navigate('register-medication', {})}
                        >
                            {children}
                        </FloatingTabItem>
                    )
                }}
            />
            <Tab.Screen
                name="medication"
                component={MedicationScreen}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <CustomTabItem
                            label='Medicações'
                            iconName='clipboard'
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}