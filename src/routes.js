const express = require("express");
const routes = express.Router();

routes.get("/oi", (req, res) => {
	return res.json({ name: "alan" });
});

// NOT FOUND
routes.use(function (req, res, next) {
	res.status(404);
	return res.json({ error: "Not found" });
});

module.exports = routes;