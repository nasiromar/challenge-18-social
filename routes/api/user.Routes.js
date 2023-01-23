const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  upadteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(upadteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendsId').delete(removeFriend).post(addFriend);

module.exports = router;

