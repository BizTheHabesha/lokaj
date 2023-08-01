const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
	ticketId: {
		type: String,
		unique: true,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	room: {
		type: String,
		default: "FLYER",
	},
	checkIn: {
		type: Date,
		default: new Date(),
	},
	checkOut: {
		type: Date,
		default: new Date().setDate(new Date().getDate() + 2),
	},
	vehicleMake: {
		type: String,
		default: "None",
	},
	vehicleModel: {
		type: String,
		default: "None",
	},
	vehicleColor: {
		type: String,
		default: "None",
	},
	vehiclePlate: {
		type: String,
		default: "None",
	},
	vehicleLocation: {
		type: String,
		default: "None",
	},
	lastRunner: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: "In",
		validate: function (data) {
			return ["In", "Out", "Checked Out"].find(data);
		},
	},
	type: {
		type: String,
		required: true,
		validate: function (data){
			return ["OvernightValet", "OvernightSelf", "DailyValet", "DailySelf"]
		}
	},
	damageCheck: [{ type: Number, default: [] }],
});

const Ticket = model("Ticket", ticketSchema);
module.exports = Ticket;
