const mongoose = require("mongoose")

const connectDB = async () => {
    // try {
    //     const conn = await mongoose.connect(process.env.MONGO_URI)
    //     console.log("Mongo DB Connected: ", conn.connection.host)
    // }
    // catch(err) {
    //     console.log(err)
    //     process.exit(1)
    // }
     const url = 'mongodb+srv://dangkhang:cpPt3FSbAcnSnMVP@cluster0.is4yb.mongodb.net/Test?retryWrites=true&w=majority'
    // const url = 'mongodb+srv://admin:rx8wD7ezCl7EMMZQ@cluster0.1ubfdem.mongodb.net/users?retryWrites=true&w=majority'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB