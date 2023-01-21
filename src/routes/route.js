const express = require("express");
const { calculateInvestment } = require("../controllers/calculateController");
const { userSignup, userSigin, getUserProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/register", userSignup);
router.post("/login", userSigin);
router.post("/getProfile", getUserProfile);
router.post("/calculate", calculateInvestment);

module.exports = router;
  