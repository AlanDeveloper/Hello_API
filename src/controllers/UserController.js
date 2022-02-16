const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

class UserController {
	get = async (req, res, next) => {
		let id = req.params.id;
		try {
			const users = id ? await UserModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await UserModel.find();

			res.status(200);
			return res.json(users);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	post = async (req, res, next) => {
		try {
			const user = await new UserModel(req.body).save();

			res.status(201);
			return res.json(user);
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	put = async (req, res, next) => {
		let id = req.params.id;
		try {
			await UserModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, req.body);

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}

	delete = async (req, res, next) => {
		let id = req.params.id;
		try {
			await UserModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

			res.status(204).end();
		} catch (error) {
			const err = new Error(error);
			return next(err);
		}
	}
}

module.exports = new UserController;