import React, { useState } from "react";

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

export default function Medications() {
    const [toogleStatus, setToogleStatus] = useState(true);
    return (
        <Page spacing={12}>
            <HStack justifyContent='space-between' alignItems='center'>
                <Heading color="paper">
                    Medicações
                </Heading>
                <IconButton
                    icon={OptionsIcon}
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
                <ScrollView >
                    {_mock.map((medication, index) => (
                        <MedicationListItem
                            key={index}
                            medication={medication}
                        />
                    ))}
                </ScrollView>
            </VStack>
        </Page>
    )
}