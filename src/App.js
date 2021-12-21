import "./App.css";
import React from "react";
import First_Page from "./Components/First_Page";
import TopBar from "./Components/TopBar";
import theme1 from "./Components/Theme.js";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  return (
    <div className="Game" justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme1}>
        <TopBar />
        <First_Page />
      </ThemeProvider>
    </div>
  );
}
export default App;
