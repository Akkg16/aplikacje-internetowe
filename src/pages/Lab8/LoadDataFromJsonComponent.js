import React, { useState } from "react";

const LoadDataFromJsonComponent = () => {
	const [data, setData] = useState(null);

	const loadDataFromJson = () => {
		const jsonData = {
			name: "Jan Kowalski",
			age: 30,
		};
		setData(jsonData); // Ustawiamy dane w stanie
	};

	return (
		<div className="p-6 text-center">
			<button
				onClick={loadDataFromJson}
				className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
				Załaduj dane
			</button>
			{data && (
				<div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white text-black">
					<p className="text-lg font-semibold">
						Imię: <span className="font-normal">{data.name}</span>
					</p>
					<p className="text-lg font-semibold">
						Wiek: <span className="font-normal">{data.age}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default LoadDataFromJsonComponent;
