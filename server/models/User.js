const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	imgref: {
		type: String,
		required: false,
		default: "https://bit.ly/dan-abramov",
	},
	lastIn: {
		type: String,
		required: false,
		default: "0",
	},
	lastOut: {
		type: String,
		required: false,
		default: "1",
	},
});

// recursive function for hasing password before the creation of user
userSchema.pre("save", async function (next) {
	// only hash the user's password if the user is just being created or if they are changing the password
	if (!this.isModified("password")) return next();
	// hash the user's password 10 times
	this.password = await bcrypt.hash(this.password, 10);

	// recall function to check the current user is modified
	next();
});

// compare the hashed password with the incoming password
userSchema.methods.isCorrectPassword = async function (password) {
	// check if the given password matches the hashed password
	const res = await bcrypt.compare(password, this.password);
	// if the givn password was incorrect return incorrect password
	if (!res) {
		return json({ message: "Incorrect psswd" });
	}
	// return true
	return res;
};

const User = model("User", userSchema);
module.exports = User;
