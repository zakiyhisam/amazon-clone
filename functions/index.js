const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

const stripe=require("stripe")(
    "sk_test_51J1ODZLDoAschb87VXyzQ9SDiji7dJq4spgCiOSw8Ir"+
    "hybIW609KX6ArZU2yRZimlwRYxme2u2Mjk0AMjAkEymoc00IEAusHRO",
);

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200)
    .send("hello world"));

app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;

  console.log("Payment Request Recieved >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//  example endpoint
//  http://localhost:5001/react--clone-405b8/us-central1/api
