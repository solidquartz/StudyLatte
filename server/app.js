require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./configs/db.config');
const bodyParser = require("body-parser");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const session = require("express-session");

//socket.io (pedro's way)
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http//localhost:9000",
    methods: ["GET", "POST"]
  }
});
//socket = events for user who connected
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  //join a room
  socket.on("join_room", (data) => {
    socket.join(data.room_id);
    console.log(`user with name: ${data.user} joined room: ${data.room_id} socke_id: ${socket.id}`)

    socket.to(data.room_id).emit("update_usersList", data);
  })

  socket.on("leave-user", (data) => {
    socket.to(data.room_id).emit("update_usersList", data)
   // socket.leave(data.room_id);

 })

  //send message data to client to a SPECIFIC room (socket.to(room(id))
  socket.on("send_message", (data) => {
    console.log(data)
    socket.to(data.room).emit("receive_message", data);
  })

  socket.on("start-timer",(data) => {
    let study_time = data.study_time
    const room = data.room
    let break_time = data.break_time
    
    
    countDown(study_time, room, true)
    .then(()=>{countDown(break_time, room, false)})
     

  })



  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    
  })
})

const countDown = function(seconds,room, status) {
 
  return promise = new Promise( (resolve, reject) => {
    
    
    seconds--;
   
    const data = {room : room , time : seconds}
    io.emit("update-time",data)
    io.emit("update-study_stauts",{room: room, study_status :status})

    if (seconds > 0) {
      setTimeout( () => {
        countDown(seconds,room).then(resolve);
      }, 1000);
    } 
    
    else {
      
      resolve("done!");
    }

  });

}



server.listen(9000, () => {
  console.log("SERVER RUNNING");
})




//cors
app.use(cors(({
  origin: ["http//localhost:9000"],
  methods: ["GET", "POST"],
  credentials: true //enable cookies
})));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID",
    secret: "test",// we have to create a secret word
    resave: false,
    saveUninitialized: false,
    cookie: {
      expire: 60 * 60 * 72,
    },

  })
);


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//database
app.use('/users', usersRouter(db));

const study_roomsRouter = require('./routes/study_rooms')
app.use('/study_rooms', study_roomsRouter(db));


const socket_usersRouter = require('./routes/socket_users')
app.use('/socket_users', socket_usersRouter(db));




module.exports = app;
