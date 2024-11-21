import React, { useState } from "react";

const CorrectComponent = () => {
	// Stan do przechowywania tekstu
	const [text, setText] = useState("Kliknij, aby zmienić tekst");

	// Funkcja zmieniająca stan
	const handleClick = () => {
		setText("Tekst został zmieniony!");
	};

	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
			<h2 className="text-green-800 text-lg font-medium"> Poprawny komponent </h2>
            <p className="text-gray-800 text-md font-medium">{text}</p>
			<button
				onClick={handleClick}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">
				Kliknij mnie!
			</button>
		</div>
	);
};

export default CorrectComponent;
