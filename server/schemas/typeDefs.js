const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
     _id: ID
    firstName:String
    lastName:String
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
  _id: ID
  name: String
  UPC: String
  description:String
  image:String
  quantity: Int
  price:Float
  category:Category
}

type ProductReview {
  _id: ID
  name: String
  review: String
  rating: Int
}

  type Blog {
    _id: ID
    title: String
    content: String
    user: User
  }

  type Cart {
    name: String
    items: [Product]
  }

  type StoreInfo {
    name:String
    description:String
    street:String
    city:String
    state:String
    zipcode:String
    phone:String
    email:String
  }

  type StoreEvent {
    name:String
    description:String
    startdate:String
    enddate:String
  }

  type StoreSpecial {
    name:String
    description:String
    product:String
    category:String
    saleprice:Float
    startdate:String
    enddate:String
  }

  type Query {
    blog:Blog
    cart:Cart
    category:Category
    product:[Product]
    productreview:ProductReview
    storeevent:StoreEvent
    storeinfo:StoreInfo
    storespecial:StoreSpecial
    user:User
  }
`;

module.exports = typeDefs;
