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
        .string()
        .required('O número de telefone é obrigatório')
        .matches(
            /^(?:\+55)?\s?(?:\d{2})?\s?9?\d{4}-?\d{4}$/,
            'Por favor, insira um número de telefone válido'
        ),
    password: Yup
        .string()
        .required('É preciso informar a senha')
        .min(8, 'A senha deve ter no múnimo 8 caracteres')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial'
        ),
    password2: Yup
        .string()
        .oneOf(
            [Yup.ref('password'), null],
            'As senhas devem ser iguais'
        )
});