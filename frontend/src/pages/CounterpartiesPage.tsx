import React, { useState } from "react";
import AddCounterpartyModal from "../components/AddCounterpartyModal";

const CounterpartiesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Counterparties</h1>

      <button onClick={openModal} className="open-modal-btn">
        + Add Counterparty
      </button>
      {isModalOpen && <AddCounterpartyModal onClose={closeModal} />}
    </div>
  );
};

export default CounterpartiesPage;
