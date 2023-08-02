const { gql } = require("apollo-server-express");

const typeDefs = gql `
    type Ticket {
        _id: ID
        ticketId: String
        lastName: String
        firstName: String
        room: String
        checkIn: String
        checkOut: String
        vehicleMake: String
        vehicleModel: String
        vehicleColor: String
        vehiclePlate: String
        vehicleLocation: String
        lastRunner: String
        status: String
        type: String
        damageCheck: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type User {        
        _id: ID
        username: String
        lastName: String
        firstName: String
        internalRef: String
        position: String
    }

    type Query {
       tickets: [Ticket]
    }

    type Mutation {
       addUser(username: String!, firstName: String!, lastName: String!, internalRef: String!, position: String!): Auth
    }
`;

module.exports = typeDefs;