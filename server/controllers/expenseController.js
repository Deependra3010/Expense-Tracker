const Expense = require('../models/Expense');
const mongoose = require('mongoose');

// Get expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({});
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong while fetching expenses' });
    }
};

// Get single expense
const getExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Expense' });
    }
    try {
        const expense = await Expense.findById(id);
        if (expense) {
            res.status(200).json(expense);
        } else {
            res.status(400).json({ error: `Expense with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: `Something went wrong while fetching ${id} expense` });
    }
};

// Create an expense
const createExpense = async (req, res) => {
    const expense = req.body;

    try {
        const createdExpense = await Expense.create(expense);
        res.status(201).json(createdExpense);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong whild create expense' });
    }
};

// Update an expense
const updateExpense = async (req, res) => {
    const { id } = req.params;
    const updated = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Expense' });
    }
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, updated, {
            new: true,
        });
        if (updatedExpense) {
            res.status(200).json(updatedExpense);
        } else {
            res.status(400).json({ error: `Expense with ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ error: `Error while updating expense ${id}` });
    }
};

// Delete an expense
const deleteExpense = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Expense' });
    }
    try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'No such expense' });
        }
        res.status(200).json(deletedExpense);
    } catch (error) {
        res.status(500).json({ error: `Something went wrong while deleting Expense ${id}` });
    }
};

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
};
