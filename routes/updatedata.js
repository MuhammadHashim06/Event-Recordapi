const express = require("express");
const router = express.Router();
const { connection } = require('../database/mysql');

router.put('/:id',async function (req, res, next) {
    const id = req.params.id;
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
   await connection.query('UPDATE Record SET ? WHERE id = ?', [data, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while updating the record.' });
        }

        console.log(result);
        res.status(200).json({ message: 'Record updated successfully.' });
    });
});

module.exports = router;