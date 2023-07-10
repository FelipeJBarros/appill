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

import { Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={8} color="white" />
const SearchIcon = <Icon as={Ionicons} name="search" ml={2} color='neutral.400' size={6} />
const cleanFilterIcon = <Icon as={MaterialCommunityIcons} name="filter-off" color='brand.400' size={6} />

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'register-medication'>

import MedicationContext from "../../context/medicationContext";
import { ActivityIndicator } from 'react-native';

export default function Medications({ navigation }: MedicationScreenProps) {
    const { navigate } = navigation;
    const [toogleStatus, setToogleStatus] = useState(true);
    const [searchFor, setSearchFor] = useState('');

    const { medications, isFeatching, getMedications, deleteMedication, toggleMedicationStatus } = useContext(MedicationContext);

    useEffect(() => {
        const getUserMedications = async () => {
            await getMedications({ name: searchFor, isActive: toogleStatus });
        }
        getUserMedications();
    }, [toogleStatus])

    async function onFilterSubmit() {
        await getMedications({ name: searchFor, isActive: toogleStatus });
    }

    async function cleanFilter() {
        if(searchFor != '') {
            setSearchFor('');
            await getMedications({ isActive: toogleStatus })
        }
    }

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
            <HStack justifyContent='space-between' space={2}>
                <Input
                    flex={1}
                    value={searchFor}
                    onChangeText={setSearchFor}
                    placeholder="Pesquise suas medicações"
                    leftElement={SearchIcon}
                    placeholderTextColor='neutral.400'
                    onSubmitEditing={onFilterSubmit}
                />
                <IconButton
                    bg='paper'
                    icon={cleanFilterIcon}
                    onPress={cleanFilter}
                />
            </HStack>
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
                    medications && medications.length > 0 ? (
                        <ScrollView >
                            {medications
                                .map((medication: any) => (
                                    <MedicationListItem
                                        key={medication.id}
                                        medication={medication}
                                        onDelete={deleteMedication}
                                        onPause={toggleMedicationStatus}
                                    />
                                ))}
                        </ScrollView>
                    ) : (
                        <Box
                            flex={1} justifyContent='center' alignItems='center'
                            _text={{ color: 'neutral.300' }}
                        >
                            Nada por aqui
                        </Box>
                    )
                )}
            </VStack>
        </Page >
    )
}