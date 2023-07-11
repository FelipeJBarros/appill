import React from 'react';
import { StyleSheet, View } from "react-native"
import { Box, HStack, Text, IconButton, VStack, Badge } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import translate from '../../utils/translate';
interface ListItemProps {
    taken: string,
    time: string
    name: string,
    dose: string,
    unit: string,
}
export function ListItem({ name, taken, time, dose, unit }: ListItemProps) {
    let date = new Date(time)
    let timeString = date.toLocaleTimeString().split(' ');
    let formatTimeString = `${timeString[0].slice(0,-3)} ${timeString[1]}`
    return (
        <Box py={1}>
            <HStack alignItems='center' space={2}>
                <Box
                    bg={taken ? 'success.400' : 'amber.400'}
                    width={4} height={4} borderRadius='full'
                />
                <Text color='neutral.400'>
                    {formatTimeString}
                </Text>
            </HStack>
            <View style={styles.medicationContainer}>
                <VStack px={4} py={1}>
                    <Text
                        fontWeight={800}
                        fontSize={30}
                        color={taken ? '#333' : 'neutral.500'}
                    >
                        {name}
                    </Text>
                    <HStack space={2}>
                        <Badge
                            bg='brand.600' borderRadius='full' px={4}
                            _text={{ color: 'neutral.50', fontWeight: 800, fontSize: 16 }}
                        >
                            {`${dose} ${translate(unit)} ${Number(dose) > 1 ? 's' : ''}`}
                        </Badge>
                        {taken ? (
                            <Badge
                                bg='success.600' borderRadius='full' px={4}
                                _text={{ color: 'neutral.50', fontWeight: 800, fontSize: 16 }}
                            >
                                Feita
                            </Badge>
                        ) : (
                            <Badge
                                bg='warning.600' borderRadius='full' px={4}
                                _text={{ color: 'neutral.50', fontWeight: 800, fontSize: 16 }}
                            >
                                Pendente
                            </Badge>
                        )}
                    </HStack>
                </VStack>
            </View>
        </Box>
        // <View>
        //     <View style={styles.timeAndCicleContainer}>
        //         <View style={styles.cicleStatus}></View>
        //         <Text style={styles.time}>{time}</Text>
        //     </View>
        //     <View style={styles.medicationContainer}>
        //         <View style={{ marginLeft: 9 }}>
        //             <Text style={styles.medicationName}>Dorflex</Text>
        //             <View style={{ flexDirection: 'row' }}>
        //                 <View>
        //                     <Text style={styles.medicationDogase}>{dosage}</Text>
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    timeAndCicleContainer: { flexDirection: 'row', alignItems: 'center', gap: 3 },
    cicleStatus: { backgroundColor: '#DB601B', width: 11, height: 11, borderRadius: 100 },
    time: { fontWeight: '700', color: '#ADADAD', fontSize: 14 },
    medicationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 6, borderStyle: 'dashed',
        borderLeftWidth: 1.4,
        borderColor: '#ADADAD'
    },
    medicationName: { fontSize: 28, fontWeight: '600', color: '#ADADAD' },
    medicationDogase: {
        backgroundColor: '#AC0C29',
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderRadius: 16
    }


})