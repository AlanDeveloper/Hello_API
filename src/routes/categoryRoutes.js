const express = require("express");
const categoryRouter = express.Router();
const CategoryController = require('../controllers/CategoryController');

categoryRouter.get("/", CategoryController.get);
categoryRouter.get("/:id", CategoryController.get);
categoryRouter.post("/", CategoryController.post);
categoryRouter.put("/:id", CategoryController.get);
categoryRouter.delete("/:id", CategoryController.get);

module.exports = categoryRouter;