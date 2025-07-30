import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import protectedRoute from "./routes/protectedRoute";

const app = express();
app.use(cors());
app.use(express.json());

// REST API route
app.use("/api", protectedRoute);

// ✅ Create HTTP server & attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Or your frontend origin
    methods: ["GET", "POST"],
  },
});

// ✅ Listen for Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

 
  socket.on("chat message", (data) => {
    console.log("Message received:", data);
    io.emit("chat message", data); // broadcast to all clients
  });
});


server.listen(5000, () => {
  console.log("Server + Socket.IO running on port 5000");
});
