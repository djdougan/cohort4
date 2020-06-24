import { AppContext } from "../../components/AppContext";
import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner } from "./utils.js";
import "../../App.css";

class Game extends Component {
  static contextType = AppContext;

  handleClick(i) {
    const history = this.context.state.history.slice(
      0,
      this.context.state.stepNumber + 1
    );
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.context.state.xIsNext ? "X" : "O";

    this.context.handleStateChange([
      {
        state: "history",
        newState: history.concat([
          {
            squares: squares,
          },
        ]),
      },
      {
        state: "stepNumber",
        newState: history.length,
      },
      {
        state: "xIsNext",
        newState: !this.context.state.xIsNext,
      },
    ]);
  }

  jumpTo(step) {
    this.context.handleStateChange([
      {
        state: "stepNumber",
        newState: step,
      },
      {
        state: "xIsNext",
        newState: step % 2 === 0,
      },
    ]);
  }

  render() {
    const history = this.context.state.history;
    const current = history[this.context.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move} className="move-listI-item">
          <button className="btn" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.context.state.xIsNext ? "X" : "O");
    }

    return (
      <div
        className="container grid grid-2"
        style={{
          color: this.context.theme[this.context.state.theme].color1,
          background: this.context.theme[this.context.state.theme].background1,
        }}>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
