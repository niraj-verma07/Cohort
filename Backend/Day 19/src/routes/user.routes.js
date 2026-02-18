const express = require("express");
const { followUserController } = require("../controllers/user.controller");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:userid", followUserController);

module.exports = userRouter;
