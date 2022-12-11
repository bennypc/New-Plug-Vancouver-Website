require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_KEY);
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const QRCode = require("qrcode");

const supabase = require("@supabase/supabase-js").createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(cors());

console.log(process.env.SUPABASE_URL);
console.log(process.env.SUPABASE_ANON_KEY);

app.use(express.static(path.join(__dirname, "plug-website/build")));

//app.use(express.static(path.join(__dirname, "..", "plug-website")));
//const YOUR_DOMAIN = "http://localhost:3000";
const YOUR_DOMAIN = "http://plugvancouver.com";
// Use body-parser to retrieve the raw body as a buffer

function makeID(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_LZdIpqja5G8UStddvevGD3Si0fmVTzen";

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log(session);

        var ticketCode = makeID(16);

        const { error } = await supabase.from("tickets").insert({
          ticket_code: ticketCode,
          name: session.customer_details.name,
          email: session.customer_details.email,
          payment_intent: session.payment_intent,
        });

        let QR = await QRCode.toDataURL("test");

        if (!!error) {
          console.log(error);
        }

        const msg = {
          to: session.customer_details.email, // Change to your recipient
          from: "theplugvancouvergeneral@gmail.com", // Change to your verified sender
          subject: "Your Ticket",
          template_id: "d-f2397c7037ab4916a2241019f83fb91e",

          dynamic_template_data: {
            qrCode: QR,
          },
        };

        sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

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
  //console.log(session);

  res.redirect(303, session.url);
});

function sendTicket() {}

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
