const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { customerById } = require("../controllers/customer");
const { generateToken, processPayment } = require("../controllers/braintree");

router.get("/braintree/getToken/:customerId", requireSignin, isAuth, generateToken);

router.post("/braintree/payment/:customerId", requireSignin, isAuth, processPayment);

router.param("customerId", customerById);

module.exports = router;
