const express = require("express");
const router = express.Router();
const { TeeTime } = require("../models");

// GET all tee times
router.get("/", async (req, res) => {
  const teetimes = await TeeTime.findAll();
  res.json(teetimes);
});

// GET by id
router.get("/:id", async (req, res) => {
  const teetime = await TeeTime.findByPk(req.params.id);
  if (!teetime) return res.status(404).json({ error: "Tee time not found" });

  res.json(teetime);
});

// CREATE
router.post("/", async (req, res) => {
  const teetime = await TeeTime.create(req.body);
  res.status(201).json(teetime);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const teetime = await TeeTime.findByPk(req.params.id);
  if (!teetime) return res.status(404).json({ error: "Tee time not found" });

  await teetime.update(req.body);
  res.json(teetime);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const teetime = await TeeTime.findByPk(req.params.id);
  if (!teetime) return res.status(404).json({ error: "Tee time not found" });

  await teetime.destroy();
  res.json({ message: "Tee time deleted" });
});

module.exports = router;