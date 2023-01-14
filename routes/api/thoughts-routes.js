const router = require("express").Router();

// Sets requirements
const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// directs to /api/thoughts for get request
router.route("/").get(getAllThoughts);

// directs to /api/thoughts/:id for get, put, delete
router
  .route("/:thoughtsId")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// directs to /api/thoughts/:userId for post
router.route("/:userId").post(createThoughts);

// directs to /api/thoughts/:thoughtId/reactions for post request
router.route("/:thoughtsId/reactions").post(addReaction);

// directs to /api/thoughts/:thoughtId/reactionId for delete request
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
