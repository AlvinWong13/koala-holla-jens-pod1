const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
koalaRouter.get('/', (req, res) => {
  // do a DB query
  pool
    .query(
      `SELECT * FROM "koalas"
            ORDER BY "id" ASC`
    )
    .then(function (dbRes) {
      // console.log(dbRes.rows);
      // send all koalas to client
      res.send(dbRes.rows);
    })
    // or handle DB errors
    .catch(function (err) {
      console.log(err);
      res.sendStatus(500);
    });
});
// POST

// PUT

// DELETE

module.exports = koalaRouter;
