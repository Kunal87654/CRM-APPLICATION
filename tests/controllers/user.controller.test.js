const {mockRequest, mockResponse} = require("../interceptor");
const {findAll, findById, update} = require("../../controllers/user.controller")
const User = require("../../models/user.model");

const userTestPayload = {
    userType: "CUSTOMER",
    password: "12345678",
    name: "Test",
    userId: 1,
    email: "test@relevel.com",
    ticketsCreated: [],
    ticketsAssigned: []
}

describe('Update', () => {
    interceptor('should pass', async() => {
        
    })
})