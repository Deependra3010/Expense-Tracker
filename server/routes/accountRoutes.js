const express = require('express');
const router = express.Router();
const { getAccounts } = require('../controllers/accountController');

// Get Accounts
router.get('/api/accounts', getAccounts);

module.exports = router;
