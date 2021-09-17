const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Ja5WUFBgCFnV3PvRK24jld4rBuYIZfqrUNeU9oQCFT8fqysVODARGuCgQymfWjvZdF6UUZu2g1vh7f9jQEWQB6T00atjIWcMZ");

// API


// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/clone-2caa0/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
