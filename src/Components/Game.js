import * as React from "react";
import "./Components.css";
import Board from "./Board";
import Container from "@mui/material/Container";
export default function Game(props) {
  return (
    <div className="game" justifyContent="center" alignItems="center">
      <div className="game-board" justifyContent="center" alignItems="center">
        <Container justifyContent="center" alignItems="center">
          <Board
            FirstPlayer={props.FirstPlayer}
            SecondPlayer={props.SecondPlayer}
          />
        </Container>
      </div>
    </div>
  );
}
