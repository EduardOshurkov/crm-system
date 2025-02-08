import { Request, Response } from "express";
import Counterparty from "../models/Counterparty";

export const getCounterparties = async (req: Request, res: Response) => {
  try {
    const counterparties = await Counterparty.find();
    res.status(200).json(counterparties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createCounterparty = async (req: Request, res: Response) => {
  try {
    const newCounterparty = new Counterparty(req.body);
    await newCounterparty.save();
    res.status(201).json(newCounterparty);
  } catch (error) {
    console.error("❌ Error creating counterparty:", error);
    res.status(500).json({ message: "Error creating counterparty", error });
  }
};

export const updateCounterparty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateCounterparty = await Counterparty.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updateCounterparty);
  } catch (error) {
    res.status(500).json({ message: "Error updating counterparty" });
  }
};

export const deleteCounterparty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Counterparty.findByIdAndDelete(id);
    res.status(200).json({ message: "Counterparty deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting counterparty" });
  }
};
