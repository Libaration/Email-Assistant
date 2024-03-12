import { gql } from '@apollo/client';

export const AdditionalDetails = gql`
  fragment AdditionalDetails on AuctionLot {
    basic_description
    basic_description_plain
    view_count
    image_tag
    primary_image
    buy_it_now_price
    public_url
  }
`;
