use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
pub struct Filter {
  #[serde(rename = "type")]
  pub type_: [String; 2],
  pub auction_status: [i16; 2],
  pub is_visible_on_front: bool,
}
