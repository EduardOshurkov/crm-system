import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Counterparty } from "../types/types";

const rows: Counterparty[] = [
  {
    id: 1,
    name: "Company A",
    address: "123 Street, City",
    production: "Products A",
    price: 1500,
    phone: "123-456-7890",
    status: "Active",
  },
  {
    id: 2,
    name: "Company B",
    address: "456 Avenue, City",
    production: "Products B",
    price: 2500,
    phone: "987-654-3210",
    status: "Inactive",
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "address", headerName: "Address", width: 200 },
  { field: "production", headerName: "Production", width: 200 },
  { field: "price", headerName: "Price ($)", width: 120 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "status", headerName: "Status", width: 120 },
];

const CounterpartiesTable: React.FC = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
};

export default CounterpartiesTable;
