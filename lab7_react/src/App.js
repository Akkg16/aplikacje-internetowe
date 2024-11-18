import React from "react";
import { AppProvider } from "./AppContext";
import Card from "./Card";
import AdvancedHooksDemo from "./AdvancedHooksDemo";

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Card
					title="Wielokrotnego użytku"
					content="To jest komponent wielokrotnego użytku!"
				/>
				<AdvancedHooksDemo />
			</div>
		</AppProvider>
	);
}

export default App;
