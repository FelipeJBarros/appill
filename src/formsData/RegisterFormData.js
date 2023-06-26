import * as Yup from 'yup';

export const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    password2: '',
}

export const RegisterValidation = Yup.object().shape({
    name: Yup
        .string()
        .required('É preciso informar um nome'),
    email: Yup
        .string()
        .email('Email inválido')
        .required('É preciso informar um email'),
    phoneNumber: Yup
        .string(),
    password: Yup
        .string()
        .required('É preciso informar a senha'),
    password2: Yup
        .string()
        .oneOf(
            [Yup.ref('password'), null],
            'As senhas devem ser iguais'
        )
});