import React from "react";
import { Button, IconButton } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import theme from "../../mui/MuiTheme";
import { ThemeProvider } from "@emotion/react";

interface ButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
}

const AddButton: React.FC<ButtonProps> = ({ onClick, label, icon = <Add /> }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="customPurple" startIcon={icon} onClick={onClick}>
        {label}
      </Button>
    </ThemeProvider>
  );
};

const EditButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        onClick={onClick}
        sx={{
          backgroundColor: theme.palette.customPurple.main,
          color: theme.palette.customPurple.contrastText,
        }}
      >
        <Edit />
      </IconButton>
    </ThemeProvider>
  );
};

const DeleteButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <IconButton
        onClick={onClick}
        sx={{
          backgroundColor: theme.palette.customPurple.main,
          color: theme.palette.customPurple.contrastText,
          marginLeft: "5px",
        }}
      >
        <Delete />
      </IconButton>
    </ThemeProvider>
  );
};

export { AddButton, EditButton, DeleteButton };
