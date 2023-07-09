import { gql } from '@apollo/client';

export const QUERY_CATEGORYS = gql`
  query getCategorys {
    categorys {
      _id
      name
    
    }
  }
`;
  