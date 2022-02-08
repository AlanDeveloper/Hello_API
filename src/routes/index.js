const express = require("express");
const productRoutes = require("./productRoutes");
const routes = express.Router();

routes.use("/product", productRoutes);

// NOT FOUND
routes.use(function (req, res, next) {
	res.status(404);
	return res.json({ error: "Not found" });
});

module.exports = routes;