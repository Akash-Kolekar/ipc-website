import Link from "next/link";

export default function Section84() {
	return (
		<div>
			<h2>Section 84 of the IPC</h2>
			<p>
				<strong>What is the law about?</strong> <br />
				Section 84 provides an exemption from criminal responsibility for
				individuals who are of unsound mind and cannot understand the nature or
				consequences of their actions.
			</p>
			<p>
				<strong>Why was it imposed?</strong>
				<br />
				This law acknowledges that mentally incapacitated individuals lack the
				intent or understanding to be held liable for crimes.
			</p>
			<p>
				<strong>What is the punishment?</strong>
				<br />
				There is no punishment, but the individual may be sent to a mental
				health facility for treatment.
			</p>

			<Link href="section-84/more-details-84">
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
