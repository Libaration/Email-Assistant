import { gql } from '@apollo/client';

const LISTING_FIELDS = gql`
  fragment ListingFields on pba__Listing__c {
    Id
    Lot_Number__c {
      value
    }
    Assigned_To__c {
      value
    }
    Disclosure_Seller_is_RE_Agent__c {
      value
    }
    Expired__c {
      value
    }
    Contract_Purchaser__c {
      value
    }
    LastModifiedDate {
      value
      format
    }
    Expiration_Date__c {
      value
      format
    }
    pba__Status__c {
      value
    }
    Showing_Instructions__c {
      value
    }
    Full_Address__c {
      value
    }
    Name {
      value
    }
    Seller_1_Phone__c {
      value
    }
    Listing_Status__c {
      value
    }
    Reserve_Price__c {
      value
      format
    }
    Inputting_Statis__c {
      value
    }
    Auctions__r {
      totalCount
      edges {
        node {
          Auction_TIme__c {
            value
            format
          }
        }
      }
    }
  }
`;

export const GET_SCHEDULED_AUCTIONS = gql`
  ${LISTING_FIELDS}

  query Uiapi {
    uiapi {
      query {
        pba__Listing__c(
          first: 100
          orderBy: { Expiration_Date__c: { order: ASC, nulls: LAST } }
          where: { pba__Status__c: { eq: "Schedule" } }
        ) {
          totalCount
          pageResultCount
          edges {
            node {
              ...ListingFields
            }
          }
        }
      }
    }
  }
`;

export const GET_SCHEDULED_AUCTIONS_KEYMAP = {
  Auction_TIme__c: 'auctionTime',
  Assigned_To__c: 'assignedTo',
  Disclosure_Seller_is_RE_Agent__c: 'disclosureSellerIsReAgent',
  Expired__c: 'expired',
  Contract_Purchaser__c: 'contractPurchaser',
  LastModifiedDate: 'lastModifiedDate',
  Expiration_Date__c: 'expirationDate',
  pba__Status__c: 'status',
  Showing_Instructions__c: 'showingInstructions',
  Full_Address__c: 'fullAddress',
  Name: 'name',
  Seller_1_Phone__c: 'phoneNumber',
  Listing_Status__c: 'listingStatus',
  Reserve_Price__c: 'reservePrice',
  Inputting_Statis__c: 'inputtingStatus',
  Auctions__r: 'previousAuctions',
  Lot_Number__c: 'lotNumber',
  id: 'id',
};
