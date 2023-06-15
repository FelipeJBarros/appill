import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import RegisterScreen from './src/screens/register';
import MedicationScreen from './src/screens/medications';

import { Ionicons } from '@expo/vector-icons';
import { CustomTabItem, FloatingTabItem } from './src/components/layout';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#AC0C29',
          tabBarInactiveTintColor: '#ADADAD',
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            zIndex: 5,
            backgroundColor: '#F2F2F2',
            elevation: 0,
            height: 64
          }
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <CustomTabItem
                label='Home' color={color}
                icon={
                  <Ionicons
                    name="home-outline"
                    size={size} color={color}
                  />
                }
              />
            )
          }}
        />
        <Tab.Screen
          name="register"
          component={RegisterScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons name='add' size={size * 2} color="#F2F2F2" />
            ),
            tabBarButton: ({ onPress, children }) => (
              <FloatingTabItem onPress={onPress}>
                {children}
              </FloatingTabItem>
            )
          }}
        />
        <Tab.Screen
          name="medication"
          component={MedicationScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <CustomTabItem
                label='Medicações' color={color}
                icon={
                  <Ionicons
                    name="clipboard-outline"
                    size={size} color={color}
                  />
                }
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
