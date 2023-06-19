import React from 'react';
import { Box } from "native-base";

interface PageProps {
    children?: React.ReactNode,
    spacing?: number
}

export function Page({ children, spacing = 0 }: PageProps) {
    return (
        <>
            <Box flexGrow={1} bg='neutral.100' maxHeight='full'>
                <Box flexGrow={2} bg='brand.800' borderBottomRadius={20} />
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
            </Box>
        </>
    )
}