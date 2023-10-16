use super::dynamic_field::DynamicField;
use napi_derive::napi;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct Lot {
  pub winning_bid_amount: Option<i32>,
  pub starting_bid: Option<i32>,
  pub dynamic_fields: Vec<DynamicField>,
}

#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct Lots {
  pub lots: Vec<Lot>,
}
