import { gql } from "@apollo/client";

/** send
    { 
        "username": "",
        "firstName": "", 
        "lastName": "",
        "internalRef": "",      
        "position": "",
        "password": ""
    }
 */
export const ADD_User = gql `
    mutation Mutation($username: String!, $firstName: String!, $lastName: String!, $internalRef: String!, $position: String!, $password: String!) {
        addUser(username: $username, firstName: $firstName, lastName: $lastName, internalRef: $internalRef, position: $position, password: $password) {
        token
            user {
                _id
                username
                lastName
                firstName
                internalRef
                position
                password
            }
        }
    }
`;

/** send
 * filled out fields are required
    {  
        "ticketId": "999999",
        "lastName": "test",  
        "firstName": "test",
        "room": "888", 
        "checkIn": "01/01/1970",
        "checkOut":  " 01/01/1970",
        "vehicleMake": "",
        "vehicleModel": "",  
        "vehicleColor": "",
        "vehiclePlate": "",  
        "vehicleLocation": "",
        "lastRunner": "test",  
        "status": "In",
        "type": "OvernightValet",
        "damageCheck": "000000",
        "comments": "none"
    }
 */
export const ADD_TICKET = gql `
    mutation AddTicket($ticketId: String!, $lastName: String!, $firstName: String!, $room: String!, $checkIn: String!, $checkOut: String!, $vehicleMake: String!, $vehicleModel: String!, $vehicleColor: String!, $vehiclePlate: String!, $vehicleLocation: String!, $lastRunner: String!, $status: String!, $type: String!, $damageCheck: String!, $comment: String!) {
        addTicket(ticketId: $ticketId, lastName: $lastName, firstName: $firstName, room: $room, checkIn: $checkIn, checkOut: $checkOut, vehicleMake: $vehicleMake, vehicleModel: $vehicleModel, vehicleColor: $vehicleColor, vehiclePlate: $vehiclePlate, vehicleLocation: $vehicleLocation, lastRunner: $lastRunner, status: $status, type: $type, damageCheck: $damageCheck, comment: $comment) {
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
            comments
        }
    }
`;

/**
 send
    {  
        "internalRef": "",
        "position": "new position"
    }
 */
export const UPDATE_POSITION = gql `
    mutation Mutation($internalRef: String!, $position: String!) {
        updateUserPosition(internalRef: $internalRef, position: $position) {
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

/** send ticketId with a field updated
    {  
        
        "ticketId": "required"
        "lastName": "",
        "firstName": "",
        "room": "",
        "checkIn": "",
        "checkOut": "",
        "vehicleMake": "",
        "vehicleModel": "",
        "vehicleColor": "",
        "vehiclePlate": "",
        "vehicleLocation": "",
        "lastRunner": "",
        "status": "",
        "type": "",
        "damageCheck": "",
        "comments": "",
    }
 */
export const UPDATE_TICKET = gql `
mutation UpdateTicket($ticketId: String!, $lastName: String!, $firstName: String!, $room: String!, $checkIn: String!, $checkOut: String!, $vehicleMake: String!, $vehicleModel: String!, $vehicleColor: String!, $vehiclePlate: String!, $vehicleLocation: String!, $lastRunner: String!, $status: String!, $type: String!, $damageCheck: String!, $comments: String!) {
    updateTicket(ticketId: $ticketId, lastName: $lastName, firstName: $firstName, room: $room, checkIn: $checkIn, checkOut: $checkOut, vehicleMake: $vehicleMake, vehicleModel: $vehicleModel, vehicleColor: $vehicleColor, vehiclePlate: $vehiclePlate, vehicleLocation: $vehicleLocation, lastRunner: $lastRunner, status: $status, type: $type, damageCheck: $damageCheck, comments: $comments) {
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
      comments
    }
  }
`;

/** send
 * { "username": "","password": ""}
 */
export const LOGIN = gql `
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
        username
        password
    }
  }
}
send
{"password": "", "username": ""}
`;