const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LfWdvSI8VqYbW08sWIbH4uZfWvkEbDVOh418Nb3O2eDbzHorvQWLW5HsXZQe5VRi84E49LuVnYVj7JgGCfDm4G900d8wP4sLZ"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello User"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recived", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//http://localhost:5001/clone-1a706/us-central1/api
exports.api = functions.https.onRequest(app);
