const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// *** GET
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

// *** POST
router.post('/', (req, res) => {
  /*
  Query should look like this:

  INSERT INTO "songs"
    ("artist", "track", "published", "rank")
  VALUES
    ('some artist', 'tracky', '1-1-1970', 7);

  */

  console.log('req.body', req.body);

  // do a DB query
  pool
    .query(
      `
    INSERT INTO "koalas"
    ("name", "gender", "age", "transfer", "notes")
    VALUES
    ('${req.body.name}', '${req.body.gender}', '${req.body.age}', ${req.body.transfer}, ${req.body.notes});
    `
    )
    // could be .then(dbRes => {.... })
    .then(function (dbRes) {
      // console.log(dbRes.rows);
      res.sendStatus(201);
    })
    // or handle DB errors
    .catch(function (err) {
      console.log(err);
      // don't ghost your client!
      // send a status
      res.sendStatus(500);
    });
});
// PUT

// DELETE

module.exports = koalaRouter;
