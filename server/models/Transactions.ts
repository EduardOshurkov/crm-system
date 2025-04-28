import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    production: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
