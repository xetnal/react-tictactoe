import React, { useState } from "react";

import { Board } from "./board.jsx";

import { Welcome } from "./welcome.jsx";
import { WelcomeBtn } from "./welcomeBtn.jsx";

//create your first component
const Home = () => {
	const [needsWelcome, setWelcome] = useState(true);

	return (
		<div className="page">
			{needsWelcome ? (
				<div className="theWelcome animate__animated animate__fadeInDownBig">
					<Welcome />
					<WelcomeBtn
						onClick={() => {
							setWelcome();
							console.log(needsWelcome);
						}}
					/>
				</div>
			) : (
				<Board />
			)}
		</div>
	);
};

export default Home;
