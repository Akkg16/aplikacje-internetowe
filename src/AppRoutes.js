import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Strona404 } from "./pages/Strona404";
import { Lab7 } from "./pages/Lab7";
import { Lab8 } from "./pages/Lab8";

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/aplikacje-internetowe/" element={<Home />} />
				<Route path="/aplikacje-internetowe/Lab7" element={<Lab7 />} />
				<Route path="/aplikacje-internetowe/Lab8" element={<Lab8 />} />
				<Route path="/aplikacje-internetowe/*" element={<Strona404 />} />
			</Routes>
		</Router>
	);
};
