const { User } = require('../models');

const userController = {
  // GET all users
  getAllUsers(req,res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET a single user by its _id and populated thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with thi sid was found.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
  }

  // POST a new user

  // PUT to update a user by its _id

  // DELETE to remove user by its _id

  // POST to add a new friend to a user's friend list

  // DELETE to remove a friend from a user's friend list

}

module.exports = UserController;
