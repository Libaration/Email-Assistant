use super::variables::Variables;
use serde::{Deserialize, Serialize};
#[derive(Serialize, Deserialize, Debug)]
pub struct GraphQLQuery {
  pub query: String,
  pub variables: Option<Variables>,
  #[serde(rename = "operationName")]
  pub operation_name: Option<String>,
}
