import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Record from '../components/Record';

const Records = styled.div`
    padding-top: 50px;
`;

const RecordsPage = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch('/api/expenses');
            const json = await response.json();
            if (response.ok) {
                setRecords(json);
            }
        };
        fetchRecords();
    }, []);
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
