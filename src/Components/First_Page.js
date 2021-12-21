import * as React from "react";
import "./Components.css";
import Game from "./Game";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import theme from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

export default function First_Page() {
  const [clicked, setclicked] = useState(false);
  const UpdateNames = () => {
    setclicked(true);
  };
  const TextChangeFirstPlayer = (e) => {
    setFirstPlayer(e.target.value);
  };
  const TextChangeSecondPlayer = (e) => {
    setSecondPlayer(e.target.value);
  };
  const [FirstPlayer, setFirstPlayer] = useState("x");
  const [SecondPlayer, setSecondPlayer] = useState("o");

  return (
    <container calss="Game" justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme}>
        {clicked === true && (
          <Game FirstPlayer={FirstPlayer} SecondPlayer={SecondPlayer} />
        )}
        {clicked === false && (
          <Container
            className="game"
            justifyContent="center"
            alignItems="center"
            style={{ width: 300 }}
          >
            <Box
              className="game"
              style={{ width: 200 }}
              sx={{ flexGrow: 1 }}
              justifyContent="center"
              alignItems="center"
            >
              <Stack direction="column" spacing={5}>
                <TextField
                  id="FirstPlayer"
                  onChange={TextChangeFirstPlayer}
                  label="First Player"
                />
                <TextField
                  id="SecondPlayer"
                  onChange={TextChangeSecondPlayer}
                  label="Second Player"
                />
                <Button
                  color="primary"
                  variant="contained"
                  style={{ width: 100 }}
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => UpdateNames()}
                >
                  Start
                </Button>

                <Container
                  className="footer"
                  justifyContent="center"
                  alignItems="center"
                  text="center"
                  style={{ width: 300 }}
                  sx={{ paddingTop: 3 }}
                >
                  <p>Tic Tac Toe Project by Fatemeh Kamani</p>
                </Container>
              </Stack>
            </Box>
          </Container>
        )}
      </ThemeProvider>
    </container>
  );
}