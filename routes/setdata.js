const express = require("express");
const router = express.Router();
const { connection } = require("../database/mysql");

router.post("/", async (req, res, next) => {
  const head = req.body.head;
  const title = req.body.title;
  const venue = req.body.venue;
  const date = req.body.date;

  const data = {
    name: head,
    title: title,
    venue: venue,
    date: date,
  };
  try {
    await connection.query(  "INSERT INTO Record SET ?", data,(error, result) => {
      if (error) {
        console.error("Error storing data:", error);
        return res.status(500).send("An error occurred. Please try again later.");
      }
      
      const insertedData = {
        id: result.insertId,
        ...data,
      };
      
      console.log("Data stored:", insertedData);
      return res.json(insertedData);
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).send("An error occurred. Please try again later.");
  }
});

module.exports = router;
