import React, { useState } from "react";

const ChangeStyleComponent = () => {
	const [isClicked, setIsClicked] = useState(false);

	const changeStyle = () => {
		setIsClicked(!isClicked);
	};

	return (
		<div
			className={`${
				isClicked ? "bg-green-500" : "bg-blue-500"
			} p-4 rounded-lg transition-colors duration-300`}>
			<button
				onClick={changeStyle}
				className="text-white py-2 px-6 rounded-lg font-semibold focus:outline-none">
				Kliknij, aby zmienić tło wokół przycisku
			</button>
		</div>
	);
};

export default ChangeStyleComponent;
