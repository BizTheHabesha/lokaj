const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Loc {
		_id: ID
		fullName: String
		shortName: String
		codeName: String
		code: String
	}

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
		comments: String
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
		ticket(ticketId: String!): Ticket
		users: [User]
		user(internalRef: String!): User
		locs: [Loc]
		loc(code: String!): Loc
	}

	type Mutation {
		addUser(
			username: String!
			firstName: String!
			lastName: String!
			internalRef: String!
			position: String!
			password: String!
		): Auth

		addTicket(
			ticketId: String!
			lastName: String!
			firstName: String!
			room: String!
			checkIn: String!
			checkOut: String!
			vehicleMake: String!
			vehicleModel: String!
			vehicleColor: String!
			vehiclePlate: String!
			vehicleLocation: String!
			lastRunner: String!
			status: String!
			type: String!
			damageCheck: String!
			comments: String!
		): Ticket

		updateUserPosition(internalRef: String!, position: String!): User

		updateTicket(
			ticketId: String!
			lastName: String!
			firstName: String!
			room: String!
			checkIn: String!
			checkOut: String!
			vehicleMake: String!
			vehicleModel: String!
			vehicleColor: String!
			vehiclePlate: String!
			vehicleLocation: String!
			lastRunner: String!
			status: String!
			type: String!
			damageCheck: String!
			comments: String!
		): Ticket

		login(username: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
