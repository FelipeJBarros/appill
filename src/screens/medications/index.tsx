import React from "react";
import { Page } from "../../components/layout";
import { Box, Heading, HStack, IconButton, Icon } from "native-base";
import { AntDesign } from '@expo/vector-icons';

const SettingIcon = <Icon as={AntDesign} name='setting' color="#FCFDFD" size={6} />

export default function Medications() {

    return (
        <Page spacing={12}>
            <HStack justifyContent='space-between' alignItems='center'>
                <Heading color="#FCFDFD">
                    Medicações
                </Heading>
                <IconButton
                    icon={SettingIcon}
                    onPress={() => alert('oi')}
                />
            </HStack>
            <Box bg='#F2F2F2' height='36px' />
            <Box bg='#F2F2F2' height='36px' />
            <Box bg='#F2F2F2' flex={1} overflow='hidden'>
                <Box bg='brand.900' height='450px' />
            </Box>
        </Page>
    )
}