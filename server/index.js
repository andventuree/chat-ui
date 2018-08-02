const express = require("express");
const app = express();
const morgan = require("morgan"); //server logging tools
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const db = require("./db");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /spotim/chat/messages
app.use("/spotim/chat", require("./api"));

db.sync({ force: false }).then(() => console.log("Db synced"));

app.listen(PORT, () => console.log(`API server ${PORT} running`));

module.exports = app;
