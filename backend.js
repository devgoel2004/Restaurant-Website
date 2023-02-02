const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect( "mongodb+srv://devgoel2004:9690011021@cluster0.meyotaa.mongodb.net/?retryWrites=true&w=majority");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/reservations.html", (req, res) => {
  res.sendFile(__dirname + "/reservations.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/menu.html", (req, res) => {
  res.sendFile(__dirname + "/menus.html");
});
app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/hours&location.html", (req, res) => {
  res.sendFile(__dirname + "/hours_location.html");
});
app.get("/story.html", (req, res) => {
  res.sendFile(__dirname + "/story.html");
});
app.get("/success_reservation.html", (req, res) => {
  res.sendFile(__dirname + "/success_reservation.html");
});
app.get("/success.html", (req, res) => {
  res.sendFile(__dirname + "/contact_success.html");
});
//Post method used to fetch data from the entered data and in reservation data.
const reservationSchema = new mongoose.Schema({
  customerName: String,
  contactNumber: Number,
  date: Date,
  email: String,
  time: String,
});
app.post("/reservation", (req, res) => {
  const customerName = req.body.name;
  const contactNumber = req.body.contact;
  const date = req.body.date;
  const email = req.body.email;
  const time = req.body.time;
  const Reservation = mongoose.model("Reservation", reservationSchema);
  const data = new Reservation({
    customerName: customerName,
    contactNumber: contactNumber,
    date: date,
    email: email,
    time: time,
  });
  data.save();
  console.log("Input has been submitted.");

  return res.redirect("/success_reservation.html");
});
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  inquiry: String,
  message: String,
});
app.post("/contact", (req, res) => {
  const Name = req.body.name;
  const email = req.body.email;
  const Phone = req.body.phone;
  const inquiry = req.body.about;
  const message = req.body.message;
  console.log("Your input has been submitted.");
  const Contact = mongoose.model("Contact", contactSchema);
  const contact = new Contact({
    name: Name,
    email: email,
    phone: Phone,
    inquiry: inquiry,
    message: message,
  });
  contact.save();
  return res.redirect("/success.html");
});
app.listen(3400, function () {
  console.log("Data is running on port 3400");
});
