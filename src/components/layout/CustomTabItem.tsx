import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TabItemProps {
    color: string,
    label: string,
    size: number,
    iconName: 'home' | 'clipboard',
    focused: boolean
}

export function CustomTabItem({ iconName, label, focused, color, size }: TabItemProps) {
    let icon;

    if(iconName === 'home') {
        if(focused) icon = <Ionicons name='home' size={size} color={color} />
        else icon = <Ionicons name='home-outline' size={size} color={color} />
    } else if(iconName === 'clipboard') {
        if(focused) icon = <Ionicons name='clipboard' size={size} color={color} />
        else icon = <Ionicons name='clipboard-outline' size={size} color={color} />
    }
    
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            <Text style={{ color: color, fontWeight: "600" }}>
                {label}
            </Text>
        </View>
    )
}