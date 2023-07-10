import React, { useState, useContext } from "react";
import { Box, Button, Icon, Input, Text, VStack, ScrollView, HStack, Select, Heading, InputGroup, InputRightAddon, TextArea, Divider, FormControl } from "native-base";
import { KeyboardAvoidingView } from "react-native";

import { LabeledSelect, CalendarInput, DoseInput } from "../../components/inputs";

import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons';
const boardIcon = <Icon as={FontAwesome5} name='clipboard' color='brand.800' size={6} ml={2} />
const timeCalendarIcon = <Icon as={MaterialCommunityIcons} name='calendar-clock' color='brand.800' size={6} ml={2} />
const pillIcon = <Icon as={MaterialCommunityIcons} name='pill' color='brand.800' size={6} ml={2} />
const stockIcon = <Icon as={FontAwesome5} name='briefcase-medical' color='brand.800' size={5} ml={2.5} />
const doseIcon = <Icon as={Fontisto} name='drug-pack' color='brand.800' size={5} ml={2.5} />
const dropDownIcon = <Icon as={Entypo} name='chevron-down' size={6} />

import { initialValues, registerMedicationValidation } from "../../formsData/RegisterMedicationFormData";

import MedicationContext from "../../context/medicationContext";
import { Formik, FieldArray } from "formik";
import WarningBar from "../../components/Warning";

