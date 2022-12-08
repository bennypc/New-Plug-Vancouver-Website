//require("dotenv").config();

const stripe = require("stripe")("KEY");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.static(path.join(__dirname, "..", "plug-website", "build")));
//app.use(express.static(path.join(__dirname, "..", "plug-website")));

//const YOUR_DOMAIN = "http://localhost:4242";
const YOUR_DOMAIN = "http://plugvancouver.com";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1MAlN7JeUNpSjLZt3Jd4dfJ9",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  });

  res.redirect(303, session.url);
});

// create a GET route
app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../plug-website/build/"),
  });
});

app.listen(process.env.PORT || 4242, () => console.log("Server has started"));

// const storeItems = new Map([
//   [1, { priceInCents: 1000, name: "Event ticket 1" }],
//   [2, { priceInCents: 20000, name: "Learn CSS Today" }],
// ]);

// app.post("/payment", cors(), async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "CAD",
//       description: "Plug Vancouver",
//       payment_method: id,
//       confirm: true,
//     });
//   } catch (error) {}
// });

// app.listen(process.env.PORT || 4000, () => {
//   console.log("Server is listening on port 4000");
// });
