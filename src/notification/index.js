import messaging from "@react-native-firebase/messaging";
import { AppRegistry } from "react-native";
import App from "../../App";
import { Alert } from "native-base";
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}
const notification = async () => {
  if (requestUserPermission()) {
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });
  } else {
    console.log("Failed token status");
  }

  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      //   setLoading(false);
    });

  // Register background handler
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });

  AppRegistry.registerComponent("app", () => App);

  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
  });
};

export default notification;
