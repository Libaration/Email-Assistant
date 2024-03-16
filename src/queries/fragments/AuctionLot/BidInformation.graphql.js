import { gql } from '@apollo/client';

export const BidInformation = gql`
  fragment BidInformation on AuctionLot {
    winning_bidder_id
    winning_bid_amount
    starting_bid
    required_bid
    bid_count
    reserve_met
  }
`;

// reserve_bid -- needs auth to be in fragment
