import mongoose, { Schema, Types } from 'mongoose';

export interface IAccount {
    _id: string;
    name: string;
    balance: number;
}
export interface IExpense {
    _id: string;
    account: IAccount | Types.ObjectId;
    amount: number;
    category?:
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
    description?: string;
    time?: string;
    paymentType?: 'Cash' | 'Debit Card' | 'Credit Card' | 'UPI';
    status?: 'Cleared' | 'Uncleared';
    image?: string;
}

export const accountSchema = new Schema<IAccount>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
});

export const Account = mongoose.model<IAccount>('Account', accountSchema);

const expenseSchema = new Schema<IExpense>({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
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

export const Expense = mongoose.model<IExpense>('Expense', expenseSchema);
