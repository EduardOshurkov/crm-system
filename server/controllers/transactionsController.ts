import { Request, Response } from "express";
import Transaction from "../models/Transactions";

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("❌ Error creating transaction:", error);
    res.status(500).json({ message: "Error creating transaction", error });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateTransaction = await Transaction.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateTransaction);
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction" });
  }
};

export const deleteTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await Transaction.findByIdAndDelete(id);
    if (!result) {
      res.status(404).json({ message: "Transaction not found" });
    }
    console.log("Received ID:", req.params.id);
    res.status(200).json({ message: `${id} Transaction deleted` });
  } catch (error) {
    console.log("❌ Error deleting transaction:", error);
    res.status(500).json({ message: "Error deleting transaction" });
  }
};
