"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const counterpartyRoutes_1 = __importDefault(require("./routes/counterpartyRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "";
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
    .catch((err) => console.error("❌ MongoDB connection error:", err));
app.use("/api/counterparties", counterpartyRoutes_1.default);
app.get("/", (req, res) => {
    res.send("API is running");
});
