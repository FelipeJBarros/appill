import React from 'react';
import { Box } from "native-base";
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

interface PageProps {
    children?: React.ReactNode,
    spacing?: number,
    showPattern?: boolean
}

export function Page({ children, spacing = 0, showPattern = true }: PageProps) {
    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                {showPattern &&
                    <Box flexGrow={2} bg='brand.800' borderBottomRadius={20} />
                }
                <Box flexGrow={1} bg='neutral.100' />
                <Box
                    position='absolute' top={0} paddingX={4} paddingY={2}
                    display='flex' width='full' height='full'
                    maxHeight='full'
                    style={{ gap: spacing }}
                >
                    {children}
                </Box>
                <Box height='64px' />
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    }
})