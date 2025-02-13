"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counterpartyController_1 = require("../controllers/counterpartyController");
const router = express_1.default.Router();
router.get("/", counterpartyController_1.getCounterparties);
router.post("/", counterpartyController_1.createCounterparty);
router.put("/:id", counterpartyController_1.updateCounterparty);
router.delete("/:id", counterpartyController_1.deleteCounterparty);
exports.default = router;
