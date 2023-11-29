const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
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

////////////////////
// GET REACTION /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE REACTION /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;
