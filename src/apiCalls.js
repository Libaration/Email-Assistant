import dayjs from 'dayjs';
import dayjsBusinessDays from 'dayjs-business-days';
dayjs.extend(dayjsBusinessDays);

export const searchAddress = async (address) => {
  const response = await fetch('https://www.ashlandauction.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'get_auctions',
      query:
        'query get_auctions($pagination: AuctionPaginationInput, $filter: AuctionFilterInput, $search: AuctionSearchInput, $order: AuctionOrderInput) {\n  auctions(pagination: $pagination, filter: $filter, search: $search, order: $order) {\n    total\n    auctions {\n      auction_id\n      type\n      is_simulcast\n      title\n      highlights {\n        attachment_id\n        cached_assets {\n          variant\n          url\n          __typename\n        }\n        asset_metadata {\n          alt\n          __typename\n        }\n        __typename\n      }\n      description\n      preview\n      preview_plain\n      auction_status\n      start_time\n      end_time\n      simulcast_started_at\n      simulcast_ended_at\n      paused_at\n      image_tag\n      link_url\n      link_text\n      enable_landing\n      real_estate_info {\n        asking\n        __typename\n      }\n      real_estate_dynamic_fields {\n        dynamic_field_id\n        type\n        label\n        options\n        data\n        __typename\n      }\n      auction_location {\n        line_1\n        line_2\n        city\n        state_name\n        zip_code\n        coordinates\n        __typename\n      }\n      lots(pagination: {page: 1, pageSize: 1}) {\n        total\n        lots {\n          auction_lot_id\n          title\n          description\n          is_watched\n          starting_bid\n          winning_bid_amount\n          show_reserve_status\n          reserve_met\n          end_time\n          dynamic_fields {\n            dynamic_field_id\n            label\n            data\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  hasAuctionCategories: setting(setting_key: "auctions.super_admin_settings.allow_auction_categories") {\n    setting\n    __typename\n  }\n  enableImageTag: setting(setting_key: "auctions.super_admin_settings.enable_image_tag") {\n    setting\n    __typename\n  }\n  auctionListingView: setting(setting_key: "auctions.super_admin_settings") {\n    setting\n    __typename\n  }\n  dynamicFields(filter: {allow_front_filter: true}, pagination: {page: 1, pageSize: 999}) {\n    fields {\n      dynamic_field_id\n      type\n      label\n      options\n      __typename\n    }\n    __typename\n  }\n}\n',
      variables: {
        search: {
          text: address,
        },

        order: {
          column: 'end_time',
          direction: 'des',
        },
      },
    }),
  });
  const responseJSON = await response.json();
  return await responseJSON.data.auctions.auctions;
};
export const fetchRecent = async () => {
  const response = await fetch('https://www.ashlandauction.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'get_auctions',
      query:
        'query get_auctions($pagination: AuctionPaginationInput, $filter: AuctionFilterInput, $search: AuctionSearchInput, $order: AuctionOrderInput) {\n  auctions(pagination: $pagination, filter: $filter, search: $search, order: $order) {\n    total\n    auctions {\n      auction_id\n      type\n      is_simulcast\n      title\n      highlights {\n        attachment_id\n        cached_assets {\n          variant\n          url\n          __typename\n        }\n        asset_metadata {\n          alt\n          __typename\n        }\n        __typename\n      }\n      description\n      preview\n      preview_plain\n      auction_status\n      start_time\n      end_time\n      simulcast_started_at\n      simulcast_ended_at\n      paused_at\n      image_tag\n      link_url\n      link_text\n      enable_landing\n      real_estate_info {\n        asking\n        __typename\n      }\n      real_estate_dynamic_fields {\n        dynamic_field_id\n        type\n        label\n        options\n        data\n        __typename\n      }\n      auction_location {\n        line_1\n        line_2\n        city\n        state_name\n        zip_code\n        coordinates\n        __typename\n      }\n      lots(pagination: {page: 1, pageSize: 1}) {\n        total\n        lots {\n          auction_lot_id\n          title\n          description\n          is_watched\n          starting_bid\n          winning_bid_amount\n          show_reserve_status\n          reserve_met\n          end_time\n          dynamic_fields {\n            dynamic_field_id\n            label\n            data\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  hasAuctionCategories: setting(setting_key: "auctions.super_admin_settings.allow_auction_categories") {\n    setting\n    __typename\n  }\n  enableImageTag: setting(setting_key: "auctions.super_admin_settings.enable_image_tag") {\n    setting\n    __typename\n  }\n  auctionListingView: setting(setting_key: "auctions.super_admin_settings") {\n    setting\n    __typename\n  }\n  dynamicFields(filter: {allow_front_filter: true}, pagination: {page: 1, pageSize: 999}) {\n    fields {\n      dynamic_field_id\n      type\n      label\n      options\n      __typename\n    }\n    __typename\n  }\n}\n',
      variables: {
        filter: {
          type: ['online', 'live'],
          auction_status: [100, 200],
          is_visible_on_front: true,
        },
        pagination: {
          page: 1,
          pageSize: parseInt(localStorage.getItem('maxAuctions')) || 10,
        },
        order: {
          column: 'end_time',
          direction: 'asc',
        },
      },
    }),
  });
  const responseJSON = await response.json();
  return await responseJSON.data.auctions.auctions;
};

