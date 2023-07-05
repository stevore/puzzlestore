const { StoreInfo } = require('../models');
module.exports = {

    // Get all storeinfos
    async getAllStoreInfos(req, res) {
      try {
        const storeinfos = await StoreInfo.find();
        res.json(storeinfos);
      } catch (err) {
        console.log("Err getAllStoreInfos: "+err);
        res.status(500).json(err);
      }
    },

    // Get a single storeinfo
    async getStoreInfoById(req, res) {
      try {
        const storeinfo = await StoreInfo.findOne({ _id: req.params.storeinfoId });
        if (!storeinfo) {
          return res.status(404).json({ message: 'No storeinfo with that ID' });
        }
        res.json(storeinfo);
      } catch (err) {
        console.log("Err getStoreInfoById: "+err);
        res.status(500).json(err);
      }
    },
    // create a new storeinfo
    async createStoreInfo(req, res) {
      try {
        const storeinfo = await StoreInfo.create(req.body);
        res.json(storeinfo);
      } catch (err) {
        console.log("Err createStoreInfo: "+err);
        res.status(500).json(err);
      }
    },
    
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateStoreInfo(req, res) {
      try {
        const storeinfo = await StoreInfo.findOneAndUpdate(
          { _id: req.params.storeinfoId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!storeinfo) {
          return res.status(404).json({ message: 'No storeinfo with this id!' });
        }
  
        res.json(storeinfo);
      } catch (err) {
        console.log("err updateStoreInfo: "+err);
        res.status(500).json(err);
      }
    },
    async deleteStoreInfo(req, res) {
      try {
        const storeinfo = await StoreInfo.findOneAndRemove({ _id: req.params.storeinfoId });
  
        if (!storeinfo) {
          return res.status(404).json({ message: 'No storeinfo with this id!' });
        }
        res.json({ message: 'storeinfo successfully deleted!' });
      } catch (err) {
        console.log("Err deleteStoreInfo: "+err);
        res.status(500).json(err);
      }
    },
    
  };
  