const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const db=dbConfig.production.database
// Create a connection to the database
const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;