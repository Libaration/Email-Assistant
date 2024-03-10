import { GET_SCHEDULED_AUCTIONS } from "./getScheduledAuctions.graphql";
import { GET_SCHEDULED_AUCTIONS_KEYMAP } from "./getScheduledAuctions.graphql";
import { EMPTY_QUERY } from "./emptyQuery.graphql";
export const queries = {
  GET_SCHEDULED_AUCTIONS,
  EMPTY_QUERY,
};
export const keymaps = {
  GET_SCHEDULED_AUCTIONS: GET_SCHEDULED_AUCTIONS_KEYMAP,
};
