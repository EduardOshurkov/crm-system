import React, { useState } from "react";
import { AddButton } from "../components/buttons/MuiButtons";
import AddTransactionModal from "../components/add-transaction-modal/AddTransactionModal";

const TransactionsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AddButton onClick={openModal} label="Add Transaction" />
      {isModalOpen && <AddTransactionModal onClose={closeModal} />}
    </div>
  );
};

export default TransactionsPage;
