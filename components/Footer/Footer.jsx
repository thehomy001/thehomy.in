import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBBtn,
} from "mdb-react-ui-kit";
import "./Footer.css";
export default function App() {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
	  // Update the year in the footer copyright every year
	  const interval = setInterval(() => {
		const newYear = new Date().getFullYear();
		if (newYear !== currentYear) {
		  setCurrentYear(newYear);
		}
	  }, 60000); // Check every minute (adjust the interval as needed)
  
	  return () => {
		clearInterval(interval);
	  };
	}, [currentYear]);
  
	
	return (
		<>
			<MDBFooter className="text-center" color="footer" bgColor="black">
				<div className="footer-logo">
					<Link to="/">
						<img src="./logo.png" alt="" srcset="" />
					</Link>
					<div className="download">
						<Link
							to="https://th.bing.com/th/id/OIG.oAvoqHNli7n2MAJSkt59?pid=ImgGn"
							target="_blank"
						>
							<img src=".././public/ps.png" alt="" srcSet="" />
						</Link>

						<Link
							to="https://th.bing.com/th/id/OIG.oAvoqHNli7n2MAJSkt59?pid=ImgGn"
							target="_blank"
						>
							<img src=".././public/as.png" alt="" />
						</Link>
					</div>
				</div>
				<MDBContainer className="p-4">
					<section className="footer-links">
						<MDBRow>
							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Company</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-footer">
											About us
										</a>
									</li>
								
									<li>
										<a href="#!" className="text-footer">
											Register as a Homy
										</a>
									</li>
									
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Our Services</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="./FeebackForm" className="text-footer">
											Cooks
										</a>
									</li>
									
									<li>
										<a href="FeebackForm" className="text-footer">
											Toilet Cleaners
										</a>
									</li>
									<li>
										<a href="FeebackForm" className="text-footer">
											Baby Sitters
										</a>
									</li>
								
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Contact</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-footer">
											info@thehomy.in
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Legal</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a
											href="#!"
											className="text-footer"
											id="red-link"
										>
											Refund Policy
										</a>
									</li>
									<li>
										<a
											href="#!"
											className="text-footer"
											id="red-link"
										>
											Privacy Policy
										</a>
									</li>
									<li>
										<a
											href="#!"
											className="text-footer"
											id="red-link"
										>
											Terms & Conditions
										</a>
									</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</section>
					<div className="social">
						<Link
							to="https://www.facebook.com/people/Thehomy/61553486985244/ "
							target="_blank"
							style={{ color: "#FFF" }}
						>
							<MDBIcon
								fab
								icon="facebook"
								className="fb"
								size="lg"
							/>
						</Link>

						<Link
							to="https://twitter.com/thehomy_in"
							target="_blank"
							style={{ color: "#FFF" }}
						>
							<MDBIcon
								fab
								icon="x-twitter"
								className="x"
								size="lg"
							/>
						</Link>
						<Link
							to="https://instagram.com/thehomy.in?igshid=OGQ5ZDc2ODk2ZA=="
							target="_blank"
							style={{ color: "#FFF" }}
						>
							<MDBIcon
								fab
								icon="instagram"
								className="ig"
								size="lg"
							/>
						</Link>
						<Link to="" target="_blank" style={{ color: "#FFF" }}>
							<MDBIcon
								fab
								icon="linkedin-in"
								className="li"
								size="lg"
							/>
						</Link>
					</div>
				</MDBContainer>

				<a
					className="text-center  text-white"
					href="https://thehomy.co/"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					© {currentYear} TheHomy
				</a>
			</MDBFooter>
		</>
	);
}
