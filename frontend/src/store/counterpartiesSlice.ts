import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Counterparty = {
  id: number;
  name: string;
  address: string;
  production: string;
  price: number;
  phone: string;
  status: "Active" | "Inactive";
};

type CounterpartiesState = {
  list: Counterparty[];
};

const initialState: CounterpartiesState = {
  list: [],
};

const counterpartiesSlice = createSlice({
  name: "counterparties",
  initialState,
  reducers: {
    setCounterparties: (state, action: PayloadAction<Counterparty[]>) => {
      state.list = action.payload;
    },
    addCounterparty: (state, action: PayloadAction<Counterparty>) => {
      state.list.push(action.payload);
    },
    removeCounterparty: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
});

export const { setCounterparties, addCounterparty, removeCounterparty } =
  counterpartiesSlice.actions;
export default counterpartiesSlice.reducer;
