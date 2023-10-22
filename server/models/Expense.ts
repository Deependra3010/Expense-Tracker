import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;

export interface IExpense extends Document {
    title: string;
    amount: number;
    category:
        | 'Food & Drinks'
        | 'Shopping'
        | 'Housing'
        | 'Transportation'
        | 'Vehicle'
        | 'Life & Entertainment'
        | 'Communication & PC'
        | 'Financial Expense'
        | 'Investments'
        | 'Income'
        | 'Others';
    date: Date;
    description: string;
    time: string;
    paymentType: 'Cash' | 'Debit Card' | 'Credit Card' | 'UPI';
    status: 'Cleared' | 'Uncleared';
    image: string;
}

const expenseSchema = new Schema<IExpense>({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: [
            'Food & Drinks',
            'Shopping',
            'Housing',
            'Transportation',
            'Vehicle',
            'Life & Entertainment',
            'Communication & PC',
            'Financial Expense',
            'Investments',
            'Income',
            'Others',
        ],
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    description: {
        type: String,
    },
    time: {
        type: String,
    },
    paymentType: {
        type: String,
        enum: ['Cash', 'Debit Card', 'Credit Card', 'UPI'],
    },
    status: {
        type: String,
        enum: ['Cleared', 'Uncleared'],
        default: 'Cleared',
    },
    image: {
        type: String,
    },
});

const Expense = mongoose.model<IExpense>('Expense', expenseSchema);

export default Expense;
