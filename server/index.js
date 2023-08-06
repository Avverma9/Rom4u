const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const WebSocket = require("ws"); // Add this line to import the 'ws' library

const route = require("./routes/route.js");

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);
const io = new Server(server);

const wss = new WebSocket.Server({ server }); // Create a WebSocket server instance

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/Youtube";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// WebSocket server handling
let activeUsers = 0;

wss.on("connection", (ws) => {
  activeUsers++;

  // Send the updated active user count to all connected clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ activeUsers }));
    }
  });

  ws.on("close", () => {
    activeUsers--;

    // Send the updated active user count to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ activeUsers }));
      }
    });
  });
});

app.use("/", route);

app.use((req, res) => {
  return res.status(400).send({ status: false, message: "End point is incorrect" });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
