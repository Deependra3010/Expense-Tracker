const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Expense Tracker's Home Page`);
});

module.exports = router;
