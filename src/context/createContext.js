import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialValues) => {
    const Context = createContext();

    const Provider = ({ children }) => {
        const [ state, dispatch ] = useReducer(
            reducer,
            initialValues
        )

        const customFunctions = {};

        Object.keys(actions).forEach(
            (key) => (customFunctions[key] = actions[key](dispatch))
        )

        return (
            <Context.Provider
                value={{ state, ...customFunctions}}
            >
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}