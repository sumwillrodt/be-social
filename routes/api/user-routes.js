const router = require('express').Router();

const {
  getAllUsers,
  getuserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getuserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;