const router = require("express").Router();
const Message = require("../db/models/message");

// GET /spotim/chat/messages
router.get("/", (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

// POST /spotim/chat/messages
router.post("/", (req, res, next) => {
  console.log("/spotim/chat/messages, heres the messagePayload", req.body);
  let { username, message } = req.body;

  Message.create({ username, content: message })
    .then(message => res.json(message))
    .catch(next);
});

module.exports = router;
