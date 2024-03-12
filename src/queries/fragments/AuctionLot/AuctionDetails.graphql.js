import { gql } from "@apollo/client";

export const AuctionDetails = gql`
  fragment AuctionDetails on AuctionLot {
    auction: full_auction {
      auction_id
      title
      auction_status
      start_time
      end_time
      real_estate_info {
        asking
      }
    }
  }
`;
