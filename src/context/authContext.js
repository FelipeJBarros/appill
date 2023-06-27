import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from "./createContext";
import api from "../api";

const initialState = {}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const handleLogin = (dispatch) => {
    return async (email, password) => {
        try {
            const response = await api.post('/auth/login', {
                email,
                password,
            })

            let token = response.data.token

            await AsyncStorage.setItem(
                '@Auth_token',
                token
            )
 
            api.defaults.headers["Authorization"] = `Bearer ${token}`

            console.log({
                token,
                data: response.data
            })
        } catch (error) {
            console.log(JSON.stringify(error.response.data, null, 2))
        }
    }
}

const handleLogout = (dispatch) => {
    return async () => {
        api.defaults.headers["Authorization"] = undefined
        await AsyncStorage.removeItem('@Auth_token')
    }
}

const handleUserCreation = (dispatch) => {
    return async (name, email, phoneNumber, password) => {
        try {
            const response = await api.post('/auth/register', {
                name,
                email,
                phoneNumber,
                password
            })
            console.log(
                JSON.stringify(
                    response.data,
                    null,
                    2
                )
            )
        } catch (error) {
            console.log(JSON.stringify(error.response.data, null, 2))
        }
    }
}

export const { Context, Provider } = createContext(
    reducer,
    { 
        handleLogin,
        handleUserCreation,
        handleLogout
    },
    initialState
)