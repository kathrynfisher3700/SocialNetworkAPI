const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

// GET ALL THOUGHTS /api/thoughts
router.route("/").get(getThoughts);

// GET SINLGE THOUGHT /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// DELETE THOUGHT /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

// PUT, UPDATE THOUGHT /api/thoughts/:thoughtId
router.route("/:thoughtId").post(updateThought);

// POST THOUGHT /api/thoughts
router.route("/").post(createThought);


module.exports = router;
