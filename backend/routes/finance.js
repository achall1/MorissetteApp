const express = require('express');
const router = express.Router();

const { create, financeById, read, update, remove, list } = require('../controllers/finance');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { customerById } = require('../controllers/customer');

// user can see their finance application status
router.get('/finance/:financeId', read);

//user submits a financing application using their id
router.post('/finance/create/:customerId', requireSignin, isAuth, create);

//only admin update the status of the financial application
router.put('/finance/:financeId/:customerId', requireSignin, isAuth, isAdmin, update);
// neead to test
//only admin can delete the status of the financial application
router.delete('/finance/:financeId/:customerId', requireSignin, isAuth, isAdmin, remove);

// list all the finance application at admins dashborde
//router.get('/finance', list);

router.param('financeId', financeById);
router.param('customerId', customerById);

module.exports = router;
