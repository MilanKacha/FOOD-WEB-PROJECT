const express = require("express");
const router = express.Router();

const cartController = require("../controller/cardController");
const authController = require("../controller/authController");

router
  .route("/")
  // .post(cartController.addToCart)
  // .get(cartController.fetchCartByUser);
  .post(authController.protect, cartController.addToCart)
  .get(authController.protect, cartController.fetchCartByUser)
  .delete(authController.protect, cartController.deleteCartByUser);

router
  .route("/:id")
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);
// .patch(authController.protect, cartController.updateCart)
// .delete(authController.protect, cartController.deleteCart);

module.exports = router;
