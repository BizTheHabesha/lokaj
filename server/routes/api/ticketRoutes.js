const router = require("express").Router();
const {
    getAllTickets,
    getSingleTicket,
    createTicket,
    updateTicket,
} = require("../../controllers/ticketControllers");

// /api/ticket get all or post a ticket
router.route("/").get(getAllTickets).post(createTicket);
// /api/ticket/:ticketId get single ticket by it's id or ticket code or to update an existing ticket
router.route(":/ticketId").get(getSingleTicket).put(updateTicket);


module.exports = router;