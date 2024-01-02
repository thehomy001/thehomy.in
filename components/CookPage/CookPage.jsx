import React from "react";
import "./CookPage.css";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const CookPage = () => {
		// const [isClicked, setIsClicked] = useState(false);
	return (
		<>
			<div className="CookPage-container">
				<div>
					<h1>Kitchen King</h1>
					<h2>Cook</h2>
					<div className="cardbox">
						<div className="ccard">
							<div className="ccard-details">
								<p className="ctext-title">Homy</p>
								<p className="ctext-body">
									Here are the details of the card
								</p>
							</div>
							<button class="ccard-button">More info</button>
						</div>
						<div className="ccard">
							<div className="ccard-details">
								<p className="ctext-title">Homy Pro</p>
								<p className="ctext-body">
									Here are the details of the card
								</p>
							</div>
							<button class="ccard-button">More info</button>
						</div>
						<div className="ccard">
							<div className="ccard-details">
								<p className="ctext-title">Homy Pro Max</p>
								<p className="ctext-body">
									Here are the details of the card
								</p>
							</div>
							<button class="ccard-button" >More info</button>
						</div>
					</div>
					<Link
						to="/FeebackForm"
						style={{ textDecorationLine: "none" }}
					>
						<div className="secbutton cookbtn">
							Customize your way
							<MdArrowOutward />
						</div>
					</Link>
				</div>

				<img src="../../public/temp1.jpg" alt="" />
			</div>
		</>
	);
};

export default CookPage;
