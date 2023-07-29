const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
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

module.exports = {
    expenseSchema,
};
