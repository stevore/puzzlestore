const { User } = require('../models');
module.exports = {

    // Get all users
    async getAllUsers(req, res) {
        try {
          const users = await User.find();
          res.json(users);
        } catch (err) {
          console.log('Error retrieving users:' + err);
          res.status(500).json(err);
        }
      },
      
    // Get single user
    async getUsersById(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.storespecialId });
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
          res.json(user);
        } catch (err) {
          console.log('Error retrieving users:' + err);
          res.status(500).json(err);
        }
      },

      async createUser(req, res) {
        try {
          const newUser = await User.create(req.body);
          res.json(newUser);
        } catch (err) {
          console.log('Error creating user:' +   err);
          res.status(500).json(err);
        }
      }
      
      



}