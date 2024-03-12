import { gql } from '@apollo/client';

export const ImagesInformation = gql`
  fragment ImagesInformation on AuctionLot {
    images {
      title
      thumb_url
      url
      created_at
    }
  }
`;
