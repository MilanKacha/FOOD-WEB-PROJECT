const express = require("express");
const router = express.Router();
const restorantController = require("../controller/restorantController");

router
  .route("/")
  .get(restorantController.getAllRestorant)
  .post(restorantController.createRestorant);

router
  .route("/:id")
  .get(restorantController.getOneRestorant)
  .patch(restorantController.updateOneRestorant)
  .delete(restorantController.deleteOneRestorant);

module.exports = router;
