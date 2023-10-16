use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
pub struct Pagination {
  pub page: i16,
  #[serde(rename = "pageSize")]
  pub page_size: i16,
}
