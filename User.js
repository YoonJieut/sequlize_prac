const { Sequelize } = require("sequelize");
const db = require("./database");

const User = db.sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
