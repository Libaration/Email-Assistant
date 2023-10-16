pub mod queries;
use napi_derive::napi;

use queries::auctions::get_recent::get_recent;
use queries::types::auction::Auction;

#[napi]

pub async fn get_newsletter_auctions(count: Option<i16>) -> Vec<Auction> {
  let default_count: i16 = 10;
  get_recent(count.unwrap_or(default_count)).await
}
