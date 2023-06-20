import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';

import appillTheme from './src/theme';

import StackRoutes from './src/routes/StackRoutes';

export default function App() {
  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer>
        <StatusBar backgroundColor='#AC0C29' />
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}