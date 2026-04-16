const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/users", require("./routes/users"));
app.use("/courses", require("./routes/courses"));
app.use("/teetimes", require("./routes/teetimes"));
app.use("/bookings", require("./routes/bookings"));

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Server Error"
  });
});

module.exports = app;