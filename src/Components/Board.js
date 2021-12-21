import * as React from "react";
import "./Components.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import theme from "./Theme.js";

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);

  const status = calculateStatus(winner, squares, nextValue);

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
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

  function restart_button() {
    if (winner || status === "The game is drawn :(") {
      return "New Game";
    }
    return "Restart";
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
          {status}
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
        <Grid
          className="restart"
          item
          justifyContent="center"
          alignItems="center"
        >
          <Button color="primary" variant="contained" onClick={restart}>
            {restart_button()}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

function calculateStatus(winner, squares, nextValue, End) {
  return winner
    ? `Winner: ${winner[0]}`
    : squares.every(Boolean)
    ? `The game is drawn :(`
    : `Next player: ${nextValue}`;
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

function buttoncolor(i, winner) {
  if (winner) {
    if (i === winner[1][0] || i === winner[1][1] || i === winner[1][2])
      return [theme.palette.primary.main, theme.palette.background.paper];
  }
  return [theme.palette.background.paper, theme.palette.primary.main];
}

function calculateWinner(squares) {
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
      return [squares[a], [a, b, c]];
    }
  }
  return null;
}
export default Board;
