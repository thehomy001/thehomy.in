import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import { MdArrowOutward } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { PiToilet } from "react-icons/pi";
import { PiBroom } from "react-icons/pi";

const Services = () => {
	return (
		<div className="services-main-box">
			<div className="services-box">
				<h1>Our Services</h1>
				<div className="services-inner-box-2">
					<img src="../../public/temp1.jpg" alt="" />
					<div>
						<h1>Kitchen King</h1>
						<h2>
							<GiKnifeFork /> Chef
						</h2>

						<span className="service-text">
							Our cooks at Thehomy pour dedication into every
							dish, ensuring your meals are crafted with love and
							exceptional taste.
						</span>
						<ul
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="400"
						>
							<li>
								<span className="li-style"></span>Weekly Meal
								Planning
							</li>
							<li>
								<span className="li-style"></span>Daily Meal
								Planning
							</li>
							<li>
								<span className="li-style"></span>Trained cooks
							</li>
							<li>
								<span className="li-style"></span>Trained cooks
							</li>
							<li>
								<span className="li-style"></span>Set Your Spicy
								meter
							</li>
							<li>
								<span className="li-style"></span>Set Your
								calorie meter
							</li>
							<li>
								<span className="li-style"></span>Daily customer
								feedback
							</li>

							<li>
								<span className="li-style"></span>Kitchen kit.
							</li>
						</ul>
						<Link to="/FeebackForm" style={{ textDecorationLine: "none" }}>
							<div className="secbutton servicebtn">
								Book Now <MdArrowOutward />
							</div>
						</Link>
					</div>
				</div>

				{/* <div className="services-inner-box-2">
					<img src="../../public/temp2.png" alt="" />
					<div>
						<h1>Nursing Nanny</h1>
						<h2>Caretaker</h2>

						<span className="service-text">
							Experience peace of mind with Thehomy's professional
							sitters. Our stringent selection process ensures
							top-notch service. More than just nannies, we focus
							on holistic child development, providing a safe and
							stimulating environment. Our trained sitters guide
							parents on safety and health, offering specially
							designed programs to meet the needs of both kids and
							parents.
						</span>
						<ul>
							<li>
								<span className="li-style"></span>Police
								verified
							</li>
							<li>
								<span className="li-style"></span>Caring
							</li>
							<li>
								<span className="li-style"></span>Trustworthy
							</li>
							<li>
								<span className="li-style"></span>Caring
							</li>

							<li>
								<span className="li-style"></span>Educated
								Babysitters
							</li>

							<li>
								<span className="li-style"></span>Nursing kit
							</li>
						</ul>
					</div>
				</div> */}
				{/* <Link to="/Caretaker" style={{ textDecorationLine: "none" }}>
					<div className="secbutton servicebtn">Book Now <MdArrowOutward/></div>
				</Link> */}

				<div className="services-inner-box-2">
					<img src="../../public/temp4.png" alt="" />
					<div>
						<h1>Dust Guards</h1>
						<h2><PiBroom/> Cleaners</h2>

						<span className="service-text">
							Our house cleaners at Thehomy are your secure
							choice. Each is safety-checked, police-verified, and
							trustworthy. With us, you're not just getting
							cleaning services – you're getting peace of mind,
							knowing your home is in safe and reliable hands.
						</span>
						<ul
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="400"
						>
							<li>
								<span className="li-style"></span>Trained staff
							</li>
							<li>
								<span className="li-style"></span>Our cleaners
								Prioritize your satisfaction
							</li>
							<li>
								<span className="li-style"></span>Equipped with
								experience and training
							</li>
							<li>
								<span className="li-style"></span>Adaptable to
								your needs
							</li>

							<li>
								<span className="li-style"></span>Maintain a professional demeanor
							</li>

						
						</ul>
						<Link to="/FeebackForm" style={{ textDecorationLine: "none" }}>
							<div className="secbutton servicebtn">
								Book Now <MdArrowOutward />
							</div>
						</Link>
					</div>
				</div>
				<div className="services-inner-box-2">
					<img src="../../public/temp3.png" alt="" />
					<div>
						<h1>Mr. Hygiene</h1>
						<h2> <PiToilet/> Toilet Cleaner</h2>

						<span className="service-text">
							At Thehomy, our toilet cleaners are clean,
							dedicated, and trusted. They're verified by the
							police, carry their own kits, and ensure a spotless
							and safe bathroom for you.
						</span>
						<ul 
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="400">
							<li>
								<span className="li-style"></span>Police
								verified
							</li>
							<li>
								<span className="li-style"></span>Hygiene
								checked
							</li>

							<li>
								<span className="li-style"></span>Trained staff
							</li>

							<li>
								<span className="li-style"></span>Toilet
								cleaner kit
							</li>
						</ul>
						<Link to="/FeebackForm" style={{ textDecorationLine: "none" }}>
					<div className="secbutton servicebtn">Book Now <MdArrowOutward/></div>
				</Link>
					</div>
				
				</div>
			</div>
		</div>
	);
};

export default Services;
