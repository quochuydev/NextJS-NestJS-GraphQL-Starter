import gql from 'graphql-tag';

export const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription newMessage {
    newMessage {
      sent
      body
    }
  }
`;

export const newMessage2 = gql`
  subscription newMessage2 {
    newMessage2 {
      sent
      body
    }
  }
`;
