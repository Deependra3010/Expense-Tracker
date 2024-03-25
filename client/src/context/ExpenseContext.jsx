import React, { createContext, useReducer } from 'react';

export const ExpensesContext = createContext();

export const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_EXPENSES':
            return {
                expenses: action.payload,
            };
        case 'ADD_EXPENSE':
            return {
                expenses: [...state.expenses, action.payload],
            };
        case 'UPDATE_EXPENSE':
            const updatedExpense = state.expenses.map((expense) =>
                expense._id === action.payload._id ? action.payload : expense,
            );
            return {
                expenses: updatedExpense,
            };
        default:
            return state;
    }
};

export const ExpensesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expensesReducer, {
        expenses: [],
    });

    return (
        <ExpensesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExpensesContext.Provider>
    );
};
