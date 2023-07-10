import React from 'react';
import { Box, Button, HStack, Heading, Icon, Text, VStack } from "native-base";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
const pauseIcon = <Icon as={MaterialCommunityIcons} name='timer-sand-full' size={6} />
const deleteIcon = <Icon as={MaterialCommunityIcons} name='trash-can' size={6} />

import translate from '../../utils/translate';

export function MedicationListItem({ medication }: any) {
    let multi = medication.stock > 1 && medication.unitType != 'LIQUID'
    return (
        <VStack borderColor='neutral.100' borderWidth={1} borderRadius={10} m={1}>
            <Box p={2}>
                <Heading>{medication.name}</Heading>
                {medication.doses.map((dose:any) => (
                    <HStack key={dose.id} divider={<Text>•</Text>} space={2}>
                        <Text color={'neutral.500'}>
                            {translate(medication.frequency)}
                        </Text>
                        <Text color={'neutral.500'}>
                            {moment(dose.time).format('LT')}
                        </Text>
                        <Text color={'neutral.500'}>
                            {`${dose.quantity} ${translate(medication.unitType)}${dose.quantity > 1 && medication.unitType != 'LIQUID' ? 's' : ''}`}
                        </Text>
                    </HStack>
                ))}
                <Text color={'neutral.500'}>
                    {`${medication.stock} ${translate(medication.unitType)}${multi ? 's' : ''} em estoque`}
                </Text>
            </Box>
            <HStack bg='brand.50' mt='1.5'>
                <Button
                    flex={1} variant='unstyled'
                    size='xs'
                    leftIcon={pauseIcon}
                    onPress={() => console.log('Pausei')}
                >
                    <Text color={'neutral.500'} fontSize={18} fontWeight={700}>
                        Pausar
                    </Text>
                </Button>
                <Button
                    flex={1} variant='unstyled'
                    size='xs'
                    leftIcon={deleteIcon}
                    onPress={() => console.log('Deletei')}
                >
                    <Text color={'neutral.500'} fontSize={18} fontWeight={700}>
                        Deletar
                    </Text>
                </Button>
            </HStack>
        </VStack>
    )
}