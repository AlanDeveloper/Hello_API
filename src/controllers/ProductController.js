const ProductModel = require("../models/ProductModel");

class ProductController {
	get = async (req, res, next) => {
		try {
			const products = await ProductModel.find();

			res.status(200);
			return res.json(products);
		} catch (error) {
			console.log("Error detected: " + error);
		}
	}

	post = (req, res, next) => {
		res.status(200);
		return res.json({ name: "juniorrrrr" });
	}
}

module.exports = new ProductController;