export const fetchNewsletter = async () => {
  const response = await fetch('https://www.ashlandauction.com/api', {
    headers: {
      'content-type': 'application/json',
    },
    referrer:
      'https://www.ashlandauction.com/auctions?page=1&pageSize=120&search=&sort=null&currentDisplay=calendar&websiteDisplay%5B0%5D=tile&websiteDisplay%5B1%5D=map&websiteDisplay%5B2%5D=calendar&canToggle=true',
    body: '{"operationName":"get_auctions","variables":{"pagination":{"page":1,"pageSize":120},"filter":{"type":["online","live"],"auction_status":[100,200],"is_visible_on_front":true,"limit_highlights":true},"search":{"text":""},"order":{"column":"end_time","direction":"asc"}},"query":"query get_auctions($pagination: AuctionPaginationInput, $filter: AuctionFilterInput, $search: AuctionSearchInput, $order: AuctionOrderInput) {\\n  auctions(pagination: $pagination, filter: $filter, search: $search, order: $order) {\\n    total\\n    auctions {\\n      auction_id\\n      type\\n      is_simulcast\\n      title\\n      highlights {\\n        attachment_id\\n        cached_assets {\\n          variant\\n          url\\n          __typename\\n        }\\n        asset_metadata {\\n          alt\\n          __typename\\n        }\\n        __typename\\n      }\\n      description\\n      preview\\n      preview_plain\\n      auction_status\\n      start_time\\n      end_time\\n      simulcast_started_at\\n      simulcast_ended_at\\n      paused_at\\n      image_tag\\n      link_url\\n      link_text\\n      enable_landing\\n      real_estate_info {\\n        asking\\n        __typename\\n      }\\n      real_estate_dynamic_fields {\\n        dynamic_field_id\\n        type\\n        label\\n        options\\n        data\\n        __typename\\n      }\\n      auction_location {\\n        line_1\\n        line_2\\n        city\\n        state_name\\n        zip_code\\n        coordinates\\n        __typename\\n      }\\n      lots(pagination: {page: 1, pageSize: 1}) {\\n        total\\n        lots {\\n          auction_lot_id\\n          title\\n          description\\n          is_watched\\n          starting_bid\\n          winning_bid_amount\\n          show_reserve_status\\n          pending_confirmation\\n          reserve_met\\n          end_time\\n          dynamic_fields {\\n            dynamic_field_id\\n            label\\n            data\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  hasAuctionCategories: setting(setting_key: \\"auctions.super_admin_settings.allow_auction_categories\\") {\\n    setting\\n    __typename\\n  }\\n  enableImageTag: setting(setting_key: \\"auctions.super_admin_settings.enable_image_tag\\") {\\n    setting\\n    __typename\\n  }\\n  auctionListingView: setting(setting_key: \\"auctions.super_admin_settings\\") {\\n    setting\\n    __typename\\n  }\\n  dynamicFields(filter: {allow_front_filter: true}, pagination: {page: 1, pageSize: 999}) {\\n    fields {\\n      dynamic_field_id\\n      type\\n      label\\n      options\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
    method: 'POST',
  });
  const responseJSON = await response.json();
  const auctions = await responseJSON.data.auctions.auctions;
  const daysNeeded = Array.from(
    { length: parseInt(localStorage.getItem('maxDays')) + 1 || 4 },
    (_, i) => dayjs().businessDaysAdd(i).format('ddd, MMMM DD')
  );

  const groupedAuctions = auctions.reduce((acc, auction) => {
    if (!daysNeeded.includes(dayjs(auction.end_time).format('ddd, MMMM DD')))
      return acc;

    const date = dayjs(auction.end_time).format('MMMM DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(auction);
    return acc;
  }, {});
  return await groupedAuctions;
};
