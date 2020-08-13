const express = require("express");
const User = require("../models/User");

const authRouter = express.Router();
const {
  loginAuthentication,
  register,
  requireAuth,
  changePassword,
} = require("../controllers/authController");

authRouter.post("/login", loginAuthentication);
authRouter.post("/register", register);

authRouter.put("/password", requireAuth, changePassword);

module.exports = authRouter;
