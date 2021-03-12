import React, { useState } from "react";
import { calculateWinner } from "../helper.js";
import Tablero from "./tablero.jsx";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const celdas = [...current];
    if (winner || celdas[i]) return;
    celdas[i] = xO;
    setHistory([...historyPoint, celdas]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) =>{
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Ir al movimiento #${move}` : "Ir al principio";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Ta Te Ti con Hooks</h1>
      <Tablero celdas={history[stepNumber]} onClick={handleClick} />
      <div className='info-wrapper'>
        <div>
          <h3>Historial</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Ganador: " + winner : "Siguiente jugador: " + xO}</h3>
      </div>
    </>
  );
}
