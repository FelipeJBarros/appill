import React from "react";
import { Text, View } from "react-native";

export default function Home() {
    return (
        <View 
            style={{ 
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>This is home</Text>
        </View>
    )    
}