const router = require("express").Router();

// Sets requirements
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// directs to /api/users for get and post request
router.route("/").get(getAllUsers).post(createUsers);

// directs to /api/users/:id for get, put, delete
router.route("/:userId").get(getUsersById).put(updateUsers).delete(deleteUsers);

// directs to /api/users/:userId/friends/:friendId for post, delete
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
