import React from "react";
import { Text, View, Button } from "react-native";

export default function Login({ navigation }) {
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
            <Text>This is Login</Text>
            <Button
                title="Go to register"
                onPress={() => navigate('register')}
            />
        </View>
    )
}