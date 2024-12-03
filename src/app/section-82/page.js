import Link from "next/link";

export default function Section82() {
	return (
		<div>
			<h2>Section 82 of the IPC</h2>
			<p>
				<strong>What is the law about?</strong>
				<br />
				Section 82 states:{" "}
				<i>
					"Nothing is an offence which is done by a child under seven years of
					age."
				</i>
			</p>
			<p>
				<strong>Why was it imposed?</strong>
				<br />
				The law is based on the principle of <i>doli incapax</i>, meaning that
				children under seven lack the capacity to form criminal intent.
			</p>
			<p>
				<strong>What is the punishment?</strong>
				<br />
				There is no punishment as children under seven are fully exempt from
				criminal liability.
			</p>
			<Link href="section-82/more-details-82">
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
