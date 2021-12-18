const router = require('express').Router();

// implement controller methods by importing object by destrucuring out method names 
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// GET all and POST at /api/user
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET one, PUT, and DELETE at /api/user/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;