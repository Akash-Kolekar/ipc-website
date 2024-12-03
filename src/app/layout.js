export const metadata = {
	title: "Indian Penal Code Explorer",
	description: "A detailed explanation of IPC Sections 82, 83, and 84",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
				<header
					style={{
						// backgroundColor: "#2E3A59",
						backgroundColor: "#2E3A59",
						color: "#fff",
						padding: "1rem",
						textAlign: "center",
					}}
				>
					<h1>Indian Penal Code Explorer</h1>
				</header>
				<main style={{ padding: "2rem" }}>{children}</main>
				<footer
					style={{
						backgroundColor: "#f1f1f1",
						textAlign: "center",
						padding: "1rem",
						marginTop: "2rem",
					}}
				>
					<p>&copy; 2024 IPC Explorer. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
