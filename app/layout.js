import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Moja aplikacja",
	description: "Opis aplikacji",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl" className="h-full">
			<body className="flex flex-col min-h-screen h-full bg-gray-50 text-gray-900">
				<Header />
				<main className="flex-grow container mx-auto px-32 py-8 h-full">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
