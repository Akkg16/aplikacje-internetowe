import React, { useState } from "react";

const HandleMouseOverComponent = () => {
	const [bgColor, setBgColor] = useState("white");

	const handleMouseOver = () => {
		setBgColor("blue");
	};

	const handleMouseOut = () => {
		setBgColor("white");
	};

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`p-6 text-center text-gray-800 rounded-lg transition-colors duration-300 ${
				bgColor === "blue" ? "bg-blue-300" : "bg-white"
			}`}>
			Najedź myszką na ten element
		</div>
	);
};

export default HandleMouseOverComponent;
