import React, { useState } from "react";
import { AddButton } from "../components/buttons/MuiButtons";

const TransactionsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AddButton onClick={openModal} label="Add Transaction" />
    </div>
  );
};

export default TransactionsPage;
