import React, { useState, useContext, useEffect } from "react";

import { Page } from "../../components/layout";
import { HStack, Icon, IconButton, Modal, ScrollView, Text, VStack, Image, Box } from "native-base";
import Calendar from "../../components/DisplayData/Calendar";
import { ListItem } from "../../components/DisplayData/ListItem";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

import AuthContext from "../../context/authContext";
import DoseContext from "../../context/doseContext";

import { Ionicons } from '@expo/vector-icons';
const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={8} color="white" />


export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    const { user } = useContext(AuthContext);
    const { currentDayDoses, getCurrentDoses } = useContext(DoseContext);

    useEffect(() => {
        async function getDailyDoses() {
            await getCurrentDoses(new Date().toISOString())
        }

        getDailyDoses();
    }, [])

    return (
        <>
            <Page spacing={12}>
                <HStack justifyContent={"space-between"} alignItems='center'>
                    <VStack>
                        <Text color='paper' lineHeight='xs'>
                            Seja bem vindo(a),
                        </Text>
                        <Text color='paper' fontSize='xl' lineHeight='xs' bold>
                            {user?.name}
                        </Text>
                    </VStack>
                    <IconButton
                        icon={OptionsIcon}
                        onPress={() => navigate('alarm', {})}
                    />
                </HStack>
                <Calendar />
                <HStack
                    justifyContent='center' alignItems='center'
                    backgroundColor='brand.900'
                    borderRadius={10} p={4} space={2}
                >
                    <VStack justifyContent='center' alignItems='center' >
                        <Text color='paper' fontSize={'lg'} bold>
                            Acompanhe suas medicações
                        </Text>
                        <Text color='paper' fontSize={'md'}>
                            Te ajudamos a não perder nenhuma delas
                        </Text>
                    </VStack>
                </HStack>
                <VStack variant='filled' flex={1}>
                    {currentDayDoses && currentDayDoses.length > 0 ? (
                        <ScrollView>
                            {currentDayDoses.map(dose => (
                                <ListItem
                                    name={dose.medication.name}
                                    taken={dose.taken}
                                    time={dose.time}
                                    dose={dose.quantity}
                                    unit={dose.medication.unitType}
                                />
                            ))}
                        </ScrollView>
                    ) : (
                        <Box
                            flex={1} justifyContent='center' alignItems='center'
                            _text={{ color: 'neutral.300' }}
                        >
                            Nenhuma medicação pra hoje
                        </Box>
                    )}
                </VStack>
            </Page>
        </>
    )
}
