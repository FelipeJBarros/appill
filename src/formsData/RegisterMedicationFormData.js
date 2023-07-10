import * as Yup from 'yup';

export const initialValues = {
    name: '',
    unitType: 'PILL',
    doses: [
        {time: new Date(), quantity: 1}
    ],
    frequency: "ALL_DAYS",
    until: new Date(),
    stock: 0,
    observation: ''
}

export const registerMedicationValidation = Yup.object().shape({
    name: Yup
        .string()
        .required('É preciso informar um nome'),
});