import React, { useContext, useEffect } from "react";
import { Text, Box, Heading, Divider, HStack, VStack, ScrollView, Button } from "native-base";
import { AuthPage } from "../../components/layout";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import DoseContext from "../../context/doseContext";
type AlarmScreenProps = NativeStackScreenProps<RootStackParamList, 'alarm'>
export default function Alarm() {
    const {dose, getDose} = useContext(DoseContext)
    useEffect(()=>{
        getDose("56d7633f-1bf7-4f7a-979a-6c54a0c35e09")
    }, [])
    return (
        <AuthPage>
            <Box px={6} flex={1}>

            <Box alignItems={'center'} pt={"12"}>
                    <Heading fontWeight={"medium"} color='neutral.50' fontSize='7xl'>
                       11:45<Text fontSize={"4xl"}>pm</Text>
                    </Heading>
                </Box>
                <VStack pt={12} >
                    <Text fontWeight={"light"} color='neutral.50' fontSize='xl'>Está na hora da sua dose de</Text>
                    <Heading fontWeight={"medium"} color='neutral.50' fontSize='4xl'>
                       Limão com Mel
                    </Heading>
                    <HStack alignItems={'center'} justifyContent={'center'}>
                    <Divider orientation="horizontal" flex={1} overflow={'hidden'}  maxW={"70%"} marginRight={6}/>
                    <Heading fontWeight={"light"} color='neutral.50' fontSize='5xl' maxW={'100%'}>
                        50 ml
                    </Heading>
                    </HStack>
                </VStack>
                <ScrollView mt={6} p={4} borderRadius={'lg'} h={"32"} maxH={'32'} bgColor={'rgba(255,225,255,0.5)'} >
                    <Text color={'neutral.50'} fontWeight={'bold'} fontSize={'xl'} marginBottom={2}>Observações: </Text>
                    <Text color={'neutral.50'} fontSize={'xl'}>Observação aqui</Text>
                </ScrollView>

                <VStack flex={1} bg='paper' mx={-6} mt={8} borderTopLeftRadius={20} borderTopRightRadius={20} overflow='hidden'
                justifyContent='center' space={4} pt={2} px={8}>
      <Button
    variant='brand' 
    _text={{
    fontWeight: 'bold',
    fontSize: 'xl'
    }}>
    Feito
    </Button>
      <Button
    variant='ghost' 
    _text={{
    fontWeight: 'bold',
    fontSize: 'xl',
    color: 'brand.800',
    }}>
    Adiar
    </Button>
    </VStack>
            </Box>
        </AuthPage>
    )    
}