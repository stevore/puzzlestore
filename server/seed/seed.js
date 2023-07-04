const connection = require('../config/connection');
const { Category } = require('../models');


/* open connection and start seeding */
connection.once('open', async () => {
    await Category.deleteMany({});

  const category = [];
  let name="Animals"
    category.push({name});
   // category.push({"Nature"});
await Category.collection.insertMany(category);
console.table(category);
process.exit(0);

});