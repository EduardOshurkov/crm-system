export type Counterparty = {
  _id: number;
  name: string;
  address: string;
  production: string;
  price: number;
  phone: string;
  status: "Active" | "Inactive";
};

export type Transaction = {
  _id: number;
  date: Date;
  name: string;
  address: string;
  production: string;
  price: number;
  quantity: number;
  amount: number;
};
