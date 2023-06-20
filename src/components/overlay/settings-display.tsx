import React, { useState } from 'react'
import { Box, Heading, Icon } from "native-base";
import { Toggle } from '../inputs';

import { Ionicons } from '@expo/vector-icons';
const sunIcon = <Icon as={Ionicons} name='sunny' size='sm' />
const moonIcon = <Icon as={Ionicons} name='moon' size='sm' />
const notificationOnIcon = <Icon as={Ionicons} name='notifications' size='sm' />
const notificationOffIcon = <Icon as={Ionicons} name='notifications-off' size='sm' />


export function SettingsDisplay() {
    const [themeStatus, setThemeStatus] = useState(true);
    const [notificationStatus, setNotificationStatus] = useState(true);

    return (
        <Box
            padding={2}
            width={'3/5'} height={'full'} bg={'#FCFDFD'}
            position={'absolute'} top={0} right={0}
            borderTopLeftRadius={10}
            borderBottomLeftRadius={10}
            justifyContent='space-between'
            alignItems='center'
        >
            <Box width='full' style={{ gap: 8 }}>
                <Heading size={"sm"}>Esquema de cores</Heading>
                <Box bg='neutral.100' p={0.5} borderRadius={10}>
                    <Toggle
                        firstOptionLabel='Claro'
                        firstIcon={sunIcon}
                        lastOptionLabel='Escuro'
                        lastIcon={moonIcon}
                        value={themeStatus}
                        onChange={setThemeStatus}
                        size='sm'
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
                        size='sm'
                    />
                </Box>
            </Box>
            Sair
        </Box>
    )
}