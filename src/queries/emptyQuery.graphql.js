import { gql } from '@apollo/client';

export const EMPTY_QUERY = gql`
  query EmptyQuery {
    uiapi {
      value
    }
  }
`;
