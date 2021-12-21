import * as React from "react";
import "./Components.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import theme from "./Theme.js";

export default function Board(props) {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const nextValue = calculateNextValue(squares, props);
  const winner = calculateWinner(squares, props);

  const status = calculateStatus(winner, squares, nextValue);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue[0];
    setSquares(squaresCopy);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  function renderSquare(i, winner) {
    return (
      <Button
        variant="outlined"
        onClick={() => selectSquare(i)}
        style={{ width: 85, height: 85, margin: 5 }}
        sx={{
          borderRadius: 30,
          fontSize: 34,
          color: buttoncolor(i, winner)[1],
          bgcolor: buttoncolor(i, winner)[0],
          "&:hover": {
            background: buttoncolor(i, winner)[2],
          },
        }}
      >
        {squares[i]}
      </Button>
    );
  }
  function FormRow(n, winner) {
    return (
      <React.Fragment>
        <Grid>{renderSquare(n, winner)}</Grid>
        <Grid>{renderSquare(n + 1, winner)}</Grid>
        <Grid>{renderSquare(n + 2, winner)}</Grid>
      </React.Fragment>
    );
  }
  function newgame() {
    window.location.reload();
  }
  return (
    <Box
      style={{ width: 300 }}
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className="status" justifyContent="center" alignItems="center">
          <Typography variant="h5">{status}</Typography>
        </Grid>
        <br />
        <br />
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            {FormRow(0, winner)}
          </Grid>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            {FormRow(3, winner)}
          </Grid>
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems="center"
          >
            {FormRow(6, winner)}
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid className="restart" justifyContent="center" alignItems="center">
          <Stack direction="column" spacing={3}>
            <Button color="primary" variant="contained" onClick={restart}>
              Restart
            </Button>

            <Button color="primary" variant="contained" onClick={newgame}>
              New Game
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function calculateStatus(winner, squares, nextValue, End, NextPlayer) {
  return winner
    ? `Winner: ${winner[0]}`
    : squares.every(Boolean)
    ? `The game is drawn :(`
    : `Next player: ${nextValue[1]}`;
}

function calculateNextValue(squares, props) {
  return squares.filter(Boolean).length % 2 === 0
    ? ["X", props.FirstPlayer]
    : ["O", props.SecondPlayer];
}

function buttoncolor(i, winner) {
  if (winner) {
    if (i === winner[1][0] || i === winner[1][1] || i === winner[1][2])
      return [
        theme.palette.primary.main,
        theme.palette.background.paper,
        theme.palette.primary.main,
      ];
  }
  return [
    theme.palette.background.paper,
    theme.palette.primary.main,
    theme.palette.success.contrastText,
  ];
}

function calculateWinner(squares, props) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [
        squares[a] === "X" ? props.FirstPlayer : props.SecondPlayer,
        [a, b, c],
      ];
    }
  }
  return null;
}
