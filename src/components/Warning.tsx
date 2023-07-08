import React, { useEffect, useState } from "react";
import { Box, Text, VStack, HStack, Alert, Collapse, IconButton, CloseIcon } from "native-base";

export interface WarningProps {
    isOpen: boolean;
    type: 'error' | 'info' | 'success' | 'warning';
    message: string;
    onClose(): void;
}

export default function WarningBar({ isOpen, type, message, onClose }: WarningProps) {
    return (
        <Collapse isOpen={isOpen}>
            <Alert status={type || 'error'}>
                <VStack space={1} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                        <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text fontSize="md" fontWeight="medium">
                                Ops! Algo deu errado.
                            </Text>
                        </HStack>
                        <IconButton variant="unstyled" _focus={{
                            borderWidth: 0
                        }} icon={<CloseIcon size="3" />} _icon={{
                            color: "coolGray.600"
                        }} onPress={onClose} />
                    </HStack>
                    <Box pl="6">
                        {message}
                    </Box>
                </VStack>
            </Alert>
        </Collapse>
    )
}