import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa6';
import ExpenseForm from './ExpenseForm';
import { useExpensesContext } from '../hooks/useExpensesContext';

const RecordContainer = styled.div`
    background-color: #e5e5e5;
    cursor: pointer;
`;
const RecordAmount = styled.div`
    color: ${(props) =>
        props.$recordCategory === 'Income' ? 'var(--incomeGreen)' : 'var(--incomeRed)'};
`;

const Record = ({ record }) => {
    const { dispatch } = useExpensesContext();
    const [showForm, setShowForm] = useState(false);
    const toggleExpenseForm = () => {
        setShowForm(!showForm);
    };
    const handleDelete = async (ev) => {
        ev.stopPropagation();
        const response = await fetch(`api/expenses/${record._id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_EXPENSE', payload: json });
        } else {
            console.log('error deleting expense');
        }
    }
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
                <FaTrash className="col-1" onClick={handleDelete}/>
            </RecordContainer>
            {showForm && (
                <ExpenseForm onClose={toggleExpenseForm} formType="Update" recordId={record._id} />
            )}
        </>
    );
};

export default Record;
