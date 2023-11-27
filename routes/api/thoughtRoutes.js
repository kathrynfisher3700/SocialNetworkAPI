const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

// GET ALL THOUGHTS
router.route("/thoughts").get(getThoughts);

// GET SINLGE THOUGHT
router.route("/thoughts/:thoughtId").get(getSingleThought);

// DELETE THOUGHT
router.route("/thoughts/:id").get(getSingleThought).delete(deleteThought);

// PUT, UPDATE THOUGHT
router.route("/thoughts/:thoughtId").post(updateThought);

// POST THOUGHT
router.route("/thoughts").post(createThought);


module.exports = router;
