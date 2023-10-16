use crate::queries::send_query;
use crate::queries::types::{auction::Auction, graphql_query::GraphQLQuery};

pub async fn get_recent(count: i16) -> Vec<Auction> {
  let query = GraphQLQuery {
    query: format!(
      r#"{{
        auctions(pagination: {{ page: 1, pageSize: {} }}) {{
            auctions {{
                image_tag
                end_time
                title
                auction_id
                highlights {{
                    cached_assets {{
                        url
                    }}
                }}
                lots {{
                    lots {{
                        winning_bid_amount
                        starting_bid
                        dynamic_fields {{
                            dynamic_field_id
                            data
                        }}
                    }}
                }}
            }}
        }}
    }}"#,
      count
    )
    .to_string(),

    variables: None,
    operation_name: None,
  };
  send_query(query).await
}
