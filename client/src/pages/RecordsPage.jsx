import React, { useEffect } from 'react';
import styled from 'styled-components';
import Record from '../components/Record';
import { useExpensesContext } from '../hooks/useExpensesContext';

const Records = styled.div`
    padding-top: 50px;
`;

const RecordsPage = () => {
    const { records, dispatch } = useExpensesContext();
    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();
            if (response.ok) {
                debugger;
                dispatch({ type: 'GET_EXPENSES', payload: json });
            }
        };
        fetchRecords();
    }, []);
    debugger;
    return (
        <>
            <Records className="container">
                {records.map((record) => (
                    <Record key={record._id} record={record} />
                ))}
            </Records>
        </>
    );
};

export default RecordsPage;
