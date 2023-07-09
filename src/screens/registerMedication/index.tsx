import React, { useState, useContext } from "react";
import { Box, Button, Icon, Input, Text, VStack, ScrollView, HStack, Select, Heading } from "native-base";
import { KeyboardAvoidingView } from "react-native";

import { LabeledSelect, CalendarInput } from "../../components/inputs";

import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
const boardIcon = <Icon as={FontAwesome5} name='clipboard' color='brand.800' size={6} ml={2} />
const calendarIcon = <Icon as={FontAwesome5} name='calendar' color='brand.800' size={6} ml={2} />
const timeCalendarIcon = <Icon as={MaterialCommunityIcons} name='calendar-clock' color='brand.800' size={6} ml={2} />
const pillIcon = <Icon as={MaterialCommunityIcons} name='pill' color='brand.800' size={6} ml={2} />
const stockIcon = <Icon as={FontAwesome5} name='briefcase-medical' color='brand.800' size={5} ml={3} />
const dropDownIcon = <Icon as={Entypo} name='chevron-down' size={6} />

import { initialValues, registerMedicationValidation } from "../../formsData/RegisterMedicationFormData";

import MedicationContext from "../../context/medicationContext";
import { Formik, FieldArray } from "formik";

export default function RegisterMedication() {
    const [value, setValue] = useState('pill');
    const { isFeatching, registerMedication } = useContext(MedicationContext);
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <Formik
                initialValues={initialValues}
                // validationSchema={registerMedicationValidation}
                onSubmit={(values, actions) => {
                    console.log(values)
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
                                <LabeledSelect label="Unidade" icon={pillIcon}>
                                    <Select
                                        selectedValue={values.unitType}
                                        onValueChange={handleChange('unitType')}
                                        onClose={handleBlur('unitType')}
                                        dropdownIcon={dropDownIcon}
                                    >
                                        <Select.Item label="pílula" value="PILL" />
                                        <Select.Item label="ml" value="LIQUID" />
                                    </Select>
                                </LabeledSelect>
                                <FieldArray
                                    name="doses"
                                    render={({insert, remove}) => (
                                        <Box>
                                            <Button
                                                onPress={() => insert(values.doses.length + 1, { time: '', quantity: '0' })}
                                            >
                                                Add
                                            </Button>
                                            {values.doses.map((dose, index) => (
                                                <Box flexDirection='row'>
                                                    <Input
                                                        flex={1}
                                                        value={dose?.quantity}
                                                        onChangeText={handleChange(`doses.${index}.quantity`)}
                                                    />
                                                    <Input
                                                        flex={1}
                                                        value={dose?.time}
                                                    />
                                                    <Button
                                                        onPress={() => remove(index)}
                                                    >
                                                        -
                                                    </Button>
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                />
                                <LabeledSelect label="Estoque" icon={stockIcon}>
                                    <Input
                                        value={values.stock}
                                        placeholder='Vazio'
                                        keyboardType="decimal-pad"
                                        onChangeText={(value) => setFieldValue('stock', value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))}
                                        onBlur={handleBlur('stock')}
                                        borderWidth={0}
                                        flex={1}
                                        textAlign='right'
                                    />
                                </LabeledSelect>
                                <LabeledSelect label="Termina em" icon={timeCalendarIcon}>
                                    <CalendarInput
                                        value={values.until}
                                        onChange={(value: string) => setFieldValue('until', value)}
                                    />
                                </LabeledSelect>
                                <LabeledSelect label="Frequência" icon={timeCalendarIcon}>
                                    <Select
                                        selectedValue={values.frequency}
                                        onValueChange={handleChange('frequency')}
                                        onClose={handleBlur('frequency')}
                                        dropdownIcon={dropDownIcon}
                                    >
                                        <Select.Item label="Todos os dias" value="ALL" />
                                    </Select>
                                </LabeledSelect>
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
    )
}