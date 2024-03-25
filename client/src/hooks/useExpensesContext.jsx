import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpenseContext';

export const useExpensesContext = () => {
    const context = useContext(ExpensesContext);

    if (!context) {
        throw Error('useExpensesContext must be used inside an ExpensesContextProvider');
    }

    return context;
};
