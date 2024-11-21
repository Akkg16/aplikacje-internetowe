// src/components/ThemedComponent.js
import React, { useContext } from "react";

// Tworzymy kontekst dla motywu
const ThemeContext = React.createContext("light");

const ThemedComponent = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className={`bg-${theme} text-white p-4 rounded`}>
			Aktualny motyw: {theme}
		</div>
	);
};

export { ThemeContext }; // Eksportowanie kontekstu osobno
export default ThemedComponent; // Poprawny export default
