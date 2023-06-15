import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TabItemProps {
    color: string,
    label: string,
    icon: React.ReactElement
}

export function CustomTabItem({ color, icon, label }: TabItemProps) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            <Text style={{ color: color, fontWeight: "600" }}>
                {label}
            </Text>
        </View>
    )
}