const Sequelize = require("Sequelize");
const db = require("../db");

const Message = db.define("message", {
  avatar: {
    type: Sequelize.STRING,
    allowNull: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Message;
