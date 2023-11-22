const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

// GET ALL USERS
router.route("/thoughts").get(getThoughts);

// GET SINLGE USER
router.route("/thoughts/:thoughtId").get(getSingleThought);

// DELETE USER
router.route("/thoughts/:id").get(getSingleThought).delete(deleteThought);

// PUT, UPDATE USER
router.route("/thoughts/:thoughtId").post(updateThought);

// POST USER
router.route("/thoughts").post(createThought);


module.exports = router;
