const UserModel = require("../models/UserModel")
const bcrypt = require("bcryptjs")
const {generateToken} = require("../config/until.js")
 const expressAsyncHandler = require("express-async-handler")

 const registerUser = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const existUser = await UserModel.findOne({email: req.body.email});
    if (existUser) {
        res.status(401).send({message: " email already exist"});
    }else {
        const user = new UserModel({
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        })
        const createUser = user.save();
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user),
        });
    }

})

 const login = expressAsyncHandler(async (req, res) => {
    const user = await  UserModel.findOne({email: req.body.email})
    if(user && bcrypt.compareSync(req.body.password, user.password)){ 
        console.log("Login success")
        res.send({
            _id: user._id,
            name: user.name || user.displayName,
            email: user.email,
            password: user.password,
            token: generateToken(user),
        });
    }
    else{
        res.status(401).send({message: "invalid email or password"})
    }
})

module.exports = {
    login,
    registerUser
}