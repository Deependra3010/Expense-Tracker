import React, { useEffect } from 'react';
import styled from 'styled-components';
import Record from '../components/Record';
import { useExpensesContext } from '../hooks/useExpensesContext';

const Records = styled.div`
    padding-top: 50px;
`;

const RecordsPage = () => {
    const { expenses } = useExpensesContext();

    return (
        <>
            <Records className="container">
                {expenses.map((record) => (
                    <Record key={record._id} record={record} />
                ))}
            </Records>
        </>
    );
};

export default RecordsPage;
