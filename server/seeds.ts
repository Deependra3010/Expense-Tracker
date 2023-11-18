import mongoose from 'mongoose';
import { Expense, Account } from './models/Expense';

const seedDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Expense-Tracker');
        console.log('Connected to Mongo');
        const accountsData = [
            {
                name: 'Account1',
                balance: 1000,
            },
            {
                name: 'Account2',
                balance: 2000,
            },
        ];
        const accounts = await Account.insertMany(accountsData);

        const expenseData = [
            {
                account: accounts[0]._id,
                amount: 100,
                category: 'Income',
                date: new Date(),
                description: 'first Description',
                time: new Date().toLocaleTimeString(),
                paymentType: 'Cash',
                status: 'Cleared',
            },
            {
                account: accounts[0]._id,
                amount: 10,
                category: 'Shopping',
                date: new Date(),
                description: 'first Description',
                time: new Date().toLocaleTimeString(),
                paymentType: 'Cash',
                status: 'Cleared',
            },
            {
                account: accounts[1]._id,
                amount: 10,
                category: 'Shopping',
                date: new Date(),
                description: 'first Description',
                time: new Date().toLocaleTimeString(),
                paymentType: 'Cash',
                status: 'Cleared',
            },
            {
                account: accounts[1]._id,
                amount: 10,
                category: 'Shopping',
                date: new Date(),
                description: 'first Description',
                time: new Date().toLocaleTimeString(),
                paymentType: 'Cash',
                status: 'Cleared',
            },
            {
                account: accounts[0]._id,
                amount: 10,
                category: 'Shopping',
                date: new Date(),
                description: 'first Description',
                time: new Date().toLocaleTimeString(),
                paymentType: 'Cash',
                status: 'Cleared',
            },
        ];

        await Expense.insertMany(expenseData);
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
};

seedDatabase();
