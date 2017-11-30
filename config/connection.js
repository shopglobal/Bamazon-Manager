var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "198.199.101.74",
    user: "markallenx",
    password: "marktiffany8273$$$",
    database: "nstock"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("MYSQL CONNECTION ERROR: " + err.stack);
    return;
  }
  console.log("MYSQL CONNECTED AS ID: " + connection.threadId);
});

module.exports = connection;