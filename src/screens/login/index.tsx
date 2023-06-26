import React from "react";
import { Box, Heading, Image, Input, Text, Button, VStack, Link, HStack, FormControl } from "native-base";
import { Password } from "../../components/inputs";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>

import { initialValues, loginValidation } from "../../formsData/loginFormData";
import { Formik } from "formik";

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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidation}
                        onSubmit={(values, actions) => {
                            console.log(values)
                            actions.resetForm();
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors
                        }) => (
                            <VStack space={4}>
                                <FormControl
                                    isRequired
                                    isInvalid={'email' in errors}
                                >
                                    <Input
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        placeholder="Email"
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.email}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl
                                    isRequired
                                    isInvalid={'password' in errors}
                                >
                                    <Password
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        placeholder="Senha"
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.password}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <Button
                                    variant='brand'
                                    _text={{
                                        fontWeight: 'bold',
                                        fontSize: 'xl'
                                    }}
                                    onPress={() => handleSubmit()}
                                >
                                    Entrar
                                </Button>
                            </VStack>
                        )}
                    </Formik>
                    <HStack
                        alignItems='center' justifyContent='center'
                        flexDir='row' space={1}
                    >
                        <Text bold>Ainda não possui conta?</Text>
                        <Link
                            _text={{ color: 'brand.800', fontWeight: 'bold' }}
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