import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface FTIProps {
    onPress: any,
    children: React.ReactNode
}

export function FloatingTabItem({ onPress, children }: FTIProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ top: -24 }}
        >
            <View
                style={{
                    backgroundColor: '#AC0C29',
                    borderRadius: 100,
                    width: 64, height: 64,
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    )
}