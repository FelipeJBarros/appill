import React, { useState } from "react";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import { Page } from "../../components/layout";
import { Box, HStack, Icon, IconButton, Modal, ScrollView, Text, VStack, Image} from "native-base";
import Calendar from "../../components/DisplayData/Calendar";
import { ListItem } from "../../components/DisplayData/ListItem";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

import { Ionicons } from '@expo/vector-icons';
const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={8} color="white" />

export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    const [userName, setUserName] = useState('UserName');
    const [isModalOpen, setModalOpenStatus] = useState(false);
    return (
        <>
            <Page spacing={12}>
                <HStack justifyContent={"space-between"} alignItems='center'>
                    <VStack>
                        <Text color='paper' lineHeight='xs'>
                            Seja bem vindo(a),
                        </Text>
                        <Text color='paper' fontSize='xl' lineHeight='xs' bold>
                            {userName}
                        </Text>
                    </VStack>
                    <IconButton
                        icon={OptionsIcon}
                        onPress={() => navigate('settings', {})}
                    />
                </HStack>
                <Calendar />
                <HStack
                    justifyContent='center' alignItems='center'
                    backgroundColor='brand.900'
                    borderRadius={10}
                    p={4} space={4}
                >
                    <Image source={require('../../../assets/images/pill-icon.png')} alt={"pilula"} marginRight={5}></Image>
                    <VStack justifyContent='center' alignItems='center' >
                        <Text color={'#fff'} fontSize={'lg'} bold>Quarta-feira, 07 de junho</Text>
                        <Text color={'#fff'} fontSize={'md'}><Text bold>01/03 </Text>medicações realizadas</Text>
                    </VStack>
                </HStack>
                <VStack variant='filled' flex={1}>
                    <ScrollView>
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                    </ScrollView>
                </VStack>
            </Page>
        </>
    )
}