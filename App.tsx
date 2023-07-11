import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import StackRoutes from './src/routes/StackRoutes';

import appillTheme from './src/theme';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { NotificationResponse } from 'expo-notifications';

import { AuthProvider } from './src/context/authContext';
import { MedicationProvider } from './src/context/medicationContext';
import { DoseProvider } from './src/context/doseContext';
import {  registerForPushNotificationsAsync } from './src/notification/index';


import { RootStackParamList } from './src/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AppProps = NativeStackScreenProps<RootStackParamList, 'app'>;

export default function App({ navigation }: AppProps) {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<Notifications.Notification | false>(false);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();
  const navigationRef = useRef<any>(null);

  useEffect(() => {
    navigationRef.current = navigation;
  }, [navigation]);


  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
 
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response: NotificationResponse) => {
        console.log(response);
        const url = response.notification.request.content.data.url;
        const id = response.notification.request.content.data.id;
        // Navigate to the alarm screen
        
        navigationRef.current?.navigate(url, {id});
      }

    );

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <NativeBaseProvider theme={appillTheme}>
      <NavigationContainer ref={navigationRef}>
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
  );
}
