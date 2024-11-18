import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importuj komponenty dla różnych stron
import LabPage7 from "./Lab7/LabPage7";

function App() {
	return (
		<Router>
			<div>
				<h1>Witaj w moim projekcie React!</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Strona Główna</Link>
						</li>
						<li>
							<Link to="/lab7">Laboratorium 7</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/lab7" element={<LabPage7 />} />
				</Routes>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div>
			<h2>Strona Główna</h2>
			<p>Wybierz laboratorium, aby zobaczyć szczegóły zadań.</p>
		</div>
	);
}

export default App;
