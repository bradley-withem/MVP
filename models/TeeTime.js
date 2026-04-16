const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeeTime = sequelize.define("TeeTime", {
  date: DataTypes.DATEONLY,
  time: DataTypes.STRING,
  maxPlayers: DataTypes.INTEGER,
  availableSlots: DataTypes.INTEGER,
  price: DataTypes.FLOAT
});

module.exports = TeeTime;