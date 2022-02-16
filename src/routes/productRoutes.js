const express = require("express");
const productRouter = express.Router();
const ProductController = require("../controllers/ProductController");

productRouter.get("/", ProductController.get);
productRouter.get("/:id", ProductController.get);
productRouter.post("/", ProductController.post);
productRouter.put("/:id", ProductController.put);
productRouter.delete("/:id", ProductController.delete);

module.exports = productRouter;