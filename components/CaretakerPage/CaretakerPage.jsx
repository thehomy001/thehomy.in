import React from "react";
import "./CaretakerPage.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const CaretakerPage = () => {
	return (
		<>
			<div
				className="Caretaker-container"
			>
				<div>
					<h1>Nursing Nanny</h1>
					<h2>House-Helper</h2>
					<Link
						to="/payment"
						style={{ textDecorationLine: "none" }}
					>
						<div className="secbutton ">
							Get Started
							<MdArrowOutward />
						</div>
					</Link>
				</div>

				<img src="../../public/temp2.png" alt="" />
			</div>
		</>
	);
};

export default CaretakerPage;
