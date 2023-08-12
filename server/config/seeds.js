const db = require("./connection");
const { Ticket, User } = require("../models");
const seedData = require("./astable.json");

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
		username: "admin",
		lastName: "Admin",
		firstName: "Admin",
		internalRef: "@000000",
		position: "admin",
		password: "admin12345",
	});
	await User.create({
		username: "nheitmann",
		lastName: "Heitmann",
		firstName: "Neal",
		internalRef: "@214510",
		position: "fmanager",
		password: "password12345",
	});
	await User.create({
		username: "hmamora",
		lastName: "Mamora",
		firstName: "Habel",
		internalRef: "@225410",
		position: "fmanager",
		password: "password12345",
	});
	await User.create({
		username: "jossicakes",
		lastName: "Teklu",
		firstName: "Jossi",
		internalRef: "514510",
		position: "supervisor",
		password: "password12345",
	});
	await User.create({
		username: "asanchez",
		lastName: "Sanchez",
		firstName: "Aaron",
		internalRef: "325520",
		position: "supervisor",
		password: "password12345",
	});
	await User.create({
		username: "Biz",
		lastName: "Gebrekidan",
		firstName: "Bisrat",
		internalRef: "314510",
		position: "runner",
		password: "password12345",
	});
	console.log("Users seeded");

	process.exit();
});
