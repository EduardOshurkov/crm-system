"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCounterparty = exports.updateCounterparty = exports.createCounterparty = exports.getCounterparties = void 0;
const Counterparty_1 = __importDefault(require("../models/Counterparty"));
const getCounterparties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const counterparties = yield Counterparty_1.default.find();
        res.status(200).json(counterparties);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});
exports.getCounterparties = getCounterparties;
const createCounterparty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCounterparty = new Counterparty_1.default(req.body);
        yield newCounterparty.save();
        res.status(201).json(newCounterparty);
    }
    catch (error) {
        console.error("❌ Error creating counterparty:", error);
        res.status(500).json({ message: "Error creating counterparty", error });
    }
});
exports.createCounterparty = createCounterparty;
const updateCounterparty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateCounterparty = yield Counterparty_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateCounterparty);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating counterparty" });
    }
});
exports.updateCounterparty = updateCounterparty;
const deleteCounterparty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Counterparty_1.default.findByIdAndDelete(id);
        if (!result) {
            res.status(404).json({ message: "Counterparty not found" });
        }
        console.log("Received ID:", req.params.id);
        res.status(200).json({ message: `${id} Counterparty deleted` });
    }
    catch (error) {
        console.log("❌ Error deleting counterparty:", error);
        res.status(500).json({ message: "Error deleting counterparty" });
    }
});
exports.deleteCounterparty = deleteCounterparty;
