var express = require("express");
var app = express();
var pg = require("pg");
var products = require("./data/products");

app.set("port", process.env.PORT || 5000);

app.use(express.static(__dirname + "/public"));

// views is directory for all template files
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("pages/default");
});

app.get("/data.json", function(req, res) {
  res.send(products).catch(err => {
    console.log("the error is =", err);
  });
});

app.get("/homepage", function(request, response) {
  response.render("pages/index");
});

app.get("/category", (req, res) => {
  res.render("pages/category");
});

app.get("/product", (req, res) => {
  res.render("pages/product");
});

app.get("/custom", (req, res) => {
  res.render("pages/custom");
});

app.get("/cart", (req, res) => {
  res.render("pages/cart");
});

app.get("/cool", function(request, response) {
  response.send(cool());
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
