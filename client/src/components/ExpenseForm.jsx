import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaCirclePlus, FaXmark } from 'react-icons/fa6';
import {
    categories,
    emptyExpenseData,
    getDate,
    getTime,
    paymentStatus,
    paymentType,
    timeToTimeString,
} from '../utils/utils';

const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(66, 150, 140, 0.8);
`;
const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 22px 35px 0px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 20px;
    .bigText {
        text-align: center;
        font-size: 30px;
        color: var(--secondaryText);
    }
    #amount {
        color: var(--secondaryText);
        outline: none;
        border: none;
        font-size: 30px;
        max-width: 30%;
        text-align: center;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            appearance: none;
        }
    }
    label {
        color: var(--secondaryText);
        font-size: 14px;
    }
    input[type='text'],
    input[type='date'],
    input[type='time'],
    select {
        border-radius: 8px;
        border: 1px solid #ddd;
        outline: none;
        padding: 2px 5px;
        color: var(--secondaryText);
        width: 100%;
        &:focus {
            border: 1.4px solid var(--lightGreenText);
            color: var(--lightGreenText);
        }
    }
    .submitBtn {
        border-radius: 10px;
        background-color: var(--iconGreen);
        color: #fff;
        border: none;
        padding: 2px 10px;
    }
    .cancelBtn {
        border-radius: 10px;
        border: 1px solid var(--iconGreen);
        background-color: #fff;
        color: var(--lightGreenText);
        padding: 2px 10px;
    }
    .attachment {
        border-radius: 8px;
        padding: 10px 30px;
        border: 2px dashed #ddd;
        cursor: pointer;
    }
    input[type='file'] {
        display: none;
    }
`;
const StyledXmark = styled(FaXmark)`
    float: right;
    cursor: pointer;
`;

const ExpenseForm = (props) => {
    const [accounts, setAccounts] = useState([]);
    const amountInput = useRef(null);
    useEffect(() => {
        amountInput.current.focus();
        const fetchAccounts = async () => {
            const response = await fetch('/api/accounts');
            const json = await response.json();
            if (response.ok) {
                setAccounts(json);
            }
        };
        fetchAccounts();
        if (props.recordId) {
            const fetchRecord = async () => {
                const response = await fetch(`api/expenses/${props.recordId}`);
                const json = await response.json();
                if (response.ok) {
                    json.date = json.date.substr(0, 10);
                    json.time = json.time.substr(0, 5);
                    setFormData(json);
                }
            };
            fetchRecord();
        }
    }, []);
    const [formData, setFormData] = useState({
        account: '',
        amount: '',
        category: categories[0],
        description: '',
        date: getDate(),
        time: getTime(),
        paymentType: paymentType[0],
        status: paymentStatus[0],
        invoice: '',
    });
    const handleFormInput = (ev) => {
        const { name, value } = ev.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const expense = { ...formData };
        expense.time = timeToTimeString(expense.time);
        const response = await fetch('/api/expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            setFormData(emptyExpenseData);
            props.onClose();
        } else {
            console.log('error submiting the expense');
        }
    };
    const handleUpdate = async (ev) => {
        ev.preventDefault();
        const response = await fetch(`api/expenses/${props.recordId}`, {
            method: 'PATCH',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            setFormData(emptyExpenseData);
            props.onClose();
        } else {
            console.log('error updating the expense');
        }
    };
    return (
        <>
            <ModalWrapper>
                <ModalContainer>
                    <StyledXmark onClick={props.onClose} />
                    <form method="post">
                        <div className="d-flex justify-content-center align-items-center">
                            <span className="bigText">+</span>{' '}
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                id="amount"
                                placeholder="0"
                                onChange={handleFormInput}
                                ref={amountInput}
                                required
                            />{' '}
                            <span className="bigText">INR</span>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pe-md-2">
                                <label htmlFor="account" className="mt-2">
                                    Account
                                </label>
                                <select
                                    id="account"
                                    name="account"
                                    value={formData.account}
                                    onChange={handleFormInput}
                                    required
                                >
                                    {[...accounts].map((account) => (
                                        <option key={account._id} value={account._id}>
                                            {account.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="category" className="mt-2">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleFormInput}
                                    required
                                >
                                    {categories.map((category, idx) => (
                                        <option key={idx} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="description" className="mt-2">
                                    Description
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormInput}
                                />
                            </div>
                            <div className="col-md-6  pe-md-2">
                                <label htmlFor="date" className="mt-2">
                                    Date
                                </label>
                                <br />
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleFormInput}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="time" className="mt-2">
                                    Time
                                </label>
                                <br />
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleFormInput}
                                />
                            </div>
                            <div className="col-md-6 pe-md-2">
                                <label htmlFor="paymentType" className="mt-2">
                                    PaymentType
                                </label>
                                <select
                                    id="paymentType"
                                    name="paymentType"
                                    onChange={handleFormInput}
                                    value={formData.paymentType}
                                >
                                    {paymentType.map((type, idx) => (
                                        <option key={idx} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="paymentStatus" className="mt-2">
                                    Status
                                </label>
                                <select
                                    id="paymentStatus"
                                    name="status"
                                    onChange={handleFormInput}
                                    value={formData.value}
                                >
                                    {paymentStatus.map((status, idx) => (
                                        <option key={idx} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-12 pe-me-2 mt-2">
                                <label
                                    htmlFor="attachment"
                                    className="attachment mt-2 w-50 mx-auto d-flex justify-content-center align-items-center"
                                >
                                    <FaCirclePlus className="me-2" /> Add Invoice
                                </label>
                                <input
                                    type="file"
                                    name="invoice"
                                    id="attachment"
                                    onChange={handleFormInput}
                                    value={formData.invoice}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            {props.formType === 'Update' ? (
                                <button
                                    type="submit"
                                    className="submitBtn me-3"
                                    onClick={handleUpdate}
                                >
                                    Update
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="submitBtn me-3"
                                    onClick={handleSubmit}
                                >
                                    Confirm
                                </button>
                            )}
                            <button className="cancelBtn" onClick={props.onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </ModalContainer>
            </ModalWrapper>
        </>
    );
};

export default ExpenseForm;
