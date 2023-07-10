const { User,Product,Category,Blog,ProductReview,
  StoreEvent,StoreSpecial,StoreInfo,Cart } = require('../models');
  const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../middleware/auth');

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
},
Mutation: {
    addProfile: async (parent, { firstName, lastName, userName, email, password }) => {
      const profile = await User.create({ firstName, lastName, userName, email, password });
      const token = signToken(profile);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }



      
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
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