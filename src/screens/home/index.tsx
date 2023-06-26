import React, { useContext } from "react";
import { Text, View, Button } from "react-native";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

import { Context as AuthContext } from "../../context/authContext";

export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    const { hello } = useContext(AuthContext);

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

            <Button
                title="Test context"
                onPress={() => hello()}
            />
            
        </View>
    )    
}