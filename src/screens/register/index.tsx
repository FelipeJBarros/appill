import React, { useContext, useState } from "react";

import { AuthPage } from "../../components/layout";
import { Box, VStack, Text, Heading, HStack, Link, IconButton, Icon, FormControl, Input, Button } from "native-base";
import { Entypo } from '@expo/vector-icons';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'register'>

import { Formik } from "formik";
import { initialValues, RegisterValidation } from "../../formsData/RegisterFormData";
import { Password } from "../../components/inputs";

import AuthContext from "../../context/authContext";
import WarningBar from "../../components/Warning";

export default function Register({ navigation }: RegisterScreenProps) {
    const { navigate } = navigation
    const { signUp, isFeatching } = useContext(AuthContext);

    const [loginHasError, setLoginErrorStatus] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    return (
        <>
            <WarningBar
                isOpen={loginHasError}
                type="error"
                message={loginErrorMessage}
                onClose={() => setLoginErrorStatus(false)}
            />
            <AuthPage>
                <Box
                    flex={2} p={4}
                    justifyContent='center'
                    alignItems='center'
                >
                    <IconButton
                        position='absolute' top={4} left={4}
                        alignSelf='flex-start'
                        bg='paper'
                        borderRadius='full'
                        onPress={() => navigate('login', {})}
                        icon={
                            <Icon
                                as={Entypo} name='chevron-thin-left'
                                size={6} color='brand.800'
                            />
                        }
                        _pressed={{
                            bg: 'neutral.100'
                        }}
                    />
                    <Text
                        color='neutral.50'
                        fontSize='6xl'
                        lineHeight='xs'
                        fontWeight='extrabold'
                    >
                        APPill
                    </Text>
                    <Text
                        color='neutral.50'
                        fontSize='lg'
                        fontWeight='normal'
                        lineHeight='xs'
                    >
                        Cuidado na hora certa
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
                            Crie sua conta
                        </Heading>
                        <Text lineHeight='xs' color='neutral.600'>
                            Preencha o formulário para continuar
                        </Text>
                    </Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={RegisterValidation}
                        onSubmit={async (values, actions) => {
                            let data = {
                                email: values.email,
                                name: values.name,
                                password: values.password,
                                phoneNumber: values.phoneNumber
                            }
                            const response = await signUp(data)
                            if (response.error) {
                                setLoginErrorStatus(true);
                                setLoginErrorMessage(response.errorMessage || '')
                                return;
                            }
                            actions.resetForm();
                            navigate('login', {});
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            touched,
                            errors
                        }) => (
                            <VStack space={4}>
                                <FormControl
                                    isRequired={true && touched.name}
                                    isInvalid={'name' in errors && touched.name}
                                >
                                    <Input
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        placeholder="Nome"
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.name}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl
                                    isRequired={true && touched.email}
                                    isInvalid={'email' in errors && touched.email}
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
                                    isRequired={true && touched.phoneNumber}
                                    isInvalid={'phoneNumber' in errors && touched.phoneNumber}
                                >
                                    <Input
                                        value={values.phoneNumber}
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur('phoneNumber')}
                                        placeholder="Telefone"
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.phoneNumber}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl
                                    isRequired={true && touched.password}
                                    isInvalid={'password' in errors && touched.password}
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
                                <FormControl
                                    isRequired={true && touched.password2}
                                    isInvalid={'password2' in errors && touched.password}
                                >
                                    <Password
                                        value={values.password2}
                                        onChangeText={handleChange('password2')}
                                        onBlur={handleBlur('password2')}
                                        placeholder="Confirmar senha"
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.password2}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <Button
                                    variant='brand'
                                    _text={{
                                        fontWeight: 'bold',
                                        fontSize: 'xl'
                                    }}
                                    onPress={() => handleSubmit()}
                                    isLoading={isFeatching}
                                    isLoadingText="Cadastrar"
                                >
                                    Cadastrar
                                </Button>
                            </VStack>
                        )}
                    </Formik>
                    <HStack
                        alignItems='center' justifyContent='center'
                        flexDir='row' space={1}
                    >
                        <Text bold>Já possui uma conta?</Text>
                        <Link
                            _text={{ color: 'brand.800', fontWeight: 'bold' }}
                            onPress={() => navigate('login', {})}
                        >
                            Faça o login
                        </Link>
                    </HStack>
                </VStack>
            </AuthPage>
        </>
    )
}