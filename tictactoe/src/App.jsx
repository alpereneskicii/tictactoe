import { useState } from "react";
import Square from "./Square";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  ("");

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  function handleClick(i) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    console.log(nextSquares, "nextSquares");
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const nextWinner = calculateWinner(nextSquares);
    const isNextDraw = !nextWinner && nextSquares.every((sq) => sq !== null);

    if (nextWinner || isNextDraw) {
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    }
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  return (
    <>
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="status">
          {winner
            ? `Kazanan: ${winner}`
            : isDraw
            ? "Beraberlik!"
            : `Sıradaki: ${xIsNext ? "❌" : "O"}`}
        </div>
        <div className="board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          message={winner ? `Kazanan: ${winner}` : "Beraberlik!"}
          onClose={() => {
            setShowModal(false);
            restartGame();
          }}
        />
      )}
      <button className="restart" onClick={restartGame}>
        Yeniden Başla
      </button>
    </>
  );
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
