const mongoose = require("mongoose");
const CategoryModel = require("../models/CategoryModel");

class CategoryController {
	get = async (req, res, next) => {
		let id = req.params.id ? JSON.parse(req.params.id) : undefined;
		try {
			const categories = id ? await CategoryModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await CategoryModel.find();

			res.status(200);
			return res.json(categories);
		} catch (error) {
			console.log("Error detected: " + error);
		}
	}

	post = (req, res, next) => {
		res.status(200);
		return res.json({ name: "juniorrrrr" });
	}
}

module.exports = new CategoryController;