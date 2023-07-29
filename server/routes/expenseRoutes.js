const express = require('express');
const router = express.Router();
const {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
} = require('../controllers/expenseController');

// Get expenses
router.get('/api/expenses', getExpenses);

// Get single expense
router.get('/api/expenses/:id', getExpense);

// Add expense
router.post('/api/expenses', createExpense);

// Update expense
router.patch('/api/expenses/:id', updateExpense);

// Delete expense
router.delete('/api/expenses/:id', deleteExpense);

module.exports = router;
