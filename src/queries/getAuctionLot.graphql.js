import { gql } from "@apollo/client";
import { fragments } from "./fragments";

const {
  AdditionalDetails,
  AuctionDetails,
  BidInformation,
  DynamicFields,
  ImagesInformation,
  PrimaryInformation,
  TimeInformation,
} = fragments.auctionLot;
export const GET_AUCTION_LOT = gql`
  
  ${AdditionalDetails}
  ${AuctionDetails}
  ${BidInformation}
  ${DynamicFields}
  ${ImagesInformation}
  ${PrimaryInformation}
  ${TimeInformation}


  query get_lot($auction_lot_id: String!, $is_view: Boolean!) {
    lot(auction_lot_id: $auction_lot_id, is_view: $is_view) {
      ...PrimaryInformation
      ...BidInformation
      ...TimeInformation
      ...AdditionalDetails
      ...AuctionDetails
      ...ImagesInformation
      ...DynamicFields
    }
  }
`;
