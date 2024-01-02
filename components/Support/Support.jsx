import React from "react";
import "./Support.css";
import { FaWhatsapp } from "react-icons/fa";

const Support = () => {
	const whatsappNumber = "8130519564";

	return (
		<button className="support">
			<a
				href={`https://wa.me/${whatsappNumber}`}
				className="support-button"
				target="_blank"
				rel="noopener noreferrer"
				style={{ color: "#FFF" }}
			>
				<FaWhatsapp />
			</a>
		</button>
	);
};

export default Support;
