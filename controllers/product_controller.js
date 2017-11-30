var express = require("express");
var router = express.Router();
var connection = require("../config/connection.js");

// FIX PRICE DATA FROM DB
  function fixPrice(result){
    for (var key in result) {
      var price = (result[key].price).toString().split(".");
      if (price[1] < 10 && price[1].length === 1) {
        price[1] += "0";
      } else if (!price[1]){
        price.push('00');
      }
      result[key].price = price.join(".");
    }
    return result;
  }

// LOAD INDEX.HANDLEBARS
  router.get("/", function(req, res) {
    res.render("index");                                        // RETURN INDEX.HANDLEBARS
  });

// LOAD VIEWALL.HANDLEBARS
  router.get("/viewall", function(req, res) {
    var queryString = "SELECT * FROM products;";                // SQL QUERY
    connection.query(queryString, function(err, result) {       // (MYSQL) CONNECTION.QUERY
      if (err) { throw err; }                                   // THROW ERRORS
      var sqlDATA = fixPrice(result);                           // FIX PRICE DATA
      var hbObj = {
        products: sqlDATA
      };
      res.render("viewall", hbObj);                             // RETURN VIEWALL.HANDLEBARS
    });
  });

// LOAD REPORTS.HANDLEBARS
  router.get("/reports", function(req, res) {
    res.render("reports");                                      // RETURN REPORTS.HANDLEBARS
  });

// GET DATA TO POPULATE REPORTS
  router.get("/api/reports", function(req,res) {
    var queryString = "SELECT * FROM products;";                // SQL QUERY
    connection.query(queryString, function(err, result) {       // (MYSQL) CONNECTION.QUERY
      if (err) { throw err; }                                   // THROW ERRORS
      var sqlDATA = fixPrice(result);                           // FIX PRICE DATA
      res.json(sqlDATA);                                        // RETURN SQL DATA FOR CHART POPULATION
    });
  });

// ADD ITEM TO DB
  router.post("/api/add_product/:name/:dept/:price/:stock", function(req, res) {
    connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: req.params.name,
        department_name: req.params.dept,
        price: req.params.price,
        quantity_on_hand: req.params.stock
      },
      function(err) {
        if (err) { throw err; }
        var queryString = "SELECT * FROM products;";                // SQL QUERY
        connection.query(queryString, function(err, result) {       // (MYSQL) CONNECTION.QUERY
          if (err) { throw err; }                                   // THROW ERRORS
          var sqlDATA = fixPrice(result);                           // FIX PRICE DATA
          var hbObj = {
            products: sqlDATA
          };
          res.render("viewall", hbObj);                             // RETURN VIEWALL.HANDLEBARS
        });
      }
    );
  });

// UPDATE ITEM IN DB
  router.post("/api/edit_product/:id/:itemname/:dept/:price/:stock", function(req, res) {
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [{
        product_name: req.params.itemname,
        department_name: req.params.dept,
        price: req.params.price,
        quantity_on_hand: req.params.stock
      },
      {
        item_id: req.params.id
      }],
      function(error) {
        if (error) { throw error; }
      }
    );
  });

// DELETE FROM DB
  router.post("/api/remove_product/:id", function(req, res) {
    connection.query(
      "DELETE FROM products WHERE ?",
      [{
          item_id: req.params.id
      }],
      function(error) {
        if (error) { throw error; }
      }
    );
  });

module.exports = router;