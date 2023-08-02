const { AuthenticationError } = require("apollo-server-express");
const { Ticket, User} = require("../models");
const { signToken } = require("../utils/auth");
// stripe //

const resolvers = {
    // get all or by id for ticket and User
    Query: {
        tickets: async () => {
            return await Ticket.find();
        }
        // ticket: async ()
    },
    // create update delete
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;