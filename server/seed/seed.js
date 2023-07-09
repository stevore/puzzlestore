const connection = require('../config/connection');
const { Category, User } = require('../models');
const categoryData = require('./categorySeeds.json');
const userData = require('./userSeeds.json');

/* open connection and start seeding */
connection.once('open', async () => {
  try {
    await Category.deleteMany({});
    const categories = await Category.insertMany(categoryData);

    await User.deleteMany({});
    const users = await User.insertMany(userData);

    console.log('Data seeding completed successfully!');
  } catch (err) {
    console.error('Error while seeding data:', err);
  } finally {
    process.exit(0);
  }
});


// const db = require('../config/connection');

// const thoughtSeeds = require('./thoughtSeeds.json');

// db.once('open', async () => {
//   await Thought.deleteMany({});
//   await Thought.create(thoughtSeeds);

//   console.log('all done!');
//   process.exit(0);
// });
