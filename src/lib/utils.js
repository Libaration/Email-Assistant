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
    /([\w\s]+)\.\s+([\w\s]+),\s+([A-Z]{2})\s+(\d{5}(?:-\d{4})?)/;
  /**
   * Obligatory comment because I found this regex online and I don't understand it
   * Regex Explanation:
   *   ([\w\s]+)\.         - Capture group for street, matches one or more word characters or spaces, followed by a period.
   *   \s+([\w\s]+),       - Capture group for city, matches one or more word characters or spaces, followed by a comma.
   *   \s+([A-Z]{2})\s+    - Capture group for state, matches two uppercase letters surrounded by spaces.
   *   (\d{5}(?:-\d{4})?)  - Capture group for zip code, matches five digits, optionally followed by a hyphen and four more digits.
   */
  const fullAddress = item.Full_Address__c.value.trim();
  const match = fullAddress.match(addressRegex);

  return removeTypename({
    ...item.Assigned_To__c,
    ...item.auctions_r,
    ..._.omit(item, ["Assigned_To__c", "auctions_r", "__typename"]),
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
