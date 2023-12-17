const express = require('express');
const app = express();
const expenseRoutes = require('./routes/expenseRoutes');
const accountRoutes = require('./routes/accountRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 5000;

app.use(express.json());
app.use('/', expenseRoutes);
app.use('/', accountRoutes);

// connect to db
mongoose
    // .connect(process.env.MONGO_URI)
    .connect('mongodb://127.0.0.1:27017/Expense-Tracker')
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
