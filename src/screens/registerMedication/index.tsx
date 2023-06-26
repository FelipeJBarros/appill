import React, { useState } from "react";
import { Box, Button, Icon, Input, Text, VStack, ScrollView, HStack, Select, Heading } from "native-base";
import { KeyboardAvoidingView } from "react-native";

import { LabeledSelect } from "../../components/inputs";

import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
const boardIcon = <Icon as={FontAwesome5} name='clipboard' color='brand.800' size={6} ml={2} />
const pillIcon = <Icon as={MaterialCommunityIcons} name='pill' color='brand.800' size={6} ml={2} />
const dropDownIcon = <Icon as={Entypo} name='chevron-down' size={6} />

export default function RegisterMedication() {
    const [value, setValue] = useState('pill')
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <VStack px={4} py={2} flex={1} bg='neutral.100' space={2}>
                <ScrollView borderBottomWidth={1} borderBottomColor='neutral.200'>
                    <VStack space={2}>
                        <Input
                            leftElement={boardIcon}
                            placeholder="Nome do medicamento"
                            _focus={{
                                borderColor: 'brand.800'
                            }}
                        />
                        <LabeledSelect label="Unidade" icon={pillIcon}>
                            <Select
                                defaultValue="pill"
                                selectedValue={value}
                                onValueChange={itemValue => setValue(itemValue)}
                                dropdownIcon={dropDownIcon}
                            >
                                <Select.Item label="pílula" value="pill" />
                                <Select.Item label="ml" value="ml" />
                                <Select.Item label="mg" value="mg" />
                            </Select>
                        </LabeledSelect>
                        <LabeledSelect label="Frequência" icon={pillIcon}>
                            <Select
                                defaultValue="pill"
                                selectedValue={value}
                                onValueChange={itemValue => setValue(itemValue)}
                                dropdownIcon={dropDownIcon}
                            >
                                <Select.Item label="Todos os dias" value="pill" />
                                <Select.Item label="Dias alternados" value="ml" />
                                <Select.Item label="A cada X dias" value="mg" />
                            </Select>
                        </LabeledSelect>
                    </VStack>
                </ScrollView>
                <Button
                    variant='brand'
                    _text={{ fontWeight: 'bold', fontSize: 'lg'}}
                    mb={2}
                >
                        Registrar
                </Button>
            </VStack>
        </KeyboardAvoidingView>
    )
}