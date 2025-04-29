import React, { useState } from "react";
import { useCreateTransactionMutation } from "../../store/transactionStore/transactionApi";

interface AddTransactionModalProps {
  onClose: () => void;
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    address: "",
    production: "",
    price: "",
    quantity: "",
    amount: "",
  });

  const [createTransaction, { isLoading, isError }] = useCreateTransactionMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createTransaction({
        date: new Date(formData.date),
        name: formData.name,
        address: formData.address,
        production: formData.production,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        amount: Number(formData.price) * Number(formData.quantity),
      });

      alert("Transaction created successfully!");
      onClose();
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("Failed to create transaction. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="production"
            placeholder="Production"
            value={formData.production}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <button className="modal-button close" type="button" onClick={onClose}>
            Close
          </button>
          <button className="modal-button save" type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
        {isError && <p style={{ color: "red" }}>Error occurred while saving.</p>}
      </div>
    </div>
  );
};

export default AddTransactionModal;
