import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  export async function schedulePushNotification(title: string, body: string, id: string, targetDate: string) {
      const now = new Date();
      const dateFuture = new Date(targetDate)
      const differenceInSeconds = Math.floor((dateFuture.getTime() - now.getTime()) / 1000);
      console.log(title, body, differenceInSeconds)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: { url: 'alarm', id: id},
        color: '#AC0C29',
      },
      trigger: { seconds: differenceInSeconds },
    });
  }
  


  export async function registerForPushNotificationsAsync(): Promise<string | undefined> {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("token", token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'Appill',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',

      });
    }
  
    return token;
  }