import { gql } from "@apollo/client";

export const TimeInformation = gql`
  fragment TimeInformation on AuctionLot {
    start_time
    end_time
    is_past_end_time
    is_passed
  }
`;
