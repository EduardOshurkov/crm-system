import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../types/types";

type TransactionState = {
  list: Transaction[];
};

const initialState: TransactionState = {
  list: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action: PayloadAction<Transaction[]>) => {
      state.list = action.payload;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.list.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((c) => c._id !== action.payload);
    },
  },
});

export const { setTransaction, addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
