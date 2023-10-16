use crate::queries::types::lots::Lots;
use napi_derive::napi;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct Auction {
  pub auction_id: String,
  pub image_tag: String,
  pub end_time: String,
  pub title: String,
  pub highlights: Option<Vec<CachedAssets>>,
  pub lots: Lots,
}
#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct CachedAssets {
  pub url: String,
}

#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct Auctions {
  pub auctions: Vec<Auction>,
}
