import React from 'react';
import { Box, StatusBar } from "native-base";

interface PageProps {
    children?: React.ReactNode;
}

export function Page({ children }: PageProps) {
    return (
        <>
            <StatusBar backgroundColor='#AC0C29'/>
            <Box flexGrow={1} bg='neutral.100' maxHeight='full'>
                <Box flexGrow={2} bg='brand.800' borderBottomRadius={20} />
                <Box flexGrow={1} bg='neutral.100' />
                <Box
                    position='absolute' top={0} paddingX={4}
                    display='flex' width='full' height='full'
                >
                    {children}
                </Box>
                <Box height='64px' />
            </Box>
        </>
    )
}