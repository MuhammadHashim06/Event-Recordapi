const express = require("express");
const router = express.Router();
const { connection } = require("../database/mysql");

router.get("/", function (req, res, next) {
  connection.query("SELECT * from Record", (err, rows) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log('Query executed successfully.');
      const jsonData = JSON.parse(JSON.stringify(rows)); // Convert to JSON format
      res.json(jsonData); // Send the data as JSON response
    }
  });
});

module.exports = router;
