import AsyncStorage from '@react-native-async-storage/async-storage';
import createContext from "./createContext";
import api from "../api";

const initialState = {
    medications: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_medications':
            return { ...state, medications: action.payload }
        default:
            return state;
    }
}

const getMedications = (dispatch) => {
    return async () => {
        console.log(api.defaults.headers['Authorization'])
        try {
            const response = await api.get('/medication')
            dispatch({ type: 'update_medications', payload: response.data })
        } catch (error) {
            // const id = await AsyncStorage.getItem('@Auth_token')
            // console.log({token: id, auth: api.defaults.headers["Authorization"]})
            console.log('Erro no getmedication')
            console.log(JSON.stringify(error.response, null, 2))
        }
    }
}

export const { Context, Provider } = createContext(
    reducer,
    {
        getMedications
    },
    initialState
)