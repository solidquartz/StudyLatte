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
    socket.join(data);
    console.log(`user with ID: ${socket.id} joine room: ${data}`)
  })
  socket.on("send_message", (data) => {
    console.log(data)
  })

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  })
})

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




module.exports = app;
