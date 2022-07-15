const express = require("express");
const app = express();
const cors = require("cors");
const io = require("socket.io")(3000);
app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log(`server connected on ${socket.id}`);
  app.post("/fireSocket", async (req, res) => {
    let { action } = req.body;
    if (action === "fireWelcome") {
      socket.emit("message", "Welcome to Spocket");
      res.json({
        message: "Welcome to Sensoneo SMS GateWay API",
      });
    }
  });
});

app.listen(5001);
