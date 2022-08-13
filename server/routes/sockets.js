const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users_socket";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  router.get('/add/:user_name/:socket_id', (req, res) => {
    const command = `INSERT INTO users_socket (socket_id, user_name) VALUES ($1,$2)`;
    const socket_id = req.params.socket_id
    const user_name = req.params.socket_id
    db.query(command,[socket_id,user_name]).then(data => {
      res.json(data.rows);
    });
  });




  return router;
};