import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lab7 from "./labs/Lab7";

function App() {
	return (
		<Router>
			<div>
				<h1>React Projects</h1>
				<nav>
					<ul>
						<li>
							<Link to="/lab1">Laboratorium 1</Link>
						</li>
						{/* Dodaj kolejne linki do laboratoriów */}
					</ul>
				</nav>
				<Routes>
					<Route path="/lab7" element={<Lab7 />} />
					{/* Dodaj kolejne trasy */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
