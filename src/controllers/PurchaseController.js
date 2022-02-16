const mongoose = require("mongoose");
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
		try {
			const purchase = await new PurchaseModel(req.body).save();

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