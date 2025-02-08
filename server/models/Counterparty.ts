import mongoose from "mongoose";

const counterpartySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  production: { type: String, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true },
  status: { type: String, required: true },
});

const Counterparty = mongoose.model("Counterparty", counterpartySchema);
export default Counterparty;
