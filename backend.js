const express = require("express");
const bodyParser = require("body-parser");
const app = express();
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
app.get("/hours&Location.html", (req, res) => {
  res.sendFile(__dirname + "/hours_location.html");
});
app.get("/story.html", (req, res) => {
  res.sendFile(__dirname + "/story.html");
});
//Post method used to fetch data from the entered data and in reservation data.
app.post("/reservation", (req, res) => {
  const customerName = req.body.name;
  const contactNumber = req.body.contact;
  const date = req.body.date;
  const email = req.body.email;
  const time = req.body.time;
  console.log("Customer Name is:" + customerName);
  console.log("Contact Number is:" + contactNumber);
  console.log("Reservation Time is: " + date);
  console.log("Email is: " + email);
  console.log("Timing is: " + time);
});
app.post("/contact", (req, res) => {
  const Name = req.body.name;
  const email = req.body.email;
  const Phone = req.body.phone;
  const inquiry = req.body.about;
  const message = req.body.message;
  console.log(Name);
  console.log(email);
  console.log(Phone);
  console.log(inquiry);
  console.log(message);
});
app.listen(3400, function () {
  console.log("Data is running on port 3400");
});
