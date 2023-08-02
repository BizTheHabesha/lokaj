const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	internalRef: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
		default: "runner",
	},
});

const User = model("User", userSchema);
module.exports = User;
