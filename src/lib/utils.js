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
  const addressComponents = item.Full_Address__c.value.split(/\s+/);

  return removeTypename({
    ...item.Assigned_To__c,
    ...item.auctions_r,
    ..._.omit(item, ["Assigned_To__c", "auctions_r", "__typename"]),
    fullAddress: item.Full_Address__c.value,
    street: addressComponents.slice(0, -2).join(" "),
    city: addressComponents.slice(-2, -1).join(" "),
    state: addressComponents.slice(-1),
    zipcode: addressComponents.slice(-1),
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
