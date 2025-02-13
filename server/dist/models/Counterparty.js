"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const counterpartySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    production: { type: String, required: true },
    price: { type: Number, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
}, { versionKey: false, timestamps: true });
const Counterparty = mongoose_1.default.model("Counterparty", counterpartySchema);
exports.default = Counterparty;
