import express from "express";
import {
  getCounterparties,
  createCounterparty,
  updateCounterparty,
  deleteCounterparty,
} from "../controllers/counterpartyController";

const router = express.Router();

router.get("/", getCounterparties);
router.post("/", createCounterparty);
router.put("/:id", updateCounterparty);
router.delete("/:id", deleteCounterparty);

export default router;
