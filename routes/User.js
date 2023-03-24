const express = require("express")
const UserRouter = express.Router() 
const { registerUser, login} = require("../controllers/UserController")


UserRouter.post('/register', registerUser)
UserRouter.post('/login', login)

module.exports = UserRouter