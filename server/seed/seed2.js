const connection = require('../config/connection');
const { Category, User,Product } = require('../models');
const categoryData = require('./categorySeeds.json');
const userData = require('./userSeeds.json');
const productData = require('./productSeeds.js');
const genRandomNbr = (range) => Math.floor(Math.random() * range);

/* open connection and start seeding */
connection.once('open', async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});

    const products = [];

    const categorys = await Category.insertMany(categoryData);
    
    for(let i=0;i<categorys.length;i++) {
      for(let i2=0;i2<categorys[i].productCount;i2++){
        const newProduct = new Product({
          name:categorys[i].name+i2,
          image:categorys[i].name+i2,
          description:`A fine crafted ${categorys[i].name} puzzle`,
          quantity:genRandomNbr(15),
          price:(genRandomNbr(10)+9)+.99,
          UPC:categorys[i].name.slice(3,7)+genRandomNbr(40),
        });
        products.push(newProduct);
      }
    }
    await Product.insertMany(products)
    console.log('Data seeding completed successfully!');
  }
  catch (err) {
    console.error('Error while seeding data:', err);
  } 
  finally {
    process.exit(0);
}

});
 