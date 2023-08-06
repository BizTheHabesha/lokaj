import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql `
    query Query {
        users {
            _id
            username
            lastName
            firstName
            internalRef
            position
            password
        }
    }
`;

// send {"internalRef": "num"}
export const QUERY_USER = gql `
    query User($internalRef: String!) {
        user(internalRef: $internalRef) {
        _id
        username
        lastName
        firstName
        internalRef
        position
        password
        }
    }
`;

export const QUERY_ALL_TICKETS = gql`
    query Query {
        tickets {
        _id
        ticketId
        lastName
        firstName
        room
        checkIn
        checkOut
        vehicleMake
        vehicleModel
        vehicleColor
        vehiclePlate
        vehicleLocation
        lastRunner
        status
        type
        damageCheck
        comment
        }
    }
`;

// send {"ticketId": ""}
export const QUERY_TICKET = gql `
    query Query($ticketId: String!) {
        ticket(ticketId: $ticketId) {
        _id
        ticketId
        lastName
        firstName
        room
        checkIn
        checkOut
        vehicleMake
        vehicleModel
        vehicleColor
        vehiclePlate
        vehicleLocation
        lastRunner
        status
        type
        damageCheck
        comment
        }
    }
`;
