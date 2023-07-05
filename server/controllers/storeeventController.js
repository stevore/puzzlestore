const { StoreEvent } = require('../models');
module.exports = {

    // Get all storeevents
    async getAllStoreEvents(req, res) {
      try {
        const storeevents = await StoreEvent.find();
        res.json(storeevents);
      } catch (err) {
        console.log("Err getAllStoreEvents: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single storeevent
    async getStoreEventById(req, res) {
      try {
        const storeevent = await StoreEvent.findOne({ _id: req.params.storeeventId });
        if (!storeevent) {
          return res.status(404).json({ message: 'No storeevent with that ID' });
        }
        res.json(storeevent);
      } catch (err) {
        console.log("Err getStoreEventById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new storeevent
    async createStoreEvent(req, res) {
      try {
        const storeevent = await StoreEvent.create(req.body);
        res.json(storeevent);
      } catch (err) {
        console.log("Err createStoreEvent: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateStoreEvent(req, res) {
      try {
        const storeevent = await StoreEvent.findOneAndUpdate(
          { _id: req.params.storeeventId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!storeevent) {
          return res.status(404).json({ message: 'No storeevent with this id!' });
        }
  
        res.json(storeevent);
      } catch (err) {
        console.log("err updateStoreEvent: "+err);
        res.status(500).json(err);
      }
    },
    async deleteStoreEvent(req, res) {
      try {
        const storeevent = await StoreEvent.findOneAndRemove({ _id: req.params.storeeventId });
  
        if (!storeevent) {
          return res.status(404).json({ message: 'No storeevent with this id!' });
        }
        res.json({ message: 'storeevent successfully deleted!' });
      } catch (err) {
        console.log("Err deleteStoreEvent: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  