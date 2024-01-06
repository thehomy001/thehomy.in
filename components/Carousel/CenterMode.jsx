import "./CenterMode.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "black" }}
			onClick={onClick}
		/>
	);
}
export default class CenterMode extends Component {
	constructor(props) {
		super(props);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
	}
	play() {
		this.slider.slickPlay();
	}
	pause() {
		this.slider.slickPause();
	}
	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "10px",
			slidesToShow: 3,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 700,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 3,
						infinite: true,
						// dots: true
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 3,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						initialSlide: 2,

						slidesToScroll: 2,
					},
				},
			],

			// nextArrow: <SampleNextArrow />,
			// prevArrow: <SamplePrevArrow />
		};

		return (
			<div className="cards">
				<h1
					data-aos="fade-bottom"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					Our Services
				</h1>
				<h2
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					“Single price Triple Service”
				</h2>
				<Slider {...settings}>
					<div>
						<Link
							to="/Dustguard"
							style={{ textDecorationLine: "none" }}
						>
							<img src="./Dustguard.png" alt="" />
						</Link>
					</div>
					<Link
						to="/cook"
						style={{ textDecorationLine: "none" }}
					>
						<div>
							<img src="./hygiene.png" alt="" />
						</div>
					</Link>
					<Link
						to="/Hygiene"
						style={{ textDecorationLine: "none" }}
					>
						{" "}
						<div>
							<img src="./KitchenKing.png" alt="" />
						</div>
					</Link>
					<Link
						to="/Dustguard	"
						style={{ textDecorationLine: "none" }}
					>
						<div>
							<img src="./Dustguard.png" alt="" />
						</div>
					</Link>
					<Link
						to="/cook"
						style={{ textDecorationLine: "none" }}
					>
						<div>
							<img src="./hygiene.png" alt="" />
						</div>
					</Link>
					<Link
						to="/Hygiene"
						style={{ textDecorationLine: "none" }}
					>
						<div>
							<img src="./KitchenKing.png" alt="" />
						</div>
					</Link>
				</Slider>
			</div>
		);
	}
}
