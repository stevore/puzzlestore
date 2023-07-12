import { gql } from '@apollo/client';

export const QUERY_CATEGORYS = gql`
  query getCategorys {
    categorys {
      _id
      name
      image
    
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      UPC
      description
      quantity
      price
   
    
    }
  }
`;
  
export const QUERY_PRODUCTS_BY_CATEGORY = gql`
  query getProducts($categoryId:ID!) {
    products {
      _id
      name
      UPC
      description
      quantity
      price
   
    
    }
  }
`;