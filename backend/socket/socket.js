import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    },
});

export const getRecipientSocketID = (recipientID) => {
    return userSocketMap[recipientID];
};

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("user connnected", socket.id);
    const userID = socket.handshake.auth.userId;
    console.log(userID)
    if (userID) {
        userSocketMap[userID] = socket.id;
    }

    console.log(userSocketMap)

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userID];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { server, app, io };