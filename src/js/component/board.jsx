import React, { useState } from "react";
import { calculateWinner, isDraw } from "../index.js";
import { Reset } from "./reset.jsx";
import { Square } from "./square.jsx";

export const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);

	const winner = calculateWinner(squares);
	console.log(squares);
	const renderReset = () => {
		return (
			<Reset
				onClick={() => {
					setSquares(Array(9).fill(null));
					setIsXNext(true);
				}}
			/>
		);
	};
	const renderSquare = (i) => {
		return (
			<Square
				value={squares[i]}
				onClick={() => {
					if (squares[i] != null || winner != null) {
						return;
					}

					console.log("clicked!");
					let nextSquares = [...squares];
					nextSquares[i] = isXNext ? "X" : "O";
					setSquares(nextSquares);
					setIsXNext(!isXNext);
				}}
			/>
		);
	};
	const getStatus = () => {
		if (winner) {
			return "Winner: " + winner;
		} else if (isDraw(squares)) {
			return "Draw!";
		} else {
			return "Next Player: " + (isXNext ? "X" : "O");
		}
	};
	return (
		<div className="gameContainer g-0 ">
			<h1 className="title animate__animated animate__fadeInDown">
				Tic-Tac-Toe in React!
			</h1>
			<h2 className="subtitle text-center animate__animated animate__fadeInRight">
				{getStatus()}
			</h2>
			<div className="resetContainer text-center animate__animated animate__fadeInLeft">
				{renderReset()}
			</div>

			<div className="board mx-auto animate__animated animate__fadeInUp">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}

				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}

				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
};
