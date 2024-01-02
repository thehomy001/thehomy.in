import React from "react";
import "../Banner/Banner.css";
import "./FB.css";
import { useTypewriter } from "react-simple-typewriter";

const FB = () => {
	
	return (
		<div>
			<div className="container">
				<div className="text ">
					<h1>Personalised to Perfection</h1>
				</div>
				<div className="fimage">
					<div>
						<div className="top">
							<img
								src="./Looksselection.svg"
								alt=""
								srcset=""
								data-aos="fade-right"
								data-aos-easing="linear"
								data-aos-duration="400"
							/>
							<img
								src="./genderselection.svg"
								alt=""
								srcset=""
								data-aos="fade"
								data-aos-easing="linear"
								data-aos-duration="400"
							/>
							<img
								src="./ageselection.svg"
								alt=""
								srcset=""
								data-aos="fade-left"
								data-aos-easing="linear"
								data-aos-duration="400"
							/>
						</div>
					</div>
					<div className="bottom">
						<img
							src="./dailyfoodselection.svg"
							alt=""
							srcset=""
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="400"
						/>
						<img
							src="./flexibletimings.svg"
							alt=""
							srcset=""
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="400"
						/>
						<img
							src="./vnvsec.svg"
							alt=""
							srcset=""
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="400"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FB;
