import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lab7 from "./labs/Lab7"; // Ścieżka do komponentu dla Lab7

function App() {
	return (
		<Router basename="/aplikacje-internetowe/react_projects">
			{" "}
			{/* Dodajemy basename */}
			<div>
				<h1>React Projects</h1>
				<nav>
					<ul>
						<li>
							<Link to="/lab1">Laboratorium 1</Link>
						</li>
						<li>
							<Link to="/lab7">Laboratorium 7</Link>
						</li>
						{/* Dodaj inne linki do laboratoriów */}
					</ul>
				</nav>
				<Routes>
					<Route path="/lab7" element={<Lab7 />} />
					{/* Dodaj inne trasy dla laboratoriów */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
