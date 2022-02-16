const express = require("express");
const purchaseRouter = express.Router();
const PurchaseController = require("../controllers/PurchaseController");

purchaseRouter.get("/", PurchaseController.get);
purchaseRouter.get("/:id", PurchaseController.get);
purchaseRouter.post("/", PurchaseController.post);
purchaseRouter.put("/:id", PurchaseController.put);
purchaseRouter.delete("/:id", PurchaseController.delete);

module.exports = purchaseRouter;