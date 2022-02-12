const mongoose = require("mongoose");
const CategoryModel = require("../models/CategoryModel");

class CategoryController {
	get = async (req, res, next) => {
		let id = req.params.id;
		try {
			const categories = id ? await CategoryModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await CategoryModel.find();

			res.status(200);
			return res.json(categories);
		} catch (error) {
			console.log("Error detected: " + error);
		}
	}

	post = async (req, res, next) => {
		try {
			const category = await new CategoryModel({
				name: req.body.name
			}).save();
			
			res.status(201);
			return res.json(category);
		} catch (error) {
			console.log("Error detected: " + error);
		}
	}
}

module.exports = new CategoryController;