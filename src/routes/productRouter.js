const express = require("express");
const productRouter = express.Router();
const ProductController = require('../controllers/ProductController');

productRouter.get("/", ProductController.get);
productRouter.get("/:id", ProductController.get);
productRouter.post("/", ProductController.post);
productRouter.put("/:id", ProductController.get);
productRouter.delete("/:id", ProductController.get);

module.exports = productRouter;