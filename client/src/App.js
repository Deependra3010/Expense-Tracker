import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Inter';
    }
`;
const App = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
