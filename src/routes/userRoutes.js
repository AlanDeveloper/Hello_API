const express = require("express");
const userRouter = express.Router();
const UserController = require('../controllers/UserController');

userRouter.get("/", UserController.get);
userRouter.get("/:id", UserController.get);
userRouter.post("/", UserController.post);
userRouter.put("/:id", UserController.put);
userRouter.delete("/:id", UserController.delete);

module.exports = userRouter;