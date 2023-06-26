import * as Yup from 'yup';

export const initialValues = {
    email: '',
    password: ''
}

export const loginValidation = Yup.object().shape({
    email: Yup
        .string()
        .email('Email inválido')
        .required('É preciso informar um email'),
    password: Yup
        .string()
        .required('É preciso informar a senha')
});