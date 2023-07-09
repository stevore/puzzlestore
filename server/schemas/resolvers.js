const { User,Product,Category,Blog,ProductReview,
  StoreEvent,StoreSpecial,StoreInfo,Cart } = require('../models');

const resolvers = {
  Query: {
    categorys: async () => {
      console.log("run categorys");
      return await Category.find({});
    },
    category: async (parent, {categoryId}) => {
      console.log("run one category");
      return await Category.findOne({_id:categoryId});
    },
    user: async () => {
      return await User.find({});
    }, 

    productreview: async () => {
      return await ProductReview.find({});
    },
    blog: async () => {
      return await Blog.find({});
    },
    cart: async () => {
      return await Cart.find({});
    },
    storeinfo: async () => {
      return await StoreInfo.find({});
    },
    storeevent: async () => {
      return await StoreEvent.find({});
    },
    storespecial: async () => {
      return await StoreSpecial.find({});
    }
}
};

module.exports = resolvers;


// activity 1
// const { Product,Category } = require('../models');

// const resolvers = {
//   Query: {
//     products: async () => {
//       return await Product.find({});
//     },
//     categorys: async () => {
//          return await Category.find({});
//    },
//   }
// };

//module.exports = resolvers;