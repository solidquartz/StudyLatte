const { response } = require('../app');

// -- routes/catRoutes.js
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });


  router.put("/add/newuser", (request,response) => {

    const user = request.body.user;
    const command = 
    `INSERT INTO users (name, display_name, email, password) 
     VALUES ($1,$2,$3,$4);`

    db.query(command,[user.name, user.display_name, user.email, user.password])
  })

  return router;
};