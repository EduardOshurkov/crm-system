import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customPurple: {
      main: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    customPurple?: {
      main: string;
      contrastText: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: "#5932ea",
    },
    customPurple: {
      main: "#5932ea",
      contrastText: "#fff",
    },
  },
});

export default theme;
