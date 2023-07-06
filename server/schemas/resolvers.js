const { User,Product,Category,Blog,ProductReview,
  StoreEvent,StoreSpecial,StoreInfo,Cart } = require('../models');

const resolvers = {
  Query: {
    category: async () => {
      return await Category.find({});
    },
    user: async () => {
      return await User.find({});
    },
    product: async () => {
      return await Product.find({});
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
