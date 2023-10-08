const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const authController = require("../controller/authController");

router
  .route("/")
  .post(orderController.creteOrder)
  .get(authController.protect, orderController.fetchOrderByUser);

router
  .route("/:id")
  .delete(orderController.deleteOrder)
  .patch(orderController.updateOrder);

module.exports = router;
