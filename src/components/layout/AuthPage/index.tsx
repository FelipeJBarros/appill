import React from 'react'
import { Box, Image } from "native-base";

interface AuthPageProps {
    children?: React.ReactNode
}

export function AuthPage ({ children }: AuthPageProps) {
    const bgImage = require('../../../../assets/imgs/colorfull.png')
    return (
        <Box bg={'brand.800'} maxHeight='full'>
            <Image
                source={bgImage} alt="Imagem de fundo"
                resizeMode="repeat"
            />
            <Box
                position='absolute' top={0} left={0}
                width='full' height='full'
            >
                { children }
            </Box>
        </Box>
    )
}