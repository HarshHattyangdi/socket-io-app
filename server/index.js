// Setting up the express app
require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").createServer(app);

const APP_PORT = process.env.PORT || 4000;

http.listen(APP_PORT, () => {
  console.log(`App started on PORT: ${APP_PORT}`);
});

// Setting up the socket.io instance
const { Server } = require("socket.io");
const io = new Server(http, {
  cors: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  },
});

let count = 0;

io.on("connection", (socket) => {
  console.log("Client Connected", ++count);
  socket.on("disconnect", () => {
    console.log("Client was disconnected", --count);
  });
});
