import React, { useState } from 'react'
import { Box, Button, Heading, Icon, VStack } from "native-base";
import { Page } from '../../components/layout';
import { Toggle } from '../../components/inputs';

import { Ionicons } from '@expo/vector-icons';
const sunIcon = <Icon as={Ionicons} name='sunny' size='sm' />
const moonIcon = <Icon as={Ionicons} name='moon' size='sm' />
const notificationOnIcon = <Icon as={Ionicons} name='notifications' size='sm' />
const notificationOffIcon = <Icon as={Ionicons} name='notifications-off' size='sm' />

export default function Settings() {
    const [themeStatus, setThemeStatus] = useState(true);
    const [notificationStatus, setNotificationStatus] = useState(true);

    return (
        <Box flex={1} p={4}>
            <VStack space={2} flex={1}>
                <Heading size={"sm"}>Esquema de cores</Heading>
                <Box bg='neutral.100' p={0.5} borderRadius={10}>
                    <Toggle
                        firstOptionLabel='Claro'
                        firstIcon={sunIcon}
                        lastOptionLabel='Escuro'
                        lastIcon={moonIcon}
                        value={themeStatus}
                        onChange={setThemeStatus}
                        size='md'
                    />
                </Box>
                <Heading size={"sm"}>Notificações</Heading>
                <Box bg='neutral.100' p={0.5} borderRadius={10}>
                    <Toggle
                        firstOptionLabel='Ativas'
                        firstIcon={notificationOnIcon}
                        lastOptionLabel='Inativas'
                        lastIcon={notificationOffIcon}
                        value={notificationStatus}
                        onChange={setNotificationStatus}
                        size='md'
                    />
                </Box>
            </VStack>
            <Button
                variant='outline'
                borderColor='brand.500'
                _text={{
                    color: 'brand.500',
                    fontSize: 'md'
                }}
                _pressed={{
                    bg: 'brand.100'
                }}
            >
                Sair
            </Button>
        </Box>
    )
}