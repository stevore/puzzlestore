
export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        _id: item._id
    };
}

export function updateCartQuantity(_id, purchaseQuantity) {
    return {
        type: UPDATE_CART_QUANTITY,
        _id,
        purchaseQuantity
    };
}

export function toggleCart() {
    return {
        type: TOGGLE_CART
    };
}

export function addMultipleToCart(cartItems) {
    return {
        type: ADD_MULTIPLE_TO_CART,
        cartItems
    };
}

import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

