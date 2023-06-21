import React from 'react';
import { HStack, Text } from "native-base";

interface LabelProps {
    label: string,
    icon: React.ReactElement,
    children: React.ReactElement
}

export function LabeledSelect({ label, icon, children }: LabelProps) {
    return (
        <HStack bg='paper' py={0.5} pr={2} borderRadius={8} space={3} alignItems='center'>
            {icon}
            <Text fontSize={'md'} fontWeight='bold'>{label}</Text>
            {children}
        </HStack>
    )
}