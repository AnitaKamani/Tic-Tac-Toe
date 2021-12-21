import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#30475E",
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
      main: "#F05454",
    },
    success: {
      main: "#308530",
    },
  },
});
export default theme;
