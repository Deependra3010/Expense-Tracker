import React, { createContext, useReducer } from 'react';

export const ExpensesContext = createContext();

export const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_EXPENSES':
            debugger;
            return {
                expenses: action.payload,
            };
        case 'ADD_EXPENSE':
            return {
                expenses: [action.payload, ...state.expenses],
            };
        default:
            return state;
    }
};

export const ExpensesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expensesReducer, {
        expenses: [],
    });
    debugger;

    return (
        <ExpensesContext.Provider value={{ ...state, dispatch }}>{children}</ExpensesContext.Provider>
    );
};
