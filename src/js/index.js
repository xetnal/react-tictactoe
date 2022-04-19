//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
export const calculateWinner = (squares) => {
	const possibleLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < possibleLines.length; i++) {
		let [a, b, c] = possibleLines[i];
		if (squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};
export const isDraw = (squares) => {
	for (let i = 0; i < squares.length; i++) {
		if (squares[i] === null) {
			return false;
		}
	}
	return true;
};
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
