import React, { useContext, useState } from "react";
import { Box, Heading, Input, Text, Button, VStack, Link, HStack, FormControl, Alert, Collapse, IconButton, CloseIcon } from "native-base";
import { Password } from "../../components/inputs";
import { AuthPage } from "../../components/layout";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>

import { initialValues, loginValidation } from "../../formsData/loginFormData";
import { Formik } from "formik";

import AuthContext from "../../context/authContext";
import WarningBar, { WarningProps} from "../../components/Warning";

export default function Login({ navigation }: LoginScreenProps) {
    const { navigate, reset } = navigation;
    const { signIn, isFeatching } = useContext(AuthContext);

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
                        onSubmit={async (values, actions) => {
                            const response = await signIn(values.email, values.password)
                            if (response.error) {
                                setLoginErrorStatus(true);
                                setLoginErrorMessage(response.errorMessage || '')
                                return;
                            }
                            actions.resetForm();
                            reset({
                                index: 0,
                                routes: [{ name: 'tab-screens' }]
                            })
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
                                <Button
                                    variant='brand'
                                    _text={{
                                        fontWeight: 'bold',
                                        fontSize: 'xl'
                                    }}
                                    onPress={() => handleSubmit()}
                                    isLoading={isFeatching}
                                    isLoadingText="Entrar"
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
            </AuthPage>
        </>
    )
}