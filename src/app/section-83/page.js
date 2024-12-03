import Link from "next/link";

export default function Section83() {
	return (
		<div>
			<h2>Section 83 of the IPC</h2>
			<p>
				<strong>What is the law about?</strong>
				<br />
				Section 83 states:{" "}
				<i>
					"Nothing is an offence which is done by a child above seven years of
					age and under twelve, who has not attained sufficient maturity of
					understanding to judge the nature and consequences of his conduct."
				</i>
			</p>
			<p>
				<strong>Why was it imposed?</strong>
				<br />
				This law recognizes that children between the ages of seven and twelve
				are developing their ability to understand right and wrong.
			</p>
			<p>
				<strong>What is the punishment?</strong>
				<br />
				If the child is found immature, they are exempt from punishment. If they
				are deemed mature enough, liability is determined based on the offense,
				but punishment is usually lenient.
			</p>
			<Link href="section-83/more-details-83">
				<div
					style={{
						width: "fit-content",
						height: "fit-content",
						backgroundColor: "#f1f1f1",
						padding: "3px",
						border: "1px solid #ccc",
						borderRadius: "2px",
						cursor: "pointer",
						fontSize: "0.8rem",
					}}
				>
					<h3>More details</h3>
				</div>
			</Link>
		</div>
	);
}
