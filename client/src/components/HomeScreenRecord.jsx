import React from 'react';
import styled from 'styled-components';

const RecordCategory = styled.div`
    font-size: 16px;
`;
const RecordAccount = styled.div`
    color: var(--secondaryText);
    font-size: 13px;
`;
const RecordAmount = styled.div`
    color: ${(props) =>
        props.$recordCategory === 'Income' ? 'var(--incomeGreen)' : 'var(--incomeRed)'};
    font-size: 18px;
`;
const RecordTime = styled.div`
    color: var(--secondaryText);
    font-size: 13px;
`;

const HomeScreenRecord = ({ record }) => {
    return (
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
            <div>
                <RecordCategory>{record.category}</RecordCategory>
                <RecordAccount>{record.account.name}</RecordAccount>
                <RecordTime>{record.time}</RecordTime>
            </div>
            <div>
                <RecordAmount $recordCategory={record.category}>
                    {record.category === 'Income' ? '+' : '-'} &#8377; {record.amount}
                </RecordAmount>
            </div>
        </div>
    );
};

export default HomeScreenRecord;
