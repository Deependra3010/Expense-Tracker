const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
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
const Account = mongoose.model('Account', accountSchema);

const expenseSchema = new Schema({
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
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = {
    Account,
    Expense,
};
