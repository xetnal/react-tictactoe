import React, { useState } from "react";
import PropTypes from "prop-types";
export const Square = ({ value, onClick }) => {
	return (
		<div className="square g-0" onClick={onClick}>
			{value}
		</div>
	);
};
