"use client";
// import Link from "next/link";

// export default function HomePage() {
// 	return (
// 		<div>
// 			<h2>Welcome to IPC Explorer</h2>
// 			<p>
// 				Learn about the legal framework of the Indian Penal Code (IPC), focusing
// 				on Sections 73 to 84.
// 			</p>
// 			<div
// 				style={{
// 					display: "flex",
// 					gap: "1rem",
// 					justifyContent: "space-around",
// 					marginTop: "2rem",
// 				}}
// 			>
// 				<Link href="/section-73">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 73</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-74">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 74</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-75">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 75</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-76">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 76</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-77">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 77</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-78">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 78</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-79">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 79</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-80">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 80</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-81">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 81</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-82">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 82</h3>
// 						<p>Children under 7 years are exempt from liability.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-83/">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 83</h3>
// 						<p>Limited liability for children aged 7-12.</p>
// 					</div>
// 				</Link>
// 				<Link href="/section-84">
// 					<div
// 						style={{
// 							padding: "1rem",
// 							border: "1px solid #ccc",
// 							borderRadius: "5px",
// 							cursor: "pointer",
// 						}}
// 					>
// 						<h3>Section 84</h3>
// 						<p>Exemption for individuals of unsound mind.</p>
// 					</div>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

import Link from "next/link";

export default function HomePage() {
	return (
		<div style={{ padding: "2rem", fontFamily: "'Roboto', sans-serif" }}>
			<h1
				style={{ textAlign: "center", marginBottom: "1rem", color: "#2c3e50" }}
			>
				Welcome to IPC Explorer
			</h1>
			<p
				style={{
					textAlign: "center",
					marginBottom: "2rem",
					fontSize: "1.2rem",
				}}
			>
				Dive into the Indian Penal Code (IPC), focusing on Sections 73 to 84,
				and understand their implications.
			</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
					gap: "1.5rem",
					justifyContent: "center",
					padding: "1rem",
				}}
			>
				{Array.from({ length: 12 }, (_, i) => {
					const sectionNumber = 73 + i;
					const descriptions = {
						73: "Punishment of simple imprisonment in default of fine.",
						74: "Limit of solitary confinement.",
						75: "Enhanced punishment for certain repeat offenders.",
						76: "Act done by mistake of fact believing to be justified by law.",
						77: "Act of judge acting judicially.",
						78: "Act done pursuant to the judgment or order of a court.",
						79: "Act justified by law.",
						80: "Accident in doing a lawful act.",
						81: "Act likely to cause harm but done without criminal intent.",
						82: "Children under 7 years are exempt from liability.",
						83: "Limited liability for children aged 7-12.",
						84: "Exemption for individuals of unsound mind.",
					};
					return (
						<Link href={`/section-${sectionNumber}`} key={sectionNumber}>
							<div
								style={{
									padding: "1.5rem",
									border: "1px solid #d1d1d1",
									borderRadius: "8px",
									backgroundColor: "#ffffff",
									cursor: "pointer",
									textAlign: "center",
									transition: "transform 0.2s ease, box-shadow 0.2s ease",
									boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.transform = "scale(1.05)";
									e.currentTarget.style.boxShadow =
										"0 4px 8px rgba(0, 0, 0, 0.15)";
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow =
										"0 2px 4px rgba(0, 0, 0, 0.1)";
								}}
							>
								<h3 style={{ fontSize: "1.3rem", color: "#34495e" }}>
									Section {sectionNumber}
								</h3>
								<p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
									{descriptions[sectionNumber]}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
