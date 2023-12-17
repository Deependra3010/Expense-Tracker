const { Account } = require('../models/Expense');

// Get Accounts
const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({});
        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong while fetching accounts' });
    }
};

module.exports = {
    getAccounts,
};
