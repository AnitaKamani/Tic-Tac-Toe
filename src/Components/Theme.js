import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2A3C4F",
    },
    secondary: {
      main: "#121212",
    },
    background: {
      default: "#ffffff",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#121212",
    },
    error: {
      main: "#B73135",
    },
    success: {
      main: "#308530",
      contrastText: "#f7f7f8",
    },
  },
  typography: {
    fontFamily: "sans-serif",
    fontSize: 16,
  },
});
export default theme;
