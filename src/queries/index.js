import { GET_SCHEDULED_AUCTIONS } from './getScheduledAuctions.graphql';
import { GET_SCHEDULED_AUCTIONS_KEYMAP } from './getScheduledAuctions.graphql';
import { GET_RECENTLY_SOLD_AUCTIONS } from './getRecentlySoldAuctions.graphql';
import { GET_RECENTLY_SOLD_KEYMAP } from './getRecentlySoldAuctions.graphql';
import { GET_AUCTION_LOT } from './getAuctionLot.graphql';
import { EMPTY_QUERY } from './emptyQuery.graphql';
export const queries = {
  GET_SCHEDULED_AUCTIONS,
  EMPTY_QUERY,
  GET_AUCTION_LOT,
  GET_RECENTLY_SOLD_AUCTIONS,
};
export const keymaps = {
  GET_SCHEDULED_AUCTIONS: GET_SCHEDULED_AUCTIONS_KEYMAP,
  GET_RECENTLY_SOLD_AUCTIONS: GET_RECENTLY_SOLD_KEYMAP,
};
