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

    const categorys = [];
    const products = [];
    const productsCnt = [];

    const categories = await Category.insertMany(categoryData);
  

    const productCategory=await Category.find();
console.log(productCategory)
    await productCategory.forEach((category)=>{
      try{
        console.log("foreach")
        const newProduct = new Product({
          name:category.name+"1",
          image:category.name+"1",
          description:`A fine crafted ${category.name} puzzle`,
          quantity:genRandomNbr(15),
          price:genRandomNbr(10)+9,
          UPC:category.name+genRandomNbr(40),
        });
        category.product.push(newProduct);
        category.save;
      }
      catch (err) {
        console.log("get foreach "+err);
        res.status(500).json(err);
      }
    })

    // create products
    for (let i=0;i<10;i++){
      let name=productData.getName(i)
      let c = productData.getCount(i)
      for(let y=0;y<c;y++){
      const newProduct = new Product({
        name:name+productData.getCount(i),
        image:name+c,
        description:`A fine crafted ${name} puzzle`,
        quantity:genRandomNbr(15),
        price:genRandomNbr(10)+9,
        UPC:name+genRandomNbr(40),
        category:name,
      });
      console.log(newProduct);
      products.push(newProduct)
    }
    }
    await Product.insertMany(products)
    
  console.log('Data seeding completed successfully!');
} catch (err) {
  console.error('Error while seeding data:', err);
} finally {
  process.exit(0);
}




});

