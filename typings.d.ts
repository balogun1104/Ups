type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  Address: String;
  City: String;
  Lat: number;
  Lng: number;
  carrier: String;
  createdAt: Date;
  shippingCost: Int;
  shippingCost: number;
  trackingId: String;
  trackingItems: TrackingItems;
  
};
