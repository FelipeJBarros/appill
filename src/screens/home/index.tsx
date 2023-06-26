import React from "react";
import { Text, View, Button } from "react-native";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    return (
        <View 
            style={{ 
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 64,
                gap: 8
            }}
        >
            <Text>This is home</Text>
            <Button
                title="Go to login"
                onPress={() => navigate('login', {})}
            />

            <Button
                title="Go to alarm"
                onPress={() => navigate('alarm', {})}
            />
        </View>
    )    
}