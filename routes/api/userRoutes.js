const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController');

// GET ALL USERS
router.route('/users').get(getUsers);

// GET SINLGE USER
router.route('/users/:userId').get(getSingleUser);

// DELETE USER
router.route('/users/:id').get(getSingleUser).delete(deleteUser);

// PUT, UPDATE USER
router.route('/users/:userId').post(updateUser);

// POST USER
router.route('/users').post(createUser);


module.exports = router;
