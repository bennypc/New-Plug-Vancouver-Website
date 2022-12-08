require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51MAkEuJeUNpSjLZtGFmsNzg6sK5WGhVNHz7pwk2eLrayo4dlt4VkuLppl8XaEvLZtfUwt9833CtqoXcnvLsHketX00EOeGR8TZ"
);
const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

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

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

router.get("*", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../plug-website/build/"),
  });
});

//app.listen(4242, () => console.log("Running on port 4242"));

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
