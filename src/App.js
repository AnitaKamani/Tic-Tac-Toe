import "./App.css";
import React from "react";
import First_Page from "./Components/First_Page";
import theme1 from "./Components/Theme.js";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  return (
    <div className="App" justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme1}>
        <First_Page />
      </ThemeProvider>
    </div>
  );
}

export default App;
