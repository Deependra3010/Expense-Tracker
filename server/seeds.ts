import mongoose from 'mongoose';
import Expense, { IExpense } from './models/Expense';

mongoose
    .connect('mongodb://127.0.0.1:27017/Expense-Tracker')
    .then(() => {
        console.log('Connected to Mongo');
    })
    .catch((err) => console.error(err));

const expenseData: IExpense[] = [
    {
        title: 'title1',
        amount: 10,
        category: 'Shopping',
        date: new Date(),
        description: 'first Description',
        time: new Date().toLocaleTimeString(),
        paymentType: 'Cash',
        status: 'Cleared',
        image: 'tafdafdfdf',
    } as IExpense,
    {
        title: 'title2',
        amount: 10,
        category: 'Shopping',
        date: new Date(),
        description: 'first Description',
        time: new Date().toLocaleTimeString(),
        paymentType: 'Cash',
        status: 'Cleared',
        image: 'tafdafdfdf',
    } as IExpense,
    {
        title: 'title3',
        amount: 10,
        category: 'Shopping',
        date: new Date(),
        description: 'first Description',
        time: new Date().toLocaleTimeString(),
        paymentType: 'Cash',
        status: 'Cleared',
        image: 'tafdafdfdf',
    } as IExpense,
    {
        title: 'title4',
        amount: 10,
        category: 'Shopping',
        date: new Date(),
        description: 'first Description',
        time: new Date().toLocaleTimeString(),
        paymentType: 'Cash',
        status: 'Cleared',
        image: 'tafdafdfdf',
    } as IExpense,
    {
        title: 'title5',
        amount: 10,
        category: 'Shopping',
        date: new Date(),
        description: 'first Description',
        time: new Date().toLocaleTimeString(),
        paymentType: 'Cash',
        status: 'Cleared',
        image: 'tafdafdfdf',
    } as IExpense,
];

Expense.insertMany(expenseData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
