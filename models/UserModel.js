const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const User = new Schema({
    name:{type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,minLength: 8}
},
{
    timestamps: true,
  },
)

module.exports = mongoose.model("User", User)
