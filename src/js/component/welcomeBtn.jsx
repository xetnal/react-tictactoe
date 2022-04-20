import React from "react";
import PropTypes from "prop-types";
export const WelcomeBtn = ({ onClick }) => {
	return (
		<button className="readyBtn" onClick={onClick}>
			{" "}
			Yeah! LETS GO!
		</button>
	);
};
