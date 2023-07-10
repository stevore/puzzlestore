import { gql } from '@apollo/client';

export const QUERY_CATEGORYS = gql`
  query getCategorys {
    categorys {
      _id
      name
    
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
    
    }
  }
`;
  