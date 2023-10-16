use super::{filter::Filter, order::Order, pagination::Pagination};
use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
pub struct Variables {
  pub pagination: Pagination,
  pub filter: Filter,
  pub order: Order,
}
