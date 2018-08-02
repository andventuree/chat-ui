const router = require("express").Router();

router.use("/messages", require("./message"));

router.use((req, res, next) => {
  res.status(404).send("Not found");
});

module.exports = router;
