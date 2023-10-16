use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
pub struct Order {
  pub column: String,
  pub direction: String,
}
