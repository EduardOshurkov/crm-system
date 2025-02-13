import React, { useState } from "react";
import { useCreateCounterpartyMutation } from "../../store/api";
import "./AddCounterpartyModal.scss";

interface AddCounterpartyModalProps {
  onClose: () => void;
}

const AddCounterpartyModal: React.FC<AddCounterpartyModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    production: "",
    price: "",
    phone: "",
    status: "Active",
  });

  const [createCounterparty, { isLoading, isError }] = useCreateCounterpartyMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createCounterparty({
        name: formData.name,
        address: formData.address,
        production: formData.production,
        price: Number(formData.price),
        phone: formData.phone,
        status: formData.status,
      }).unwrap();

      alert("Counterparty created successfully!");
      onClose();
    } catch (error) {
      console.error("Error creating counterparty:", error);
      alert("Failed to create counterparty. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Counterparty</h2>
        <form onSubmit={handleSubmit}>
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
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
        {isError && <p style={{ color: "red" }}>Error occurred while saving.</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddCounterpartyModal;
