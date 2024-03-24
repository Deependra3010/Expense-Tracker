import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEllipsisVertical } from 'react-icons/fa6';
import ExpenseForm from './ExpenseForm';

const RecordContainer = styled.div`
    background-color: #e5e5e5;
    cursor: pointer;
`;
const RecordAmount = styled.div`
    color: ${(props) =>
        props.$recordCategory === 'Income' ? 'var(--incomeGreen)' : 'var(--incomeRed)'};
`;

const Record = ({ record }) => {
    const [showForm, setShowForm] = useState(false);
    const toggleExpenseForm = () => {
        setShowForm(!showForm);
    };
    return (
        <>
            <RecordContainer
                className="row mt-2 rounded px-4 d-flex align-items-center py-1"
                id={record._id}
                onClick={toggleExpenseForm}
            >
                <div className="col-3">{record.category}</div>
                <div className="col-3">{record.account.name}</div>
                <div className="col-3">{record.description}</div>
                <RecordAmount className="col-2" $recordCategory={record.category}>
                    {record.category === 'Income' ? '+' : '-'} &#8377; {record.amount}
                </RecordAmount>
                <FaEllipsisVertical className="col-1" />
            </RecordContainer>
            {showForm && (
                <ExpenseForm onClose={toggleExpenseForm} formType="Update" recordId={record._id} />
            )}
        </>
    );
};

export default Record;
