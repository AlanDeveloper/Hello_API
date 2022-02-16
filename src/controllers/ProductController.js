const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel");

class ProductController {
	get = async (req, res, next) => {
		let id = req.params.id;
		try {
			const products = id ? await ProductModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await ProductModel.find();

			res.status(200);
			return res.json(products);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	post = async (req, res, next) => {
		try {
			const product = await new ProductModel(req.body).save();

			res.status(201);
			return res.json(product);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	put = async (req, res, next) => {
		let id = req.params.id;
		try {
			await ProductModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, req.body);

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}
	
	delete = async (req, res, next) => {
		let id = req.params.id;
		try {
			await ProductModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}
}

module.exports = new ProductController;