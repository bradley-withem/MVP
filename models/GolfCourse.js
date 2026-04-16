const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const GolfCourse = sequelize.define("GolfCourse", {
  name: { type: DataTypes.STRING, allowNull: false },
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  holes: DataTypes.INTEGER,
  par: DataTypes.INTEGER,
  rating: DataTypes.FLOAT
});

module.exports = GolfCourse;