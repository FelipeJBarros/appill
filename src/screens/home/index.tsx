import React, { useState } from "react";
import {View, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import { Page } from "../../components/layout";
import { HStack, Icon, IconButton, Text, VStack } from "native-base";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    const [userName, setUserName] = useState('UserName');
    const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={"4xl"} color="white" />
    return (
        <Page spacing={12}>
            <HStack justifyContent={"space-between"}>
                <VStack>
                <Text color={'#fff'}>Seja bem vindo(a),</Text>
                <Text color={'#fff'} fontSize={"xl"} bold>{userName}</Text>
                </VStack>
                <IconButton icon={OptionsIcon}></IconButton>
            </HStack>
            <HStack>
                <Text color={'#fff'} fontSize={'md'} >Semana atual</Text>
            </HStack>
        </Page>
        // <View 
        //     style={{ 
        //         flex: 1,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         marginBottom: 64,
        //         gap: 8
        //     }}
        // >
        //     <Text>This is home</Text>
        //     <Button
        //         title="Go to login"
        //         onPress={() => navigate('login', {})}
        //     />

        //     <Button
        //         title="Go to alarm"
        //         onPress={() => navigate('alarm', {})}
        //     />
        // </View>
    )    
}