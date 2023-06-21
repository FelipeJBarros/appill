import React from 'react';
import {  StyleSheet, Text, View } from "react-native"
import { IconButton } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
interface ListItemProps {
    status: string,
    dosage:string,
    time: string
}
export function ListItem({status, dosage, time}: ListItemProps){
    return(
        <View>
            <View style={styles.timeAndCicleContainer}>
                <View style={styles.cicleStatus}></View>
                <Text style={styles.time}>{time}</Text>
                </View>
            <View style={styles.medicationContainer}>
                <View style={{marginLeft: 9}}>
                    <Text style={styles.medicationName}>Dorflex</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.medicationDogase}>{dosage}</Text>
                        </View>
                    </View>
                </View>
               
                <IconButton 
                backgroundColor={'#F98B9D'} 
                size={'lg'} 
                style={{width: 60, marginRight: 10}} 
                borderRadius={9} 
                variant="solid" 
                _icon={{
                as: FontAwesome5,
                 name: "pen"
                 }} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    timeAndCicleContainer: {flexDirection: 'row', alignItems: 'center', gap: 3},
    cicleStatus: {backgroundColor: '#DB601B', width: 11, height: 11, borderRadius: 100},
    time: {fontWeight: '700', color:'#ADADAD', fontSize: 14},
    medicationContainer: {
         flexDirection: 'row',
         justifyContent: 'space-between', 
         marginLeft: 4.8, borderStyle: 'dashed', 
         borderLeftWidth: 1.4, 
         borderColor: '#ADADAD'},
    medicationName: {fontSize: 28, fontWeight: '600', color:'#ADADAD'},
    medicationDogase: {
        backgroundColor: '#AC0C29', 
        color: '#fff', 
        paddingVertical: 2, 
        paddingHorizontal: 15, 
        borderRadius: 16}


})