import React from "react";
import { Board } from "./board.jsx";
import { Reset } from "./reset.jsx";

//create your first component
const Home = () => {
	return (
		<div className="page">
			<h1>Tic-Tac-Toe in React!</h1>

			<Board />
		</div>
	);
};

export default Home;
