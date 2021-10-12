const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passwordValidator = require("password-validator");
const expressValidator = require("express-validator");

router.get("/signup", userController.getSignupPage);
router.post(
  "/signup",
  expressValidator.body("email").isEmail(),
  expressValidator.body("password").custom((value) => {
    const Schema = new passwordValidator();
    Schema.is().min(10);
    return Schema.validate(value);
  }),

  userController.signupUser
);

module.exports = router;
