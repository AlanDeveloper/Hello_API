const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel");
const PurchaseModel = require("../models/PurchaseModel");

class PurchaseController {
	get = async (req, res, next) => {
		let id = req.params.id;
		try {
			const purchases = id ? await PurchaseModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await PurchaseModel.find();

			res.status(200);
			return res.json(purchases);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	post = async (req, res, next) => {
		let product = await ProductModel.findById(req.body.fk_product_id);
		if (product.amount >= req.body.amount) {
			product.amount = product.amount - req.body.amount;
		} else {
			const err = new Error("This product doesn't have that much");
			return next(err);
		}
		
		try {
			const purchase = await new PurchaseModel(req.body).save();
			product.save();

			res.status(201);
			return res.json(purchase);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	put = async (req, res, next) => {
		let id = req.params.id;
		try {
			await PurchaseModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, req.body);

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	delete = async (req, res, next) => {
		let id = req.params.id;
		try {
			await PurchaseModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}
}

module.exports = new PurchaseController;