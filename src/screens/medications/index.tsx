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

const _mock = [
    {
        name: 'Dorflex',
        period: 'A cada 7 dias',
        hour: '10:00AM',
        dose: 'tomar 2 pilulas',
        storage: '12 pilulas em estoque'
    },
    {
        name: 'Dipirona',
        period: 'Em dias alternados',
        hour: '10:30PM',
        dose: 'tomar 1 pilula',
        storage: '2 pilulas em estoque'
    },
    {
        name: 'Limão com mel',
        period: 'Todos os dias',
        hour: '11:45PM',
        dose: 'tomar 50 ml',
        storage: '200ml em estoque'
    },
]

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type MedicationScreenProps = NativeStackScreenProps<RootStackParamList, 'register-medication'>

import { Context as MedicationContext } from "../../context/medicationContext";
import { ActivityIndicator } from 'react-native';

export default function Medications({ navigation }: MedicationScreenProps) {
    const { navigate } = navigation;
    const [toogleStatus, setToogleStatus] = useState(true);

    const {
        state: { medications },
        getMedications
    } = useContext(MedicationContext);

    useEffect(() => {
        const getUserMedications = async () => {
            try {
                await getMedications();
            } catch (error: any) {
                console.log(error.response.data)
            }
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
                {medications && medications.length > 0 ?
                    <>
                        <ScrollView >
                            {medications
                                .filter((medication: any) => medication.active)
                                .map((medication: any) => (
                                    <MedicationListItem
                                        key={medication.id}
                                        medication={medication}
                                    />
                                ))}
                        </ScrollView>
                    </> : <>
                        <Box
                            justifyContent='center'
                            alignItems='center'
                            _text={{ color: 'neutral.300' }}
                            flex={1}
                        >
                            {/* <ActivityIndicator
                                color='#AC0C29'
                                size={40}
                            /> */}
                            Nada por aqui
                        </Box>
                    </>}
            </VStack>
        </Page>
    )
}