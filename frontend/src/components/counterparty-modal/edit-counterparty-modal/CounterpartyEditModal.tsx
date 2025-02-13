import React from "react";
import "./CounterpartyEditModal.scss";

interface CounterpartyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

const CounterpartyEditModal: React.FC<CounterpartyModalProps> = ({
  isOpen,
  onClose,
  onSave,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
        <div className="modal-actions">
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button save" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterpartyEditModal;
