import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import _ from "lodash";

const pipe =
  (...funcs) =>
    (arg) =>
      funcs.reduce((acc, func) => func(acc), arg);

const removeTypename = (obj) => {
  if (obj !== null && typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.map((item) => removeTypename(item));
    } else {
      const newObj = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key !== "__typename") {
          newObj[key] = removeTypename(value);
        }
      }
      return newObj;
    }
  }
  return obj;
};

const normalizeKeys = (keymap) => (flattenedItem) => {
  const normalizedItem = {};
  for (const [key, value] of Object.entries(flattenedItem)) {
    normalizedItem[keymap[key] || key] = value;
  }
  return normalizedItem;
};

const flattenItem = (item) => {
  const addressRegex =
    /([\w\s]+(?:\.\s*)?)\s+([\w\s]+),\s+([A-Z]{2})\s+(\d{5}(?:-\d{4})?)/;

  /***************************************************************************************************************************************\
   * Obligatory comment because I found this regex online                                                                                *
   * Regex Explanation:                                                                                                                  *
   *   ([\w\s]+(?:\.\s*)?)  - Capture group for street, matches one or more word characters or spaces,                                   *
   *                           optionally followed by a period and spaces.                                                               *
   *   \s+([\w\s]+),         - Capture group for city, matches one or more word characters or spaces,                                    *
   *                           followed by a comma.                                                                                      *
   *   \s+([A-Z]{2})\s+      - Capture group for state, matches two uppercase letters surrounded by spaces.                              *
   *   (\d{5}(?:-\d{4})?)    - Capture group for zip code, matches five digits, optionally followed by a                                 *
   *                           hyphen and four more digits.                                                                              *
   ***************************************************************************************************************************************/

  /***************************************************************************************************************************************\
   * Remove special characters from the address because I'm realizing now some people are putting in weird characters for no real reason *
   * other than to make my life difficult                                                                                                *
   ***************************************************************************************************************************************/
  const fullAddress = item.Full_Address__c.value
    .replace(/[^a-zA-Z\d\s,.]/g, "")
    .trim();

  const match = fullAddress.match(addressRegex);

  return removeTypename({
    ...item.Assigned_To__c,
    ...item.auctions_r,
    ..._.omit(item, ["Assigned_To__c", "auctions_r", "__typename"]),
    previousAuctions: {
      auctions: item.Auctions__r?.edges?.map(
        (edge) => edge.node.Auction_TIme__c.value,
        // Hacky fix for flattening this field. If anything is added to be returned here.
        // It will not be returned in the normalized data as we're only returning the Auction_TIme__c.value
        // Example : auctions: ['2024-01-25T16:00:00.000Z', '2024-02-23T16:10:00.000Z']
      ),
      totalCount: item.Auctions__r?.totalCount,
    },
    fullAddress: fullAddress,
    street: match ? match[1].trim() : "",
    city: match ? match[2].trim() : "",
    state: match ? match[3].trim() : "",
    zipcode: match ? match[4].trim() : "",
  });
};

const logAndPass = (message) => (data) => {
  console.log(message, data);
  return data;
};

export const normalizeGraphqlResponse = ({ data, keymap }) => {
  const queryKey = "query";

  const extractListingData = (data) =>
    data?.uiapi?.[queryKey]?.pba__Listing__c?.edges || [];

  const normalizedData = pipe(
    extractListingData,
    (data) => data.map((edge) => edge.node),
    (items) => items.map(flattenItem),
    (flattenedItems) => flattenedItems.map(normalizeKeys(keymap)),
    (normalizedItems) => Object.values(normalizedItems), // Ensure result is an array
  )(data);
  console.log(normalizedData);
  return normalizedData;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
