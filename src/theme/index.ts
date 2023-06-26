import { extendTheme } from "native-base";

export default extendTheme({
    colors: {
        brand: {
            50: '#FEECEF',
            100: '#FDD8DE',
            200: '#FCC5CE',
            300: '#F98B9D',
            400: '#F7647C',
            500: '#F23D5E',
            600: '#EF1A41',
            700: '#D20F32',
            800: '#AC0C29',
            900: '#72081B',
        },
        neutral: {
            50: '#F5F5F5',
            100: '#E0E0E0',
            200: '#C2C2C2',
            300: '#ADADAD',
            400: '#999999',
            500: '#5C5C5C',
            600: '#474747',
            700: '#1F1F1F',
            800: '#141414',
            900: '#0A0A0A',
        },
        paper: '#FCFDFD'
    },
    components: {
        Input: {
            defaultProps: {
                size: 'lg',
                placeholderTextColor: 'neutral.400',
                rounded: 'lg',
                bg: '#FCFDFD',
                _focus: {
                    bg: '#FCFDFD',
                }
            },
        },
        Button: {
            variants: {
                brand: () => {
                    return {
                        bg: 'brand.800',
                        _pressed: {
                            bg: 'brand.900'
                        },
                        _text: {
                            color: 'paper',
                        }
                    }
                }
            },
        },
        Select: {
            defaultProps: {
                flex: 1,
                textAlign: 'right',
                color: 'neutral.600',
                borderWidth: 0
            },
        },
        VStack: {
            variants: {
                filled: () => ({
                    bg: '#FCFDFD',
                    borderRadius: 10,
                    padding: 2
                })
            },
        },
    }
})