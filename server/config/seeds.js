const db = require("./connection");
const { Ticket, User } = require("../models");
const seedData = require("./.temp/astable.json");

db.once("open", async () => {
	// delete previous data in db
	await Ticket.deleteMany();
	const parsed = seedData.map((ticket) => {
		ticket.damageCheck = "01212022001";
		ticket.checkIn = Date(ticket);
		if (ticket.ticketId[0] === "5") ticket.type = "OvernightValet";
		else if (ticket.ticketId[0] === "6") ticket.type = "OvernightSelf";
		else if (ticket.ticketId[0] === "1") ticket.type = "DailyValet";
		else ticket.type = "DailySelf";
		Math.random() > 0.33
			? (ticket.status = "In")
			: Math.random() > 0.33
			? (ticket.status = "Out")
			: (ticket.status = "Checked Out");
		Math.random() > 0.5
			? (ticket.lastRunner = "Biz")
			: (ticket.lastRunner = "jossicakes");
		return ticket;
	});
	await Ticket.create(parsed);
	// setup a ticket seed
	await Ticket.create({
		ticketId: "111000",
		lastName: "Smith",
		firstName: "Josh",
		room: "111",
		lastRunner: "Biz",
		status: "In",
		type: "DailyValet",
		damageCheck: "01212022001",
		checkIn: new Date().setDate(new Date().getDate() + 2),
	});
	console.log("Tickets seeded");

	// delete previous data in db
	await User.deleteMany();
	// setup a user seed
	await User.create({
		username: "Biz",
		lastName: "Gebrekidan",
		firstName: "Bisrat",
		internalRef: "314510",
		position: "manager",
		password: "password12345",
	});
	console.log("User seeded");

	process.exit();
});
