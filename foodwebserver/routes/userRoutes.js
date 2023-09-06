const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const userController = require("../controller/userController");

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.logIn);
router.route("/logout").get(authController.logout);

router.route("/me").get(userController.getme, userController.getOneUser);

router.route("/:id").get(userController.getOneUser);
module.exports = router;
