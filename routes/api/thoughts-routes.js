const router = require('express').Router();

// implement controller methods by importing object by destrucuring out method names 
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/:id
router
.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;