export default function RegisterMedication({ navigation }: any) {
    const { navigate } = navigation;
    const { isFeatching, registerMedication } = useContext(MedicationContext);
    const [registerHasError, setRegisterErrorStatus] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState('');
    return (
        <>
            <WarningBar
                isOpen={registerHasError}
                type="error"
                message={registerErrorMessage}
                onClose={() => setRegisterErrorStatus(false)}
            />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerMedicationValidation}
                    onSubmit={async (values, actions) => {
                        const data = {
                            ...values,
                            frequency: [values.frequency],
                        }
                        console.log(JSON.stringify(data, null, 2))
                        const response = await registerMedication(data);
                        if (response.error) {
                            setRegisterErrorStatus(true);
                            setRegisterErrorMessage(response.errorMessage || '')
                            return;
                        } else {
                            actions.resetForm();
                            navigate('tab-screens', {})
                        }
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        values,
                        touched,
                        errors
                    }) => (
                        <VStack px={4} py={2} flex={1} bg='neutral.100' space={2}>
                            <ScrollView borderBottomWidth={1} borderBottomColor='neutral.200'>
                                <VStack space={2}>
                                    <FormControl
                                        isRequired={true && touched.name}
                                        isInvalid={'name' in errors && touched.name}
                                    >
                                        <Input
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            leftElement={boardIcon}
                                            placeholder="Nome do medicamento"
                                            _focus={{
                                                borderColor: 'brand.800'
                                            }}
                                        />
                                        <FormControl.ErrorMessage>
                                            {errors.name}
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <LabeledSelect label="Unidade" icon={pillIcon}>
                                        <Select
                                            selectedValue={values.unitType}
                                            onValueChange={handleChange('unitType')}
                                            dropdownIcon={dropDownIcon}
                                        >
                                            <Select.Item label="pílula" value="PILL" />
                                            <Select.Item label="ml" value="LIQUID" />
                                        </Select>
                                    </LabeledSelect>
                                    <FieldArray
                                        name="doses"
                                        render={({ insert, remove }: any) => (
                                            <DoseInput.Container>
                                                <DoseInput.Header
                                                    icon={doseIcon}
                                                    label='Doses'
                                                    onAddPress={
                                                        () => insert(values.doses.length + 1, { time: new Date(), quantity: 1 })
                                                    }
                                                />
                                                {values.doses.map((dose, index) => (
                                                    <DoseInput.Inputs key={index}>
                                                        <CalendarInput
                                                            value={values.doses[index].time}
                                                            onChange={
                                                                (value: any) => setFieldValue(`doses.${index}.time`, value)
                                                            }
                                                            calendarProps={{
                                                                mode: "time",
                                                            }}
                                                            inputProps={{
                                                                leftElement: timeCalendarIcon,
                                                                placeholder: new Date().toLocaleTimeString('pt-BR').slice(0, -3),
                                                            }}
                                                        />
                                                        <DoseInput.AddonInputWrapper value={values.unitType}>
                                                            <Input
                                                                value={String(values.doses[index].quantity)}
                                                                placeholder='1'
                                                                keyboardType="decimal-pad"
                                                                onChangeText={
                                                                    (value) => setFieldValue(
                                                                        `doses.${index}.quantity`,
                                                                        Number(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
                                                                    )
                                                                }
                                                                onBlur={handleBlur(`doses.${index}.quantity`)}
                                                                borderWidth={0}
                                                                flex={1}
                                                            />
                                                        </DoseInput.AddonInputWrapper>
                                                        <DoseInput.RemoveButton onPress={() => remove(index)} />
                                                    </DoseInput.Inputs>
                                                ))}
                                            </DoseInput.Container>
                                        )}
                                    />
                                    <LabeledSelect label="Estoque" icon={stockIcon}>
                                        <InputGroup flex={1}>
                                            <Input
                                                value={String(values.stock)}
                                                placeholder='Vazio'
                                                keyboardType="decimal-pad"
                                                onChangeText={
                                                    (value) => setFieldValue(
                                                        'stock',
                                                        Number(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
                                                    )
                                                }
                                                onBlur={handleBlur('stock')}
                                                borderWidth={0} flex={1} textAlign='right'
                                            />
                                            <InputRightAddon borderWidth={0}>
                                                <Text fontWeight={800} fontSize={16}>
                                                    {values.unitType}
                                                </Text>
                                            </InputRightAddon>
                                        </InputGroup>

                                    </LabeledSelect>
                                    <LabeledSelect label="Termina em" icon={timeCalendarIcon}>
                                        <CalendarInput
                                            value={values.until}
                                            onChange={(value: string) => setFieldValue('until', value)}
                                            calendarProps={{
                                                mode: "date",
                                                display: "calendar"
                                            }}
                                            inputProps={{
                                                placeholder: new Date().toLocaleDateString('pt-BR'),
                                                borderWidth: 0,
                                                textAlign: 'right'
                                            }}
                                        />
                                    </LabeledSelect>
                                    <LabeledSelect label="Frequência" icon={timeCalendarIcon}>
                                        <Select
                                            selectedValue={values.frequency}
                                            onValueChange={handleChange('frequency')}
                                            dropdownIcon={dropDownIcon}
                                        >
                                            <Select.Item label="Todos os dias" value="ALL_DAYS" />
                                            <Select.Item label="Em dias pares" value="EVEN_DAYS" />
                                            <Select.Item label="Em dias ímpares" value="ODD_DAYS" />
                                        </Select>
                                    </LabeledSelect>
                                    <VStack bg="paper" p={2} space={2} borderRadius={8}>
                                        <HStack space={3} ml={-2} alignItems='center'>
                                            <Icon
                                                as={Entypo} name='text-document'
                                                color='brand.800' size={5} ml={2.5}
                                            />
                                            <Text fontSize={'md'} fontWeight='bold' flex={1}>
                                                Observações
                                            </Text>
                                        </HStack>
                                        <Divider />
                                        <TextArea
                                            value={values.observation}
                                            onChangeText={handleChange('observation')}
                                            onBlur={handleBlur('observation')}
                                            placeholder="Observações..."
                                            numberOfLines={4}
                                            autoCompleteType={null}
                                        />
                                    </VStack>
                                </VStack>
                            </ScrollView>
                            <Button
                                variant='brand'
                                _text={{ fontWeight: 'bold', fontSize: 'lg' }} mb={2}
                                isLoading={isFeatching}
                                isLoadingText="Registrar"
                                onPress={async () => handleSubmit()}
                            >
                                Registrar
                            </Button>
                        </VStack>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </>
    )
}