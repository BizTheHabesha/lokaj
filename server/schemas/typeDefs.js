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
        damageCheck: String
        comment: String
    }

    type User {        
        _id: ID
        username: String
        lastName: String
        firstName: String
        internalRef: String
        position: String
        password: String
    }
    
    type Auth {
        token: ID
        user: User
    }

    type Query {
       tickets: [Ticket]
       ticket: Ticket
       users: [User]
       user: User
    }

    type Mutation {
        addUser(username: String!, firstName: String!, lastName: String!, internalRef: String!, position: String!): Auth

        addTicket(ticketId: String!, lastName: String!, firstName: String!, room: String!, checkIn: String!, checkOut: String!, 
            vehicleMake: String!, vehicleModel: String!, vehicleColor: String!, vehiclePlate: String!, vehicleLocation: String!,
            lastRunner: String!, status: String!, status: String!, type: String!, damageCheck: String!, comment: String!): Ticket

        updateUserPosition(internalRef: String!, position: String!): User

        updateTicket(ticketId: String!, lastName: String!, firstName: String!, room: String!, checkIn: String!, checkOut: String!, 
            vehicleMake: String!, vehicleModel: String!, vehicleColor: String!, vehiclePlate: String!, vehicleLocation: String!,
            lastRunner: String!, status: String!, status: String!, type: String!, damageCheck: String!, comment: String!): Ticket

        login(username: String!, password: String!)
    }
`;

module.exports = typeDefs;