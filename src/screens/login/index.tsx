import React from "react";
import { Box, Heading, Image, Input, Text, Button, VStack, Link, HStack } from "native-base";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>

export default function Login({ navigation }: LoginScreenProps) {
    const { navigate } = navigation;
    const backgroundImage = require('../../../assets/imgs/colorfull.png')
    return (
        <Box bg={'brand.800'} maxHeight='full'>
            <Image
                source={backgroundImage} alt="Imagem de fundo"
                resizeMode="repeat"
            />
            <Box
                position='absolute' top={0} left={0}
                width='full' height='full'
            >
                <Box flex={2} justifyContent='center' p={4}>
                    <Text color='neutral.50' fontSize='4xl' lineHeight='xs'>
                        Cuidado na <Text bold>hora</Text>
                    </Text>
                    <Text color='neutral.50' fontSize='4xl' lineHeight='xs'>
                        e <Text bold>medida</Text> certa
                    </Text>
                    <Text color='neutral.50' fontSize='xl' fontWeight='light'>
                        Junte-se ao <Text bold>Appill</Text>
                    </Text>
                </Box>
                <VStack
                    bg='paper' px={4} py={8}
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    overflow='hidden'
                    justifyContent='center'
                    space={4}
                >
                    <Box>
                        <Heading size='md' lineHeight='xs'>
                            Bem-vindo(a) de volta
                        </Heading>
                        <Text lineHeight='xs' color='neutral.600'>
                            Faça o login par acessar a aplicação
                        </Text>
                    </Box>
                    <Input
                        placeholder="Email"
                    />
                    <Input
                        placeholder="Senha"
                    />
                    <Button
                        variant='brand'
                        _text={{ fontWeight: 'bold', fontSize: 'xl'}}
                    >
                        Entrar
                    </Button>
                    <HStack
                        alignItems='center' justifyContent='center'
                        flexDir='row' space={1}
                    >
                        <Text bold>Ainda não possui conta?</Text>
                        <Link
                            _text={{ color: 'brand.800', fontWeight: 'bold'}}
                            onPress={() => navigate('register', {})}
                        >
                            Registre-se aqui
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    )
}