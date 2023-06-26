import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import StackRoutes from './src/routes/StackRoutes';

import appillTheme from './src/theme';

import { Provider as AuthProvider } from './src/context/authContext';

export default function App() {
  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor='#AC0C29' />
          <StackRoutes />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}