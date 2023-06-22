import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';

import appillTheme from './src/theme';

import StackRoutes from './src/routes/StackRoutes';

//libs de fonts
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const  [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('./assets/fonts/Montserrat/Montserrat-Thin.ttf'),
    'Montserrat-ThinItalic': require('./assets/fonts/Montserrat/Montserrat-ThinItalic.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-LightItalic': require('./assets/fonts/Montserrat/Montserrat-LightItalic.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat/Montserrat-Italic.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic': require('./assets/fonts/Montserrat/Montserrat-MediumItalic.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'),
})


  return (
    <NativeBaseProvider theme={appillTheme} >
      <NavigationContainer >
        <StatusBar backgroundColor='#AC0C29'/>
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}