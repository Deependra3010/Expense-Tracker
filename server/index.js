const express = require('express');
const app = express();
const expenseRoutes = require('./routes/expenseRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 5000;

app.use('/', expenseRoutes);

// connect to db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
