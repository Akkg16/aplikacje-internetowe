import React, { useState } from "react";

const ShowImageComponent = () => {
	const [show, setShow] = useState(false);

	const showImage = () => {
		setShow(!show); // Przełącza widoczność obrazu
	};

	return (
		<div className="text-center">
			<button
				onClick={showImage}
				className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
				{show ? "Ukryj obraz" : "Pokaż obraz"}
			</button>
			{show && (
				<img
					src="https://via.placeholder.com/150"
					alt="Obrazek"
					className="mt-4 mx-auto rounded-lg shadow-lg transition-opacity duration-500"
				/>
			)}
		</div>
	);
};

export default ShowImageComponent;
