const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51LD45yLQbvmYq4O1XDmYqx4NatmGDYnKV4w96jHm7e49ZJBNvn45L4Vn7unGHd1V8eJt9nuUzzZhFCuK5DY4LfY900qQhr66Jh')

//API

//- app config

const app = express();

//middlewares 
app.use(cors({
    origin: true
}));
app.use(express.json());

//api routes 

app.get('/', (req, res) => res.status(200).send("hello world"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    // console.log("total payment =", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd"
    });
    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

});
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-d7bcf/us-central1/api