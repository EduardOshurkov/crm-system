import React, { useState } from "react";
import AddCounterpartyModal from "../components/counterparty-modal/add-counterparty-modal/AddCounterpartyModal";
import CounterpartiesTable from "../components/counterparty-table/CounterpartiesTable";
import { AddButton } from "../components/buttons/MuiButtons";

const CounterpartiesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <AddButton onClick={openModal} label="Add Counterparty" />
      <CounterpartiesTable />
      {isModalOpen && <AddCounterpartyModal onClose={closeModal} />}
    </div>
  );
};

export default CounterpartiesPage;
