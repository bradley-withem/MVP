const express = require("express");
const router = express.Router();
const { User } = require("../models");

// GET all users
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET user by id
router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

// CREATE user
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// UPDATE user
router.put("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.update(req.body);
  res.json(user);
});

// DELETE user
router.delete("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.destroy();
  res.json({ message: "User deleted" });
});

module.exports = router;