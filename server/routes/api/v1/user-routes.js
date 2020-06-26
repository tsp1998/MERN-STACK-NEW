const express = require("express");
const router = express.Router();

const userController = require("../../../controllers/user-controller");

router.post("/add", userController.postAddUser);
router.post("/login", userController.getUserByEmailAndPassword);

module.exports = router;
