import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addProfile($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
}
`;

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        userName
        email
        password
      }
    }
  }
`;

// export const REMOVE_SKILL = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;
