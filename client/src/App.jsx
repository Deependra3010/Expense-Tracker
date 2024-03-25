import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RecordsPage from './pages/RecordsPage';
import { useExpensesContext } from './hooks/useExpensesContext';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Inter';
    }
`;

const App = () => {
    const { dispatch } = useExpensesContext();

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: 'GET_EXPENSES', payload: json });
            }
        };
        fetchRecords();
    }, [dispatch]);

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/records" element={<RecordsPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
