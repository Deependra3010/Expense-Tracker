import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpensesContextProvider } from './context/ExpenseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ExpensesContextProvider>
            <App />
        </ExpensesContextProvider>
    </React.StrictMode>,
);
