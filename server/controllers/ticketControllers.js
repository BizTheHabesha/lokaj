const { ObjectId } = require("mongoose").Types;
const {Ticket} = require("../models");

module.exports = {
    // get all tickets
    getAllTickets: async (req,res) => {
        try {
            // grab all tickets
            const allTickets = await Ticket.find();
            // check if ther are no tickets
            if(!allTickets){res.status(500).json({message: "No tickets found."})}
            // send all tickets
            res.status(200).json(allTickets);
        } catch (error) {res.status(500).json(error)}
    },
    // get a single ticket
    getSingleTicket: async (req, res) => {
        try {
            const ticketAtId = await Ticket.findOne({ticketId: req.params.ticketId});
            // check if a ticket is found
        } catch (error) {
            
        }
    }
}