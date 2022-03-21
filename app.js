const dotenv = require("dotenv");
const express = require("express");
const app = express();

// DOTENV setup
dotenv.config({ path: "./config.env" });
require("./db/connect");

// its a function of middleware it takes two objects (req, res ) and one function (next() this function will be allows middleware if work will done then excute the next code..).
const middleware = (req, res, next) => {
  console.log("i am middleware");
  next();
};

// creating a routes....
app.get("/", (req, res) => {
  res.send("Hello i am home page");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello i am about page");
});

app.get("/contact", (req, res) => {
  res.send("Hello i am contact page");
});

app.get("/signin", (req, res) => {
  res.send("Hello i am Loin page");
});

app.get("/signup", (req, res) => {
  res.send("Hello i am registration page");
});

// secure port with env...
const port = process.env.PORT;

// listening port or create server
app.listen(port, () => {
  console.log(`port is listenig on ${port}`);
});
