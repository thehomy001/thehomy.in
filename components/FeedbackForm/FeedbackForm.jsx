import React,{useState} from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {

       const [name, setname] = useState("");
	   const [phone_number, setphone_number] = useState("");
	   const [email, setemail] = useState("");
	   const [address, setaddress] = useState("");
       const [package_choice, setpackage_choice] = useState("");
	//    const [homypro, sethomypro] = useState("");
	//    const [homypromax, sethomypromax] = useState("");
	   const [message, setmessage] = useState("");




	   const submitHandler = async (e) => {
		e.preventDefault();

		setIsSubmitting(true);
		console.log("task submitted")

	
	
		try {
	
		  const data = await axios.post(
		       "/api/enquiry/" ,
			{
				name,
				phone_number,
				email,
				package_choice,
				message,
			  
			},
			{
			  headers: {
				"Content-Type": "application/json",
			  },
			  withCredentials: true,
			}
		  );
	

		  
	
		} catch (error) {
          
			console.log("hello error")
	
		}finally {
			setIsSubmitting(false);
		}
	  };









	return (
		<div className="feedback-form">
			<div className="cmain">
				<form className="cform"  >
					<p className="title">Enquiry Form</p>

					<label>
						<input
							required
							placeholder="Name"
							type="text"
							className="input"
							value={name}
                             onChange={(e) => {
                              setname(e.target.value);
							 }
							 }
						/>
					</label>

					<label>
						<input
							required
							placeholder="Phone Number"
							type="tel"
							className="input"
							value={phone_number}
                             onChange={(e) => {
                              setphone_number(e.target.value);
							 }
							 }
						/>
					</label>
					<label>
						<input
							required
							placeholder="Email"
							type="email"
							className="input"
							value={email}
                             onChange={(e) => {
                              setemail(e.target.value);
							 }
							 }
						/>
					</label>
					<label>
						<input
							required
							placeholder="Address"
							type="text"
							className="input"
							value={address}
                             onChange={(e) => {
                              setaddress(e.target.value);
							 }
							 }
						/>
					</label>

					<div className="ff-wrapper">
						<div className="ff-card">
							<input
								className="ff-input"
								type="radio"
								name="card"
								value={package_choice}
								onChange={(e) => {
                              setpackage_choice(e.target.value);
							 }
							 }

							/>
							<span className="ff-check"></span>
							<label className="ff-label">
								<div className="ff-title">HOMY</div>
								<div className="ff-price">
									<span className="ff-span">Starting at </span>
									<span className="ff-span">₹</span>
									499
								</div>
							</label>
						</div>



						<div className="ff-card">
							<input
								className="ff-input"
								type="radio"
								name="card"
								value={package_choice}
								onChange={(e) => {
                              setpackage_choice(e.target.value);
							 }
							 }
							/>
							<span className="ff-check"></span>
							<label className="ff-label">
								<div className="ff-title">HOMY PRO</div>
								<div className="ff-price">
									<span className="ff-span">Starting at </span>
									<span className="ff-span">₹</span>
									4999
								</div>
							</label>
						</div>




						<div className="ff-card">
							<input
								className="ff-input"
								type="radio"
								name="card"
								value={package_choice}
								onChange={(e) => {
                              setpackage_choice(e.target.value);
							 }
							 }
							/>
							<span className="ff-check"></span>
							<label className="ff-label">
								<div className="ff-title">HOMY PRO MAX</div>
								<div className="ff-price">
									<span className="ff-span">Starting at </span>
									<span className="ff-span">₹</span>
									14999
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
						value={message}
								onChange={(e) => {
                              setmessage(e.target.value);
							 }
							 }
					></textarea>
					<button className="loginbtn submit" type="submit">Submit</button>
				</form>
				<div className="box">
					<img src="./contactus.png" alt=""/>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;