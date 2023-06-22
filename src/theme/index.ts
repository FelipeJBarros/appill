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
    fontConfig : {
        Montserrat: {
            100: {
                normal: "Montserrat-Thin",
                italic: "Montserrat-ThinItalic"
            },
            200: {
                normal: "Montserrat-ExtraLight",
                italic: "Montserrat-ExtraLightItalic",
              },
              300: {
                normal: "Montserrat-Light",
                italic: "Montserrat-LightItalic",
              },
              400: {
                normal: "Montserrat-Regular",
                italic: "Montserrat-Italic",
              },
              500: {
                normal: "Montserrat-Medium",
              },
              600: {
                normal: "Montserrat-SemiBold",
                italic: "Montserrat-SemiBoldItalic",
              },
              700: {
                normal: "Montserrat-Bold",
                italic: "Montserrat-BoldItalic",
              },
        }
    },

    fonts: {
        heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
    },
    components: {
        Input: {
            defaultProps: {
                size: 'lg',
                placeholderTextColor: 'neutral.400',
                rounded: 'lg',
                bg: '#FCFDFD',
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