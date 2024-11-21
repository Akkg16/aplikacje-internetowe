import React from "react";

let globalText = "Kliknij, aby zmienić tekst";
let globalId = "text";

const IncorrectComponent = () => {
    const handleClick = () => {
        globalText = "Tekst został zmieniony!";

        const paragraph = document.getElementById(globalId);
        if (paragraph) {
            paragraph.innerText = globalText;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-yellow-800 text-lg font-medium">Niepoprawny komponent </h2>
			<p className="text-gray-800 text-md font-medium" id={globalId}>{globalText} </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out" onClick={handleClick}>Kliknij mnie!</button>
        </div>
    );
};

export default IncorrectComponent;


