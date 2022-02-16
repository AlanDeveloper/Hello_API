const express = require("express");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const purchaseRoutes = require("./purchaseRoutes");
const routes = express.Router();

routes.use("/product", productRoutes);
routes.use("/category", categoryRoutes);
routes.use("/user", userRoutes);
routes.use("/purchase", purchaseRoutes);

// NOT FOUND
routes.use(function (req, res, next) {
	res.status(404);
	return res.json({ error: { message: "The webpage you're trying to reach can't be found." }});
});

module.exports = routes;