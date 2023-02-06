const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

  // /thoughts/courses/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)


// /api/thoughts/:thoughtId/reactions/: reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)


module.exports = router;
