import React from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
	return (
		<div>
			<div className="firstdata">
				<h1
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="600"
				>
					Who we are?
				</h1>
				<p
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					We are <span className="red">The Homy</span>! The luxury
					service provider for your comfort
				</p>
			</div>
			<div className="first"></div>
			<div className="middle-data">
				<p
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					Our organizational mission prioritizes tailored customer
					satisfaction and upholds unwavering integrity in all
					interactions. We set the benchmark for excellence through
					professionalism and premium care. Embracing innovation, we
					leverage technology to elevate home care experiences.
					Respect, empathy, and safety are foundational, with rigorous
					vetting and privacy protocols in place. Additionally, we are
					committed to sustainability, integrating Eco-conscious
					practices for a greener future across all operations.
				</p>
			</div>
			<div className="second"></div>
			<div className="second-container">
				<div className="seconddata">
					<h1
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="400"
					>
						Core values
					</h1>
					<p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Customer-Centric:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							We prioritize your satisfaction, tailoring our
							services to your unique needs and preferences. Your
							happiness is our ultimate goal.
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Integrity:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							Trust is the foundation of our relationship. We
							operate with transparency, honesty, and a commitment
							to ethical practices in all our interactions.
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Excellence in Service:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							We strive for excellence in every aspect of our
							service delivery, from the professionalism of our
							staff to the quality of care we provide to your
							home.
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Innovation:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							Embracing innovation, we continually seek new and
							improved ways to enhance your home care experience,
							leveraging technology and creative solutions.
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Empathy and Respect:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							We approach every engagement with empathy and
							respect, recognizing the diverse needs and
							backgrounds of our clients and staff.
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Security and Safety:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							Your safety and security are non-negotiable. We
							uphold the highest standards in vetting, privacy
							protection, and secure transactions to ensure your
							peace of mind
						</p>
						<h3
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							Commitment to Sustainability:
						</h3>
						<p
							data-aos="fade"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							We are committed to eco-friendly practices,
							promoting sustainability in our services to
							contribute to a healthier environment for all.
						</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
