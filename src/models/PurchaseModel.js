const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
	amount: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	purchase_date: {
		type: Date,
		default: Date.now
	},
	fk_product_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		index: true,
		required: true
	},
	fk_user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		index: true,
		required: true
	}
});
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);

module.exports = PurchaseModel;