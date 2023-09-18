import express from 'express';
const router = express.Router();
import {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense,
} from '../controllers/expenseController';

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

export default router;
