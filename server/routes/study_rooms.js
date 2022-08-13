const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM study_rooms";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });



  // return room_info
  router.get(`/room_info/:room_id`,(req,res) => {
    const command = `SELECT * from study_rooms WHERE id = $1`;
    const room_id = req.params.room_id;

    db.query(command,[room_id])
    .then(result => {
      const rooms = result.rows

      if(rooms.length === 0) {
        res.send({error : "no such room exists"})
      }

      else {
       const room_info = {id: rooms[0].id, title: rooms[0].title, topic: rooms[0].sound,entered_users: rooms[0].entered_users, max_capacitry: rooms[0].max_capacitry, isPrivate: rooms[0].isPrivate}
       res.send(room_info);
      }

    })

  })

  router.get(`/entered_users/:room_id`,(req,res) => {
    const command = `SELECT * from study_rooms WHERE id = $1`;
    const room_id = req.params.room_id;

    db.query(command,[room_id])
    .then(result => {
      const rooms = result.rows

      if(rooms.length === 0) {
        res.send({error : "no such room exists"})
      }

      else {
       const room_info = rooms[0].entered_users
       res.send(room_info);
      }

    })

  })

  router.get(`/:room_id/enter/:display_name`,(req,res) => {
    
    const command = `UPDATE study_rooms SET entered_users = array_append(entered_users,$1) WHERE id = $2 RETURNING *;`;
    const room_id = req.params.room_id;
    const user_id = req.params.display_name

    db.query(command,[user_id,room_id])
    .then(result => {
        res.send(result.rows[0].entered_users)

    })

  })

  router.get(`/:room_id/leave/:display_name`,(req,res) => {
  
    const command = `UPDATE study_rooms SET entered_users = array_remove(entered_users,$1) WHERE id = $2 RETURNING *;`;
    const room_id = req.params.room_id;
    const user_id = req.params.display_name

    db.query(command,[user_id,room_id])
    .then(result => {
        res.send(result.rows[0].entered_users)

    })

  })

  router.post(`/add_new_room`,(req,res) => {
  
    const command = `INSERT INTO study_rooms (title, description, topic) Values ($1, $2, $3) returning *;` ;
    const title = req.body.title;
    const description = req.body.description;
    const topic = req.body.topic;

    db.query(command,[title, description, topic])
    .then(result => {
        res.send(result.rows[0])

    })

  })








  return router;
};