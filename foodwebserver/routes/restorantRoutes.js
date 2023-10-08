const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const restorantController = require("../controller/restorantController");

router
  .route("/")
  .get(restorantController.getAllRestorant)
  .post(async (req, res) => {
    console.log(req.files); // Log the entire files object
    try {
      // Call your controller function here
      await restorantController.createRestorant(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

router
  .route("/:id")
  .get(restorantController.getOneRestorant)
  .patch(restorantController.updateOneRestorant)
  .delete(restorantController.deleteOneRestorant);
router
  .route("/:restaurantId/products")
  .get(restorantController.getProductByRestorantId);

module.exports = router;
