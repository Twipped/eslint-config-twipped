/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  Order,
  OrderAccount,
  OrderElement,
  OrderTracking
} from './structures/commonConverterTypes';

const createOrderAccount = (
  account: any,
  affiliate: string,
  flow: string
): OrderAccount => ({
  lead_uuid: account.leadId || '',
  first_name: account.firstName,
  middle_name: account.middleName,
  last_name: account.lastName,
  suffix: account.suffix,
  email: account.email,
  phone: account.phone,
  password: account.password || '',
  international: false,
  signup_client: 'web_v2',
  card_token: account.cardToken || '',
  custom_flow: flow,
  entry_point_group: affiliate,
  address_1: '',
  address_2: '',
  city: '',
  county: '',
  state: '',
  country: '',
  zip: '',
  lat: 0,
  lng: 0,
  address_is_google: false,
  terms_of_service_name: 'ZenBusinessTOS',
  terms_of_service_version: 3
});

/**
 * Builds a formation order
 * @param args
 * @returns
 */
export const buildFormationOrder = (args: {
  account: any;
  visitUUID: string;
  orderTracking: OrderTracking;
  config: {
    flow?: string;
    affiliate?: string;
    variation?: string;
    segment?: string;
    version?: string;
  };
  orderData: Array<OrderElement>;
  orderItems: Array<OrderElement>;
}): Order => {
  const {
    account, visitUUID, orderTracking, config, orderData, orderItems
  } = args;

  return {
    account: account.isAuthenticated
      ? account.accountUuid || ''
      : createOrderAccount(account, config.affiliate, ''),
    order: {
      order_status: 'incomplete',
      order_data: orderData,
      order_items: orderItems,
      visit_uuid: visitUUID,
      order_tracking: {
        flow_name: orderTracking.flow,
        device_type: orderTracking.deviceType,
        purchase_source: orderTracking.purchaseSource,
        affiliate_name: config.affiliate,
        flow_type: config.flow,
        flow_variation: config.variation,
        flow_segment: config.segment,
        flow_version:
          config.version ?? process.env.RELEASE_VERSION ?? process.env.RELEASE_TAG ?? 'unset'
      }
    }
  };
};
