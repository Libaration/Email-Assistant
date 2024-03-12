import { gql } from '@apollo/client';

export const PrimaryInformation = gql`
  fragment PrimaryInformation on AuctionLot {
	auction_lot_id
	auction_lot_status
	title
	description
	quantity
    	category {
	name
	}
}
`;
