const { AuthenticationError } = require("apollo-server-express");
const { Ticket, User} = require("../models");
const { signToken } = require("../utils/auth");
// stripe //

const resolvers = {
    // get all or by id for ticket and User
    Query: {
        // get all tickets
        tickets: async () => {
            // look for all of the tickets
            const allTickets =  await Ticket.find();

            // if no tickets have been found send "No tickets saved" message
            if(!allTickets){return json({message: "No tickets saved"})}

            // else return all found ticets
            return allTickets;
        },
        // get one ticket
        ticket: async (parent, {_ticketId}) => {
            // look for the ticket where the ticketId matches the request sent
            const foundTicket = await Ticket.find({ticketId: _ticketId});

            // if there is no ticket found send "Ticket not found" message
            if(!foundTicket){return json({message: "Ticket not found"})}

            // else return the found ticket
            return foundTicket;
        },
        // get all users
        users: async () => {
            // look for all of the users
            const allUsers =  await User.find();

            // if no users have been found send "No users saved" message
            if(!allUsers){return json({message: "No users saved"})}

            // else return all found users
            return allUsers;
        },
        // get one user
        user: async (parent, {_internalRef}) => {
            // look for the user where the internalRef matches the request sent
            const foundUser = await User.find({internalRef: _internalRef});

            // if there is no user found send "User not found" message
            if(!foundUser){return json({message: "User not found"})}

            // else return the found ticket
            return foundUser;
        },
    },
    // create update delete
    Mutation: {
        // create a new user
        addUser: async (parent, req) => {
            // create a new user with the requested details
            const user = await User.create({
                username: req.userName,
                lastName: req.lastName, 
                firstName: req.firstName,
                internalRef: req.internalRef, 
                position: req.position,
                password: password
            });

            // sign token for the new user
            const token = signToken(user);

            // return the new user and their token
            return { token, user };
        },
        // create a new ticket
        addTicket: async (parent, req) => {
            // create new ticket with requested attributes
            const newticket = await Ticket.create({
                ticketId: req.ticketId,
                lastName: req.lastName,
                firstName: req.firstName,
                room: req.room,
                checkIn: req.checkIn,
                checkOut: req.checkOut,
                vehicleMake: req.vehicleMake,
                vehicleModel: req.vehicleModel,
                vehicleColor: req.vehicleColor,
                vehiclePlate: req.vehiclePlate,
                vehicleLocation: req.vehicleLocation,
                lastRunner: req.lastRunner,
                status: req.status,
                type: req.type,
                damageCheck: req.damageCheck,
                comment: req.comment
            }); 
            // return the newly made ticket
            return newticket;
        },
        // update a user's postion
        updateUserPosition: async (parent, req) => {
            // check if the requested user exists
            const requestedUser = await User.findOne({internalRef: req.internalRef});

            // if the requested user does not exist send message "User does not exist"
            if(!requestedUser){return json({message: "User does not exist"})}

            // find the ticket with the given internal refrence number and return the updated position 
            return await User.findOneAndUpdate({internalRef: req.internalRef}, {position: req.position}, {new: true});
        },
        // update a ticket
        updateTicket: async (parent, req) => {
            // find the ticket with the same ticket id
            const requestedTicket = await Ticket.find({ticketId: req.ticektId});

            // if the ticket has not been found send message "Ticket does not exist"
            if(!requestedTicket){return json({message: "Ticket does not exist"})}

            // update the ticket and return it
            return await Ticket.findOneAndUpdate({ticketId: req.ticketId},{
                lastName: req.lastName,
                firstName: req.firstName,
                room: req.room,
                checkIn: req.checkIn,
                checkOut: req.checkOut,
                vehicleMake: req.vehicleMake,
                vehicleModel: req.vehicleModel,
                vehicleColor: req.vehicleColor,
                vehiclePlate: req.vehiclePlate,
                vehicleLocation: req.vehicleLocation,
                lastRunner: req.lastRunner,
                status: req.status,
                type: req.type,
                damageCheck: req.damageCheck,
                comments: req.comment
            }); 
        },
        // login a user
        login: async (parent, {username, password}) => {
            // find the user with the given username
            const user = await User.findOne({username});
            // if the user does not exist send message "Incorrect username or password"
            if(!user){return json({message: "Incorrect username or password"})}

            // check the sent password with the user's saved password
            const checkPsswd = await user.isCorrectPassword(password);
            // if the user does not exist send message "Incorrect username or password"
            if(!checkPsswd){return json({message: "Incorrect username or password"})}

            // sign the token
            const token = signToken(user);
            // return the user's token and the found user
            return {token, user};
        }
    }
};

module.exports = resolvers;