import React from "react";
import { Text, View, Button } from "react-native";
import { Box, Image } from "native-base";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>

export default function Login({ navigation }: LoginScreenProps) {
    const { navigate } = navigation;
    const backgroundImage = require('../../../assets/imgs/colorfull.png')
    return (
        <Box>
            <Image
                source={backgroundImage}
                alt="Imagem de fundo"
                resizeMode="repeat"
            />
        </Box>
    )
}