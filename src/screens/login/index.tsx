import React from "react";
import { Button, ImageBackground } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import {  VStack, Text, Link} from "native-base";
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>

export default function Login({ navigation }: LoginScreenProps) {
    const { navigate } = navigation;
    const backgroundImage = '../../../assets/images/auth-bg.svg'
    return (
        <VStack justifyContent={'flex-end'} bg={"#AC0C29"}  flexGrow={1} >
            {/* <Text>This is Login</Text>
            <Button
                title="Go to register"
                onPress={() => navigate('register', {})}
            /> */}
            <VStack h={"1/2"}  flexGrow={1} paddingLeft={4}>
                <ImageBackground style={{flex: 1, justifyContent: 'center'}}  source={require('../../../assets/images/auth-bg.svg')}>
                <Text fontFamily={'body'} fontWeight={'400'} color={'#fff'} fontSize={"4xl"}>Cuidado na <Text bold>hora</Text></Text>
                <Text fontFamily={'body'} marginTop={-4} color={'#fff'} fontSize={"4xl"}>e <Text bold>medida </Text><Text>certa.</Text></Text>
                <Text fontFamily={'body'} color={'#fff'} marginTop={-1} fontSize={"lg"}>Junte-se ao <Text bold>Appill</Text></Text>
                </ImageBackground>
            </VStack>
            <VStack 
            flexGrow={1} h={'1/2'} bg={"#fff"} alignItems={"flex-start"} borderTopRadius={24} paddingLeft={6} paddingTop={8}
            > 
                <Text fontSize={"xl"} fontFamily={'body'} fontWeight={'500'} bold  > 
                    Bem-vindo(a) de volta
                </Text>
                <Text fontFamily={'body'} fontWeight={'300'} marginTop={-1} fontSize={"md"} bold color={"gray.400"}>
                Faça o login para acessar a aplicação
                </Text>
                <Text  fontSize={"md"}>
                Ainda não possui uma conta? 
                </Text>

            </VStack>
        </VStack>
    )
}