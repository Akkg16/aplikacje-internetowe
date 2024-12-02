import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Strona404 } from "./pages/Strona404";
import { Lab7 } from "./pages/Lab7";
import { Lab8 } from "./pages/Lab8";
import { Lab9 } from "./pages/Lab9";
import About from "./pages/Lab9/About";
import Interests from "./pages/Lab9/Interests";
import Favorite from "./pages/Lab9/Favorite";
import Contact from "./pages/Lab9/Contact";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/lab7" element={<Lab7 />} />
			<Route path="/lab8" element={<Lab8 />} />
			<Route path="/lab9" element={<Lab9 />}>
				<Route path="about" element={<About />} />
				<Route path="interests" element={<Interests />} />
				<Route path="favorite" element={<Favorite />} />
				<Route path="contact" element={<Contact />} />
			</Route>
			<Route path="*" element={<Strona404 />} />
		</Routes>
	);
};
