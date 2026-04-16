const express = require("express");
const router = express.Router();
const { Booking } = require("../models");

// GET all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

// GET by id
router.get("/:id", async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).json({ error: "Booking not found" });

  res.json(booking);
});

// CREATE
router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).json({ error: "Booking not found" });

  await booking.update(req.body);
  res.json(booking);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return res.status(404).json({ error: "Booking not found" });

  await booking.destroy();
  res.json({ message: "Booking deleted" });
});

module.exports = router;