import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { CustomTabItem, FloatingTabItem } from './src/components/layout';
import { NativeBaseProvider } from 'native-base';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home';
import RegisterMedicationScreen from './src/screens/registerMedication';
import MedicationScreen from './src/screens/medications';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import AlarmScreen from './src/screens/alarm';

import { RootStackParamList, RootTabParamList } from './src/types';
type TabScreensProps = NativeStackScreenProps<RootStackParamList, 'tab-screens'>

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabScreens({ navigation }: TabScreensProps) {

  const { navigate } = navigation;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#AC0C29',
        tabBarInactiveTintColor: '#ADADAD',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          zIndex: 5,
          backgroundColor: '#f9f9f9',
          elevation: 0,
          height: 64
        }
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CustomTabItem
              label='Home' color={color}
              icon={<Ionicons name="home-outline" size={size} color={color} />}
            />
          )
        }}
      />
      <Tab.Screen
        name="register"
        component={RegisterMedicationScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name='add' size={size * 2} color="#F2F2F2" />
          ),
          tabBarButton: ({ children }) => (
            <FloatingTabItem
              onPress={() => navigate('register-medication', {})}
            >
              {children}
            </FloatingTabItem>
          )
        }}
      />
      <Tab.Screen
        name="medication"
        component={MedicationScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <CustomTabItem
              label='Medicações' color={color}
              icon={<Ionicons name="clipboard-outline" size={size} color={color} />}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='tab-screens'
            component={TabScreens}
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