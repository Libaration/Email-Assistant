use napi_derive::napi;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug)]
#[napi(object)]
pub struct DynamicField {
  pub dynamic_field_id: String,
  pub data: Option<HashMap<String, String>>,
}
