const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  updateUserFriend,
  deleteFriend,
  
} = require("../../controllers/userController");

// GET ALL USERS /api/users
router.route("/").get(getUsers);

// GET SINLGE USER /api/users/:userId
router.route("/:userId").get(getSingleUser);

// DELETE USER /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// PUT, UPDATE USER /api/users/:userId
router.route("/:userId").put(updateUser);

// POST USER /api/users
router.route("/").post(createUser);

////////////////////////////////////////////////////////////////////////////

// POST FRIEND /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(updateUserFriend);

//DELETE FRIEND /api/users/:userId/friends/:friendId
router.route(":userId/friends/:friendId").get(getSingleUser).delete(deleteFriend);

module.exports = router;
