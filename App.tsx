import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import RegisterScreen from './src/screens/register';
import MedicationScreen from './src/screens/medications';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ size, color }) => {
            let iconName;

            switch(route.name) {
              case 'home':
                iconName = 'home-sharp'
                break;
              case 'register':
                iconName = 'add-circle'
                break;
              case 'medication':
                iconName = 'bandage-sharp';
                break;
              default:
                iconName = 'home-sharp'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#b2072a',
          tabBarStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          }
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
        />
        <Tab.Screen 
          name="register" 
          component={RegisterScreen}
        />
        <Tab.Screen
          name="medication"
          component={MedicationScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
