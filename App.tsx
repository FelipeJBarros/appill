import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import StackRoutes from './src/routes/StackRoutes';
import notification from './src/notification';
import appillTheme from './src/theme';

import { AuthProvider } from './src/context/authContext';
import { Provider as MedicationProvider } from './src/context/medicationContext';

export default function App() {
  useEffect(()=>{
    const response = notification()
    console.log(response)
  }, [])
  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer>
        <AuthProvider>
          <MedicationProvider>
            <StatusBar backgroundColor='#AC0C29' />
            <StackRoutes />
          </MedicationProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}