const axios = require("axios");
const Payment = require("../models/Payment");

const initializePayment = async (req, res) => {

    // form data
    const data = {
        amount: "2", 
        email: 'test123@gmail.com',
        totalPrice:"125.000",
        name: 'test',
    }

    const order = new Payment({
        _id: Math.random(),
        name: data.name,
        amount:data.amount,
        email:data.email,
        totalPrice:data.totalPrice,
    })
    res.send({
        _id: order._id,
        name: order.name,
        email: order.email,
        totalPrice: order.totalPrice,
        amount:order.amount,
    });
   
}

const verifyPayment = async (req, res) => {
        await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
            .then((response) => {
                console.log(response)
                res.json({message: response})
            }) 
            .catch((err) => {
                console.log("Payment can't be verfied", err)
                res.json({error: err})
            })

            res.json({message: "response", param: req.params.id})
}

module.exports = { initializePayment, verifyPayment }