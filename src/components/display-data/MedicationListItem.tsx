import React from 'react';
import { Box, Button, HStack, Heading, Icon, Text, VStack } from "native-base";

import { MaterialCommunityIcons } from '@expo/vector-icons';
const pauseIcon = <Icon as={MaterialCommunityIcons} name='timer-sand-full' size={6} />
const deleteIcon = <Icon as={MaterialCommunityIcons} name='trash-can' size={6} />

export function MedicationListItem({ medication }) {
    return (
        <VStack borderColor='neutral.100' borderWidth={1} borderRadius={10} m={1}>
            <Box p={2}>
                <Heading>{medication.name}</Heading>
                <HStack divider={<Text>•</Text>} space={2}>
                    <Text color={'neutral.500'}>
                        {medication.period}
                    </Text>
                    <Text color={'neutral.500'}>
                        {medication.hour}
                    </Text>
                    <Text color={'neutral.500'}>
                        {medication.dose}
                    </Text>
                </HStack>
                <Text color={'neutral.500'}>
                    {medication.storage}
                </Text>
            </Box>
            <HStack bg='brand.50' mt='1.5'>
                <Button
                    flex={1} variant='unstyled'
                    size='xs'
                    leftIcon={pauseIcon}
                >
                    <Text color={'neutral.500'} fontSize={18} fontWeight={700}>
                        Pausar
                    </Text>
                </Button>
                <Button
                    flex={1} variant='unstyled'
                    size='xs'
                    leftIcon={deleteIcon}
                >
                    <Text color={'neutral.500'} fontSize={18} fontWeight={700}>
                        Deletar
                    </Text>
                </Button>
            </HStack>
        </VStack>
    )
}