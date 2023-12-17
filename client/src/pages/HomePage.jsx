import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreenRecords from '../components/HomeScreenRecords';
import ExpenseForm from '../components/ExpenseForm';

const Gretting = styled.div`
    color: var(--white);
    background: linear-gradient(139deg, #429690 -4.35%, #2a7c76 100.15%);
    line-height: 1;
    width: 100%;
    padding-top: 140px;
    height: 100vh;
    position: relative;
    h4 {
        margin-top: 0;
    }
`;
const BalanceCard = styled.div`
    border-radius: 20px;
    background: #2f7e79;
    height: 40%;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    span {
        font-size: 16px;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;
const AddExpenseBtn = styled.span`
    background: linear-gradient(139deg, #429690 -4.35%, #2a7c76 100.15%);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: red;
    cursor: pointer;
    font-size: 4em;
    text-align: center;
    &:hover {
        box-shadow: 0px 0px 5px var(--white);
    }
`;
const IncomeExpense = styled.span`
    color: #d0e5e4;
    font: 500 16px Inter;
`;

const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    const addExpenseHandler = () => {
        setShowForm(true);
    };
    const closeExpenseForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <Gretting>
                        <div className="ps-lg-5 ms-lg-4 ps-3">
                            <h4>Good AfterNoon,</h4>
                            <h2>Deependra Solanki</h2>
                        </div>
                        <BalanceCard className="mt-lg-5 mt-3 d-flex flex-column justify-content-between">
                            <div>
                                <span>Total Balance</span>
                                <h2>$1234</h2>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <IncomeExpense>Income</IncomeExpense>
                                    <h3>$1234</h3>
                                </div>
                                <div>
                                    <IncomeExpense>Expense</IncomeExpense>
                                    <h3>$1234</h3>
                                </div>
                            </div>
                        </BalanceCard>
                        <AddExpenseBtn onClick={addExpenseHandler}>+</AddExpenseBtn>
                    </Gretting>
                </div>
                <div className="col-md-6 pt-5">
                    <HomeScreenRecords />
                </div>
            </div>
            {showForm && <ExpenseForm onClose={closeExpenseForm} />}
        </>
    );
};

export default HomePage;
