use super::auction::Auctions;
use napi_derive::napi;
use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct APIResponse {
  pub auctions: Auctions,
}
#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct ResponseData {
  pub data: APIResponse,
}
