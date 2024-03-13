import { gql } from '@apollo/client';

export const GET_RECENTLY_SOLD_AUCTIONS = gql`
query Uiapi {
  uiapi {
    query {
      pba__Listing__c(
        first: 300
        orderBy: { Expiration_Date__c: { order: ASC, nulls: LAST } }
        where: {
          pba__Status__c: { eq: "sold" }
          Assigned_To__c: { ne: null }
        }
      ) {
        totalCount
        edges {
          node {
            Assigned_To__c {
              value
            }
            pba__Status__c {
              value
            }
          }
        }
      }
    }
  }
}
`;

export const GET_RECENTLY_SOLD_KEYMAP = {
  Assigned_To__c: 'assignedTo',
  pba__Status__c: 'status',
  totalCount: 'totalCount',
};
