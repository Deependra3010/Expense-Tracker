import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Record from './Record';

const RecordsHeading = styled.span`
    color: #222;
    font-size: 18px;
`;
const LightText = styled(Link)`
    color: #666;
    font-size: 14px;
`;

const HomeScreenRecords = () => {
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
            <div className="d-flex justify-content-between mt-md-4 px-3 mb-3">
                <RecordsHeading>Transaction History</RecordsHeading>
                <LightText to="/records">See all</LightText>
            </div>
            {records
                .slice(-7)
                .reverse()
                .map((record) => (
                    <Record key={record._id} record={record} />
                ))}
        </>
    );
};

export default HomeScreenRecords;
