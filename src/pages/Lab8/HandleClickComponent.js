import React, { useState } from "react";

const HandleClickComponent = () => {
	const [message, setMessage] = useState("Kliknij, aby zmienić tekst");

	const handleClick = () => {
		setMessage("Tekst został zmieniony!");
	};

	return (
		<div className="flex flex-col items-center p-6 space-y-4 border border-gray-300 bg-white rounded-lg shadow-lg max-w-md mx-auto">
			<p className="text-gray-700 text-lg font-medium">{message}</p>
			<button
				onClick={handleClick}
				className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
				Kliknij mnie
			</button>
		</div>
	);
};

export default HandleClickComponent;
