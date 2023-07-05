const { StoreSpecial } = require('../models');
module.exports = {

    // Get all storespecials
    async getAllStoreSpecials(req, res) {
      try {
        const storespecials = await StoreSpecial.find();
        res.json(storespecials);
      } catch (err) {
        console.log("Err getAllStoreSpecials: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single storespecial
    async getStoreSpecialById(req, res) {
      try {
        const storespecial = await StoreSpecial.findOne({ _id: req.params.storespecialId });
        if (!storespecial) {
          return res.status(404).json({ message: 'No storespecial with that ID' });
        }
        res.json(storespecial);
      } catch (err) {
        console.log("Err getStoreSpecialById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new storespecial
    async createStoreSpecial(req, res) {
      try {
        const storespecial = await StoreSpecial.create(req.body);
        res.json(storespecial);
      } catch (err) {
        console.log("Err createStoreSpecial: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateStoreSpecial(req, res) {
      try {
        const storespecial = await StoreSpecial.findOneAndUpdate(
          { _id: req.params.storespecialId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!storespecial) {
          return res.status(404).json({ message: 'No storespecial with this id!' });
        }
  
        res.json(storespecial);
      } catch (err) {
        console.log("err updateStoreSpecial: "+err);
        res.status(500).json(err);
      }
    },
    async deleteStoreSpecial(req, res) {
      try {
        const storespecial = await StoreSpecial.findOneAndRemove({ _id: req.params.storespecialId });
  
        if (!storespecial) {
          return res.status(404).json({ message: 'No storespecial with this id!' });
        }
        res.json({ message: 'storespecial successfully deleted!' });
      } catch (err) {
        console.log("Err deleteStoreSpecial: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  