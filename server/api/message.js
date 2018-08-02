const router = require("express").Router();
const { Message } = require("../db/models");

// GET /spotim/chat/messages
router.get("/", (req, res, next) => {
  Message.findAll()
    .then(messages => res.json(messages))
    .catch(next);
});

// POST /spotim/chat/messages
router.post("/messages", (req, res, next) => {
  Message.build(req.body)
    .then(message => res.json(message))
    .catch(next);
});

module.exports = router;
