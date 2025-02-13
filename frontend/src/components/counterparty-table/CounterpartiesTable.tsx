import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns";
import {
  useGetCounterpartiesQuery,
  useDeleteCounterpartyMutation,
  useUpdateCounterpartyMutation,
} from "../../store/api";
import { Counterparty } from "../../types/types";
import { DeleteButton, EditButton } from "../buttons/MuiButtons";
import CounterpartyEditModal from "../counterparty-modal/edit-counterparty-modal/CounterpartyEditModal";

const CounterpartiesTable: React.FC = () => {
  const { data: rows = [], isLoading, isError } = useGetCounterpartiesQuery();
  const [deleteCounterparty] = useDeleteCounterpartyMutation();
  const [updateCounterparty] = useUpdateCounterpartyMutation();

  const [editData, setEditData] = useState<Counterparty | null>(null);
  const [isEditOpen, setEditOpen] = useState(false);

  const handleDelete = async (_id: string) => {
    if (window.confirm("Are you sure you want to delete this counterparty?")) {
      console.log("Deleting ID:", _id);
      try {
        await deleteCounterparty({ _id }).unwrap();
        console.log("Counterparty deleted successfully");
      } catch (error) {
        console.error("Error deleting counterparty:", error);
      }
    }
  };

  const handleEdit = (row: Counterparty) => {
    setEditData(row);
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
    setEditData(null);
  };

  const handleSaveEdit = async () => {
    if (editData) {
      await updateCounterparty({ id: editData._id, updateData: editData });
      handleCloseEdit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [e.target.name]: e.target.type === "number" ? e.target.value : e.target.value,
      };
    });
  };

  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "production", headerName: "Production", flex: 1 },
    { field: "price", headerName: "Price ($)", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      valueFormatter: (params) => {
        const date = params;
        return date ? format(new Date(date), "dd/MM/yyyy") : "";
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <>
          <EditButton onClick={() => handleEdit(params.row)} />
          <DeleteButton onClick={() => handleDelete(params.row._id)} />
        </>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
      />
      <CounterpartyEditModal
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        onSave={handleSaveEdit}
      >
        <h2>Edit Counterparty</h2>
        <input name="name" placeholder="Name" value={editData?.name} onChange={handleChange} />
        <input
          name="address"
          placeholder="Address"
          value={editData?.address}
          onChange={handleChange}
        />
        <input
          name="production"
          placeholder="Production"
          value={editData?.production}
          onChange={handleChange}
        />
        <input name="price" placeholder="Price" value={editData?.price} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={editData?.phone} onChange={handleChange} />
        <select name="status" value={editData?.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </CounterpartyEditModal>
    </div>
  );
};

export default CounterpartiesTable;
