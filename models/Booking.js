const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  numberOfPlayers: DataTypes.INTEGER,
  totalPrice: DataTypes.FLOAT,
  status: {
    type: DataTypes.STRING,
    defaultValue: "booked"
  }
});

module.exports = Booking;