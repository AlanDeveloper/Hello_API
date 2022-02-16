const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	cpf: {
		type: String,
		minLength: 14,
		maxlength: 14,
		required: true
	},
	name: {
		type: String,
		maxlength: 100,
		required: true
	},
	email: {
		type: String,
		maxlength: 100,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;