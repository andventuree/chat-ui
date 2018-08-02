const express = require("express");
const app = express();
const morgan = require("morgan"); //server logging tools
const bodyParser = require("body-parser");
const db = require("./db");
const Message = require("./db/models");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("https://spotim-demo-chat-server.herokuapp.com/", (req, res, next) => {
  Message.build(req.body)
    .then(res => res.json())
    .catch(next);
});

app.get("*", (req, res, next) => {
  res.send("catch all route");
});

db.sync().then(() => console.log("Db is synced"));

app.listen(8000, () => console.log("Server 8000 running"));

module.exports = app;
