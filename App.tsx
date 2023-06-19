import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import appillTheme from './src/theme';
import { NativeBaseProvider } from 'native-base';

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import RegisterMedicationScreen from './src/screens/registerMedication';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import AlarmScreen from './src/screens/alarm';

import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

import TabRoutes from './src/routes/TabRoutes';

export default function App() {
  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
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
      </NavigationContainer>
    </NativeBaseProvider>
  )
}