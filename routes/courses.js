const express = require("express");
const router = express.Router();
const { GolfCourse } = require("../models");

// GET all
router.get("/", async (req, res) => {
  const courses = await GolfCourse.findAll();
  res.json(courses);
});

// GET by id
router.get("/:id", async (req, res) => {
  const course = await GolfCourse.findByPk(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });
  res.json(course);
});

// POST
router.post("/", async (req, res) => {
  const course = await GolfCourse.create(req.body);
  res.status(201).json(course);
});

// PUT
router.put("/:id", async (req, res) => {
  const course = await GolfCourse.findByPk(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });

  await course.update(req.body);
  res.json(course);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const course = await GolfCourse.findByPk(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });

  await course.destroy();
  res.json({ message: "Deleted" });
});

module.exports = router;