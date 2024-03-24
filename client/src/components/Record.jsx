import React from 'react';
import styled from 'styled-components';
import { FaEllipsisVertical } from 'react-icons/fa6';

const RecordContainer = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px 30px;
    background-color: #e5e5e5;
    cursor: pointer;
`;
const RecordAmount = styled.div`
    color: ${(props) =>
        props.$recordCategory === 'Income' ? 'var(--incomeGreen)' : 'var(--incomeRed)'};
`;

const Record = ({ record }) => {
    return (
        <>
            <RecordContainer className="row" id={record._id}>
                <div className="col-3">{record.category}</div>
                <div className="col-3">{record.account.name}</div>
                <div className="col-3">{record.description}</div>
                <RecordAmount className="col-2" $recordCategory={record.category}>
                    {record.category === 'Income' ? '+' : '-'} &#8377; {record.amount}
                </RecordAmount>
                <FaEllipsisVertical className="col-1" />
            </RecordContainer>
        </>
    );
};

export default Record;
