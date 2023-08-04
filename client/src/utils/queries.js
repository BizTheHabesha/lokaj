import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql `
    {
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

export const QUERY_USER = gql `
    query getUser($ticket: ticketId){
        tickets(ticket: $ticket) {
            username
            lastName
            firstName
            internalRef
            position
            password
        }
    }
`;

export const QUERY_TICKET = gql `
    query getTickets($ticket: ticketId){
        tickets(ticket: $ticket) {
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