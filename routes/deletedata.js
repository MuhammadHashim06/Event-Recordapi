const express = require("express");
const router = express.Router();
const dataapi = require('../public/data.json');
const { connection } = require('../database/mysql');

router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log('ID : ', id);

        connection.query('DELETE FROM Record WHERE id = ?', id, (err, result) => {
            if (err) {
                console.error('Error deleting data:', err);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Data Deleted');
                res.status(204).send();
            }
        });
});

module.exports = router;
