const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 100,
		unique: true,
		required: true
	}
});
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;