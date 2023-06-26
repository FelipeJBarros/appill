import createContext from "./createContext";

const initialState = {}

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const hello = (dispatch) => {
    return (args) => {
        console.log('Hello')
    }
}

export const { Context, Provider } = createContext(
    reducer,
    { hello },
    initialState
)