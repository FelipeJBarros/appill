import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import StackRoutes from './src/routes/StackRoutes';

import appillTheme from './src/theme';

import { AuthProvider } from './src/context/authContext';
import { MedicationProvider } from './src/context/medicationContext';
import { DoseProvider } from './src/context/doseContext';

export default function App() {
  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer>
        <AuthProvider>
          <MedicationProvider>
            <DoseProvider>
            <StatusBar backgroundColor='#AC0C29' />
            <StackRoutes />
            </DoseProvider>
          </MedicationProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}