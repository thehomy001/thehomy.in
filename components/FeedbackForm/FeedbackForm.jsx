import React from "react";
import "./FeedbackForm.css";


const FeedbackForm = () => {
	return (
		<div className="feedback-form">
			<div className="cmain">
				<form className="cform">
					<p className="title">Enquiry Form</p>

						<label>
							<input
								required=""
								placeholder="Name"
								type="text"
								className="input"
							/>
						</label>

				
			

					<label>
						<input
							required=""
							placeholder="Phone Number"
							type="tel"
							className="input"
						/>
					</label>
					<label>
						<input
							required=""
							placeholder="Email"
							type="email"
							className="input"
						/>
					</label>
					<label>
						<input
							required=""
							placeholder="Address"
							type="text"
							className="input"
						/>
					</label>


						<div className="ff-wrapper">
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="basic"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">HOMY</div>
									<div className="ff-price">
										<span className="ff-span">₹</span>
                                        499
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="standard"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">HOMY PRO</div>
									<div className="ff-price">
										<span className="ff-span">₹</span>
										4999
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
							<div className="ff-card">
								<input
									className="ff-input"
									type="radio"
									name="card"
									value="premium"
								/>
								<span className="ff-check"></span>
								<label className="ff-label">
									<div className="ff-title">HOMY PRO MAX</div>
									<div className="ff-price">
										<span className="ff-span">₹</span>
									14999	
										<span className="ff-span">/month</span>
									</div>
								</label>
							</div>
						</div>
					<textarea
						className="form-control"
						name="message"
						rows="7"
						placeholder="Message"
						required
					></textarea>
					<button className="loginbtn submit">Submit</button>
				</form>
				<div className="box">
					<img src="./contactus.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
