import React from "react";
import { Text, View } from "react-native";
import { Box } from 'native-base';

export default function Medications() {
    return (
        <Box 
            flex={1} alignItems={'center'} justifyContent={'center'}
            bg={"gray.400"} mb={'64px'}
        >
            <Text>This is medication screen</Text>
        </Box>
    )
}