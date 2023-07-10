import React, { useState, useContext, useEffect } from "react";

import { Page } from "../../components/layout";
import { Toggle } from "../../components/inputs";
import { MedicationListItem } from "../../components/display-data";

import {
    Heading,
    HStack,
    IconButton,
    Icon,
    Input,
    VStack,
    ScrollView,
    Box,
} from "native-base";

import { Ionicons } from '@expo/vector-icons';
const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={8} color="white" />
const SearchIcon = <Icon as={Ionicons} name="search" ml={2} color='neutral.400' size={6} />

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'register-medication'>

import MedicationContext from "../../context/medicationContext";
import { ActivityIndicator } from 'react-native';

export default function Medications({ navigation }: MedicationScreenProps) {
    const { navigate } = navigation;
    const [toogleStatus, setToogleStatus] = useState(true);

    const { medications, isFeatching, getMedications, deleteMedication } = useContext(MedicationContext);

    useEffect(() => {
        const getUserMedications = async () => {
            await getMedications();
        }
        getUserMedications();
    }, [])

    return (
        <Page spacing={12}>
            <HStack justifyContent='space-between' alignItems='center'>
                <Heading color="paper">
                    Medicações
                </Heading>
                <IconButton
                    icon={OptionsIcon}
                    onPress={() => navigate('settings', {})}
                />
            </HStack>
            <Input
                placeholder="Pesquise suas medicações"
                leftElement={SearchIcon}
                placeholderTextColor='neutral.400'
            />
            <Toggle
                firstOptionLabel="Ativos"
                lastOptionLabel="Pausados"
                value={toogleStatus}
                onChange={setToogleStatus}
                size="md"
            />
            <VStack variant='filled' flex={1}>
                {isFeatching ? (
                    <Box
                        justifyContent='center'
                        alignItems='center'
                        _text={{ color: 'neutral.300' }}
                        flex={1}
                    >
                        <ActivityIndicator
                            color='#AC0C29'
                            size={40}
                        />
                    </Box>
                ) : (
                    medications && medications.length > 0 && (
                        <ScrollView >
                            {medications
                                .filter((medication: any) => medication.active)
                                .map((medication: any) => (
                                    <MedicationListItem
                                        key={medication.id}
                                        medication={medication}
                                        onDelete={deleteMedication}
                                    />
                                ))}
                        </ScrollView>
                    )
                )}
            </VStack>
        </Page >
    )
}