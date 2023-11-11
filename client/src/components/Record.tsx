import React from 'react';
import styled from 'styled-components';
import { IExpense } from '@server/models/Expense';

interface recordProps {
    record: IExpense;
}

const RecordCategory = styled.div`
    font-size: 16px;
`;
const RecordTitle = styled.div`
    color: #666;
    font-size: 13px;
`;
const RecordAmount = styled.div<{ $recordCategory?: String }>`
    color: ${(props) => (props.$recordCategory === 'Income' ? '#25a969' : '#F95B51')};
    font-size: 18px;
`;
const RecordTime = styled.div`
    color: #666;
    font-size: 13px;
`;

const Record: React.FC<recordProps> = ({ record }) => {
    return (
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
            <div>
                <RecordCategory>{record.category}</RecordCategory>
                <RecordTitle>{record.title}</RecordTitle>
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

export default Record;
