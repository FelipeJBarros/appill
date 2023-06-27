import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from "./createContext";
import api from "../api";

const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_user':
            return {...state, user: action.payload}
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
            
            dispatch({ type: 'add_user', payload: response.data.user})
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
            await api.post('/auth/register', {
                name,
                email,
                phoneNumber,
                password
            })
        } catch (error) {
            console.log(JSON.stringify(error.response.data, null, 2))
        }
    }
}

const setUser = (dispatch) => {
    return (user) => {
        dispatch({type: 'add_user', payload: user});
    }
}

export const { Context, Provider } = createContext(
    reducer,
    { 
        handleLogin,
        handleUserCreation,
        handleLogout,
        setUser
    },
    initialState
)