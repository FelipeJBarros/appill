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
            console.log(response.data)
        } catch(error) {
            console.log(JSON.stringify(error.response.data, null, 2))
        }
    }
}

export const { Context, Provider } = createContext(
    reducer,
    { handleLogin },
    initialState
)