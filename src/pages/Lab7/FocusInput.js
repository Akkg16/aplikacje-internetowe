// src/components/FocusInput.js
import React, { useRef } from "react";

const FocusInput = () => {
	const inputRef = useRef();

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input
				ref={inputRef}
				type="text"
				placeholder="Kliknij przycisk, aby skupić się na tym polu"
				className="p-2 border rounded text-gray-500" // Klasa do szarego tekstu
			/>
			<button
				className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 m-2"
				onClick={focusInput}>
				Skup się na polu
			</button>
		</div>
	);
};

export default FocusInput;
