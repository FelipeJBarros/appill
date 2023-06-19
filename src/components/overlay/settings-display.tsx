import React from 'react'
import { Box, Heading } from "native-base";

export function SettingsDisplay() {
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
            <Box width='full'>
                <Heading size={"sm"}>Esquema de cores</Heading>
                <Heading size={"sm"}>Notificações</Heading>
            </Box>
            Sair
        </Box>
    )
}