import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Inter';
    }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
