const { sequelize, User, GolfCourse, TeeTime, Booking } = require("../models");

(async () => {
  try {
    console.log("🔥 SEED STARTING...");

    await sequelize.sync({ force: true });
    console.log("✅ Database synced");

    const user = await User.create({
      name: "Test User",
      email: "test@test.com",
      phone: "555-1111"
    });

    console.log("👤 User created");

    const course = await GolfCourse.create({
      name: "Pebble Beach",
      city: "Pebble Beach",
      state: "CA",
      holes: 18,
      par: 72,
      rating: 4.8
    });

    console.log("⛳ Course created");

    const tee = await TeeTime.create({
      date: "2026-05-01",
      time: "09:00",
      maxPlayers: 4,
      availableSlots: 4,
      price: 100,
      GolfCourseId: course.id
    });

    console.log("⏰ Tee time created");

    await Booking.create({
      numberOfPlayers: 2,
      totalPrice: 200,
      status: "booked",
      UserId: user.id,
      TeeTimeId: tee.id
    });

    console.log("📌 Booking created");

    console.log("🎉 SEED COMPLETE");

    await sequelize.close();
  } catch (err) {
    console.error("❌ SEED ERROR:", err);
  }
})();