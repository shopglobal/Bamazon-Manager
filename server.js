// -- EXPRESS -- //
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// -- STATIC ROUTES -- //
app.use(express.static("public"));

// -- DYNAMIC ROUTES -- //
var routes = require("./controllers/product_controller.js");
app.use("/", routes);

// -- HANDLEBARS -- //
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// -- BODY-PARSER -- //
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// -- METHOD-OVERRIDE -- //
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// -- PORT LISTENER -- //
app.listen(port, function() {
    console.log("SERVER PORT: " + port);
});