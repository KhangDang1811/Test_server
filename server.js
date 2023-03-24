const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// middlewares
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(express.static("public"));

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// connect to the mongodb database
 connectDB() 

app.use('/api/items', require("./routes/items"))
app.use('/api/payment', require("./routes/payment"))
app.use('/api/user', require("./routes/User"))


app.listen(PORT, console.log("Server is running on port ", PORT))