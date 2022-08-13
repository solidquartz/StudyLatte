const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM socket_users";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  router.get('/add/:username/:socket_id', (req, res) => {
    const command = `INSERT INTO socket_users (username, socket_id) VALUES ($1,$2) RETURNING *`;
    const username = req.params.username;
    const socket_id = req.params.socket_id;
    db.query(command, [username,socket_id]).then(data => {
      res.json(data.rows);
    });
  });

  router.get('/remove/:username/:socket_id', (req, res) => {
    const command = `INSERT INTO socket_users (username, socket_id) VALUES ($1,$2) RETURNING *`;
    const username = req.params.username;
    const socket_id = req.params.socket_id;
    db.query(command, [username,socket_id]).then(data => {
      res.json(data.rows);
    });
  });






  return router;
};