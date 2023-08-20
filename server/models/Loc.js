const { Schema, model } = require("mongoose");

const locSchema = new Schema({
	fullName: {
		type: String,
		unique: true,
		required: true,
	},
	shortName: {
		type: String,
		unique: true,
		required: true,
	},
	codeName: {
		type: String,
		unique: true,
	},
	code: {
		type: String,
		unique: true,
	},
});

const Loc = model("Loc", locSchema);
module.exports = Loc;
