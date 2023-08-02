const db = require("./connection");
const {Ticket, User} = require("../models");

db.once("open", async() => {
    // delete previous data in db
    await Ticket.deleteMany();
    // setup a ticket seed
    await Ticket.create({
        ticketId: "111000", 
        lastName: "Smith", 
        firstName: "John", 
        lastRunner: "Biz", 
        status: "In",
        type: "OvernightValet"
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
        position: "manager"
    });
    console.log("User seeded");

    process.exit();
})