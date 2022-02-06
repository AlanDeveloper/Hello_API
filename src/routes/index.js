const express = require("express");
const productRouter = require("./productRouter");
const routes = express.Router();

routes.use("/product", productRouter);

// NOT FOUND
routes.use(function (req, res, next) {
	res.status(404);
	return res.json({ error: "Not found" });
});

module.exports = routes;