import React, { useState } from "react";
import {View, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";
import { Page } from "../../components/layout";
import { Box, HStack, Icon, IconButton, ScrollView, Text, VStack } from "native-base";
import Calendar from "../../components/DisplayData/Calendar";
import { ListItem } from "../../components/DisplayData/ListItem";
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>

export default function Home({ navigation }: HomeScreenProps) {
    const { navigate } = navigation;
    const [userName, setUserName] = useState('UserName');
    const OptionsIcon = <Icon as={Ionicons} name="md-options-outline" size={"4xl"} color="white" />
    return (
        <Page >
            <HStack justifyContent={"space-between"} >
                <VStack>
                <Text color={'#fff'}>Seja bem vindo(a),</Text>
                <Text color={'#fff'} fontSize={"xl"} bold>{userName}</Text>
                </VStack>
                <IconButton icon={OptionsIcon}></IconButton>
            </HStack>
            <VStack>
                
                <Calendar></Calendar>
                <ScrollView bg={"#fff"} paddingX={2} paddingY={4} borderRadius={10} height={'49%'}>
                    
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                        <ListItem dosage="50 ml" status="feito" time="10 PM" />
                       
                    
                </ScrollView>
            </VStack>
        </Page>
        // <View 
        //     style={{ 
        //         flex: 1,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         marginBottom: 64,
        //         gap: 8
        //     }}
        // >
        //     <Text>This is home</Text>
        //     <Button
        //         title="Go to login"
        //         onPress={() => navigate('login', {})}
        //     />

        //     <Button
        //         title="Go to alarm"
        //         onPress={() => navigate('alarm', {})}
        //     />
        // </View>
    )    
}