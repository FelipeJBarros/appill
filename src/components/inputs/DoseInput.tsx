import React from "react";
import { Box, Button, HStack, VStack, Text, Divider, IconButton, Icon, InputGroup, InputRightAddon } from "native-base";
import { Ionicons } from '@expo/vector-icons';

interface ContainerProps {
    children: React.ReactNode
}

interface HeaderProps {
    label: string;
    icon: React.ReactNode;
    onAddPress: () => void
}

export const DoseInput = {
    Container: Container,
    Header: Header,
    Inputs: InputsWrapper,
    RemoveButton,
    AddonInputWrapper
}

function Container({ children }: ContainerProps) {
    return (
        <VStack bg='paper' py={2} px={2} borderRadius={8} space={2}>
            {children}
        </VStack>
    )
}

function Header({ label, icon, onAddPress }: HeaderProps) {
    return (
        <>
            <HStack space={3} ml={-2} alignItems='center'>
                {icon}
                <Text fontSize={'md'} fontWeight='bold' flex={1}>{label}</Text>
                <IconButton
                    p={0}
                    icon={<Icon as={Ionicons} name="add-circle-outline" color='black' size={8} />}
                    onPress={onAddPress}
                />
            </HStack>
            <Divider my={2} />
        </>
    )
}

function InputsWrapper({ children }: ContainerProps) {
    return (
        <HStack space={2}>
            {children}
        </HStack>
    )
}

function RemoveButton({ onPress }: any) {
    return (
        <IconButton
            p={0}
            icon={<Icon as={Ionicons} name="remove-circle-outline" color='brand.500' size={8} />}
            onPress={onPress}
        />
    )
}

function AddonInputWrapper({ children, value }) {

    function translate(valueToTranslate: string) {
        if(valueToTranslate === 'PILL') return 'pílula';
        if(valueToTranslate === 'LIQUID') return 'ml';
    }

    return (
        <InputGroup
            flex={1}
            borderColor='gray.300' borderWidth={1} borderRadius={6}
        >
            {children}
            <InputRightAddon borderWidth={0}>
                <Text fontWeight={800} fontSize={16}>
                    {translate(value)}
                </Text>
            </InputRightAddon>
        </InputGroup>
    )
}