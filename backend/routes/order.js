const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { customerById, addOrderToUserHistory } = require("../controllers/customer");
const {
    create,
    listOrders,
    getStatusValues,
    orderById,
    updateOrderStatus
} = require("../controllers/order");

const { decreaseQuantity } = require("../controllers/vehicle");

router.post(
    "/order/create/:customerId",
    requireSignin,
    isAuth,
    addOrderToUserHistory,
    decreaseQuantity,
    create
);

router.get("/order/list/:customerId", requireSignin, isAuth, isAdmin, listOrders);

router.get(
    "/order/status-values/:customerId",
    requireSignin,
    isAuth,
    isAdmin,
    getStatusValues
);
router.put(
    "/order/:orderId/status/:customerId",
    requireSignin,
    isAuth,
    isAdmin,
    updateOrderStatus
);

router.param('customerId',customerById)
router.param("orderId", orderById);

module.exports = router;
