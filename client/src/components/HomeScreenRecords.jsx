import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeScreenRecord from './HomeScreenRecord';
import { useExpensesContext } from '../hooks/useExpensesContext';

const RecordsHeading = styled.span`
    color: #222;
    font-size: 18px;
`;
const LightText = styled(Link)`
    color: var(--secondaryText);
    font-size: 14px;
`;

const HomeScreenRecords = () => {
    const { expenses } = useExpensesContext();

    return (
        <>
            <div className="d-flex justify-content-between mt-md-4 px-3 mb-3">
                <RecordsHeading>Transaction History</RecordsHeading>
                <LightText to="/records">See all</LightText>
            </div>
            {expenses
                .slice(-7)
                .reverse()
                .map((record) => (
                    <HomeScreenRecord key={record._id} record={record} />
                ))}
        </>
    );
};

export default HomeScreenRecords;
