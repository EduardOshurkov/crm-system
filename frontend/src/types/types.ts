export type Counterparty = {
  _id: number;
  name: string;
  address: string;
  production: string;
  price: number;
  phone: string;
  status: "Active" | "Inactive";
};
