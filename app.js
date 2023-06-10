// Required Packages
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const hbs = exphbs.create({});

require("dotenv").config();

// Preparing the Port
const app = express()
const PORT = process.env.JAWS_DB || 3001;

/* PASSING MIDDLEWARE */

// Parse application/x-www.urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application .json
app.use(bodyParser.json());
// Static files
app.use(express.static("public"));


// Template engine (Handlebars)
app.engine("hbs", exphbs.engine( {extname: ".hbs" }));
app.set("view engine", "hbs");

// Routing
app.get("", (req, res) => {
    res.render("home");
});

// Calling the Server
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});