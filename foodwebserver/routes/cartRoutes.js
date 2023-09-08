const express = require("express");
const router = express.Router();

const cartController = require("../controller/cardController");
const authController = require("../controller/authController");

router
  .route("/")
  .post(authController.protect, cartController.addToCart)
  .get(authController.protect, cartController.fetchCartByUser);

router
  .route("/:id")
  .patch(authController.protect, cartController.updateCart)
  .delete(authController.protect, cartController.deleteCart);

module.exports = router;
