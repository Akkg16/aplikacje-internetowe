import React, { useState } from "react";

const UploadFileComponent = () => {
	const [fileName, setFileName] = useState("");

	const uploadFile = (e) => {
		setFileName(e.target.files[0]?.name);
	};

	return (
		<div className="p-8 max-w-sm mx-auto text-center space-y-6 bg-white rounded-lg shadow-lg">
			{/* Ukrywamy domyślny przycisk, stylizujemy go na nowoczesny */}
			<label className="block mx-auto text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-3 px-6 cursor-pointer font-semibold transition-colors duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none">
				<input type="file" onChange={uploadFile} className="hidden" />
				Wybierz plik
			</label>

			{fileName && (
				<p className="text-lg font-medium text-gray-800 mt-4">
					Wybrany plik: <span className="font-semibold">{fileName}</span>
				</p>
			)}
		</div>
	);
};

export default UploadFileComponent;
