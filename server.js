const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile("www.pathfinding-visualizer.com" + "/index.html");
})

app.listen(1337, () => {
  console.log("The server is up and running!");
});