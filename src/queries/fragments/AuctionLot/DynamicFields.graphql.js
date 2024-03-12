import { gql } from '@apollo/client';

export const DynamicFields = gql`
  fragment DynamicFields on AuctionLot {
    fields: dynamic_fields {
      id: dynamic_field_id
      name: label
      data
    }
  }
`;
