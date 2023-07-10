import React, { useState } from 'react';
import { Box, Button, HStack, Heading, Icon, Modal, Text, VStack } from "native-base";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
const pauseIcon = <Icon as={MaterialCommunityIcons} name='timer-sand-full' size={6} />
const deleteIcon = <Icon as={MaterialCommunityIcons} name='trash-can' size={6} />

import translate from '../../utils/translate';

export function MedicationListItem({ medication, onDelete }: any) {
    let multi = medication.stock > 1 && medication.unitType != 'LIQUID'
    const [warningModalIsOpen, setWarningModalOpen] = useState(false);
    const [currentMedication, setCurrentMedication] = useState({});

    function handleWarningDelete(medication: object, name: string) {
        setWarningModalOpen(true);
        setCurrentMedication(medication);
    }

    return (
        <>
            <VStack borderColor='neutral.100' borderWidth={1} borderRadius={10} m={1}>
                <Box p={2}>
                    <Heading>{medication.name}</Heading>
                    {medication.doses.map((dose: any) => (
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
                        onPress={() => handleWarningDelete(medication, medication.name)}
                    >
                        <Text color={'neutral.500'} fontSize={18} fontWeight={700}>
                            Deletar
                        </Text>
                    </Button>
                </HStack>
            </VStack>
            <Modal
                isOpen={warningModalIsOpen}
                onClose={() => setWarningModalOpen(false)}
                safeAreaTop={true}
            >
                <Modal.Content width='full'>
                    <Modal.Body justifyContent='center' alignItems='center' p={4}>
                        <Text fontWeight={800} fontSize={18} textAlign='center'>
                            Deseja realmente excluir a medicação <Text color='brand.500'>{currentMedication.name}</Text>?
                        </Text>
                    </Modal.Body>
                    <Modal.Footer justifyContent='center'>
                        <Button.Group space={4}>
                            <Button variant="outline" colorScheme="error" onPress={() => {
                                setWarningModalOpen(false);
                            }}>
                                Cancelar
                            </Button>
                            <Button variant='solid' colorScheme="success" onPress={async () => {
                                await onDelete(currentMedication.id)
                            }}>
                                Sim, desejo
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    )
}