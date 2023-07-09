import * as Yup from 'yup';

export const initialValues = {
    name: '',
    unitType: 'PILL',
    doses: [],
    frequency: "ALL",
    until: new Date(),
    stock: ''
}

export const registerMedicationValidation = Yup.object().shape({
    name: Yup
        .string()
        .required('É preciso informar um nome'),
    unitType: Yup
        .string()
        .oneOf(
            ['PILL', 'LIQUID'],
            "Valor inválido"
        )
        .required('É preciso informar a unidade'),
    doses: Yup
        .array()
        .min(1, "É preciso informar pelo menos uma dose"),
    frequency: Yup
        .string()
        .required('É preciso informar a frequência'),
    until: Yup
        .date()
        .required('Informe até quando dura o tratamento'),
    stock: Yup
        .string()
        .required('É preciso informar o stock')
});