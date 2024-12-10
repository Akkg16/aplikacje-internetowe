import "./globals.css";
import MainHeader from "./components/main-header/main-header.js";
import styles from "./components/layout/layout.module.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.container}>
				<div className={styles.mainHeaderMargin}>
					<MainHeader />
				</div>
					<main className={styles.mainContent}>{children}</main>
				<footer className={styles.footer}>
					© 2023 Your Company. All Rights Reserved
				</footer>
			</body>
		</html>
	);
}
