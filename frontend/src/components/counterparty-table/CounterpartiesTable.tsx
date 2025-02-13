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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Dialog open={isEditOpen} onClose={handleCloseEdit}>
        <DialogTitle>Edit Counterparty</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={editData?.name || ""}
            onChange={handleChange}
          />
          <TextField
            name="address"
            label="Address"
            fullWidth
            value={editData?.address || ""}
            onChange={handleChange}
          />
          <TextField
            name="production"
            label="Production"
            fullWidth
            value={editData?.production}
            onChange={handleChange}
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            fullWidth
            value={editData?.price}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            label="Phone"
            fullWidth
            value={editData?.phone}
            onChange={handleChange}
          />
          <TextField
            name="status"
            label="Status"
            fullWidth
            value={editData?.status}
            onChange={handleChange}
          />

          <DialogActions>
            <Button onClick={handleCloseEdit} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CounterpartiesTable;
