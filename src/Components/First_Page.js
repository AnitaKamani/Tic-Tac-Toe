import * as React from "react";
import "./Components.css";
import Game from "./Game";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import theme1 from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
function First_Page() {
  return (
    <div className="game" justifyContent="center" alignItems="center">
      <div className="game-board" justifyContent="center" alignItems="center">
        <ThemeProvider theme={theme1}>
          <Container justifyContent="center" alignItems="center">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default First_Page;
