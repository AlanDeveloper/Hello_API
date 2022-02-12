const express = require("express");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const routes = express.Router();

routes.use("/product", productRoutes);
routes.use("/category", categoryRoutes);

// NOT FOUND
routes.use(function (req, res, next) {
	res.status(404);
	return res.json({ error: "Not found" });
});

module.exports = routes;