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
  