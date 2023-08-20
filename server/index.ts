import express from 'express';
const app = express();
import expenseRoutes from './routes/expenseRoutes';
import mongoose from 'mongoose';
require('dotenv').config();

const port = 5000;

app.use('/', expenseRoutes);

// connect to db
mongoose
    // .connect(process.env.MONGO_URI as string)
    .connect('mongodb://127.0.0.1:27017/Expense-Tracker')
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err: Error) => {
        console.log(err);
    });
