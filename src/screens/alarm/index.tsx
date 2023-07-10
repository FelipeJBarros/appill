import React, { useContext, useEffect, useState } from "react";
import { Text, Box, Heading, Divider, HStack, VStack, ScrollView, Button } from "native-base";
import { AuthPage } from "../../components/layout";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import {} from 'native-base'
import DoseContext from "../../context/doseContext";
import translate from "../../utils/translate";
import { ActivityIndicator } from "react-native";
type AlarmScreenProps = NativeStackScreenProps<RootStackParamList, 'alarm'>
export default function Alarm({ navigation }: AlarmScreenProps) {
    const { navigate } = navigation;
    const {dose, getDose, updateDose, isFeatching} = useContext(DoseContext)
    const [values, setValues] = useState({})
    const [data, setData] = useState('')
    const id = "b831991d-7f08-4628-a180-730ec43b797f"
    const getDataFormat = () =>{
        if(dose.time?.toString()){
            const data = dose.time?.toString();
            const dataObj = new Date(data)
            const hours = dataObj.getUTCHours();
            const minutes = dataObj.getUTCMinutes();
            const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            setData(result)
        }
    }
    useEffect(()=>{
        const asyncGetDose = async () => {
            await getDose(id)
        } 
        asyncGetDose()
    }, [])

    useEffect(()=>{
        getDataFormat();
    }, [dose])

    const handleUpdateDose = async () => {
        if(dose.time){
            const dataObj = new Date(dose.time);
    dataObj.setMinutes(dataObj.getMinutes() + 15);
    await updateDose(id, {time: dataObj, sent: false, taken: false})
    navigate('home', {})
        }
    }
    const handleDoneDose = async () => {
        if(dose.time){
           
    await updateDose(id, { sent: true, taken: true})
    navigate('home', {})
        }
    }
    return (
        <AuthPage>
            <Box px={6} flex={1}>

            {isFeatching ? (
                   <Box flex={1} justifyContent={'center'} alignItems={'center'}>

                   <ActivityIndicator  color='#fff' size={100} />
                 </Box>
               
                ) : (
                    <>




                    <Box alignItems={'center'} pt={"12"}>
                    <Heading fontWeight={"medium"} color='neutral.50' fontSize='7xl'>
                       {data}
                    </Heading>
                </Box>
                <VStack pt={12} >
                    <Text fontWeight={"light"} color='neutral.50' fontSize='xl'>Está na hora da sua dose de</Text>
                    <Heading fontWeight={"medium"} color='neutral.50' fontSize='4xl'>
                      {dose.medication.name}
                    </Heading>
                    <HStack alignItems={'center'} justifyContent={'center'}>
                    <Divider orientation="horizontal" flex={1} overflow={'hidden'}  maxW={"70%"} marginRight={6}/>
                    <Heading fontWeight={"light"} color='neutral.50' fontSize='5xl' maxW={'100%'}>
                        {dose.quantity} {translate(dose.medication.unitType)}
                    </Heading>
                    </HStack>
                </VStack>
                <ScrollView mt={6} p={4} borderRadius={'lg'} h={"32"} maxH={'32'} bgColor={'rgba(255,225,255,0.5)'} >
                    <Text color={'neutral.50'} fontWeight={'bold'} fontSize={'xl'} marginBottom={2}>Observações: </Text>
                    <Text color={'neutral.50'} fontSize={'xl'}>{dose.medication.observation}</Text>
                </ScrollView>

                <VStack flex={1} bg='paper' mx={-6} mt={8} borderTopLeftRadius={20} borderTopRightRadius={20} overflow='hidden'
                justifyContent='center' space={4} pt={2} px={8}>
      <Button
    variant='brand' 
    onPress={handleDoneDose}
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
    }}
    onPress={handleUpdateDose}
    >
    Adiar
    </Button>
    </VStack>
                    </>
                )
            }
         
            </Box>
        </AuthPage>
    )    
}