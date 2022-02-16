const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 100,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		maxlength: 500,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	},
	fk_category_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	}
});
const ProductModel = mongoose.model("Product", productSchema);

module.exports =  ProductModel;