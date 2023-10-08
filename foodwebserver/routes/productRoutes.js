const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.route("/product/all").get(productController.getAllProduct);
router.route("/product").post(productController.createProduct);

router
  .route("/product/:id")
  .get(productController.getOneProduct)
  .patch(productController.updateOneProduct)
  .delete(productController.deleteOneProduct);

module.exports = router;
