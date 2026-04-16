const sequelize = require("../config/database");

const User = require("./User");
const GolfCourse = require("./GolfCourse");
const TeeTime = require("./TeeTime");
const Booking = require("./Booking");

// Relationships
GolfCourse.hasMany(TeeTime);
TeeTime.belongsTo(GolfCourse);

User.hasMany(Booking);
Booking.belongsTo(User);

TeeTime.hasMany(Booking);
Booking.belongsTo(TeeTime);

module.exports = {
  sequelize,
  User,
  GolfCourse,
  TeeTime,
  Booking
};