import React, { useState } from "react";
import { Page } from "../../components/layout";
import { SettingsDisplay } from "../../components/overlay";

import { Box, Heading, HStack, IconButton, Icon, Modal, Input, VStack } from "native-base";

import { AntDesign, Ionicons } from '@expo/vector-icons';
const SettingIcon = <Icon as={AntDesign} name='setting' color="#FCFDFD" size={6} />
const SearchIcon = <Icon as={Ionicons} name="search" ml={2} color='neutral.400' size={6} />

export default function Medications() {
    const [isModalOpen, setModalOpenStatus] = useState(false);
    return (
        <>
            <Page spacing={12}>
                <HStack justifyContent='space-between' alignItems='center'>
                    <Heading color="#FCFDFD">
                        Medicações
                    </Heading>
                    <IconButton
                        icon={SettingIcon}
                        onPress={() => setModalOpenStatus(true)}
                    />
                </HStack>
                <Input
                    placeholder="Pesquise suas medicações"
                    leftElement={SearchIcon}
                    variant='brand'
                    placeholderTextColor='neutral.400'
                />
                <Box height='36px' bg='#FCFDFD' />
                <VStack variant='filled' flex={1}>
                    <Box>items</Box>
                </VStack>
            </Page>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpenStatus(false)}
                safeAreaTop={true}
            >
                <SettingsDisplay />
            </Modal>
        </>
    )
}