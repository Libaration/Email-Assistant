pub mod auctions;
pub mod types;

pub async fn send_query(query: types::graphql_query::GraphQLQuery) -> Vec<types::auction::Auction> {
  let client = reqwest::Client::new();
  let res = client
    .post("https://www.ashlandauction.com/api")
    .header("Content-Type", "application/json")
    .json(&query)
    .send()
    .await
    .unwrap()
    .json::<types::response_data::ResponseData>()
    .await
    .unwrap();
  return res.data.auctions.auctions;
}
