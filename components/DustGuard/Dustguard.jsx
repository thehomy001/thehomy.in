import React from "react";
import "./Dustguard.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Dustguard = () => {
	return (
		<>
			<div className="Dustguard-container">
				<div>
					<h1>Dust Guards</h1>
					<h2>Cleaners</h2>
					<Link to="/payment"  style={{ textDecorationLine: "none" }}> 
                    <div className="secbutton ">
						Get Started
						<MdArrowOutward />
					</div>

                        </Link>
				
				</div>

				<img src="../../public/temp4.png" alt="" />
			</div>
		</>
	);
};

export default Dustguard;
