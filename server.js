//require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51MAkEuJeUNpSjLZtGFmsNzg6sK5WGhVNHz7pwk2eLrayo4dlt4VkuLppl8XaEvLZtfUwt9833CtqoXcnvLsHketX00EOeGR8TZ"
);
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

app.use(cors());

app.use(express.static(path.join(__dirname, "plug-website/build")));

//app.use(express.static(path.join(__dirname, "..", "plug-website")));

const YOUR_DOMAIN = "http://localhost:3000";
//const YOUR_DOMAIN = "http://plugvancouver.com";

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
    success_url: `${YOUR_DOMAIN}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${YOUR_DOMAIN}?cancelled=true`,
    automatic_tax: { enabled: true },
  });

  const msg = {
    to: "benny.pincha@gmail.com", // Change to your recipient
    from: "theplugvancouvergeneral@gmail.com", // Change to your verified sender
    subject: "Your Ticket",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  res.redirect(303, session.url);
});

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "plug-website/build", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Express server is running");
});

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
