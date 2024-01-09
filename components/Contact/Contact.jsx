import React,{useState} from "react";
import "./Contact.css";
import "../Navbar/Navbar.css";
import axios from "axios";



function Contact() {
	const [fname, setfname] = useState("");
	const [lname, setlname] = useState("");
	const [email, setemail] = useState("");
	const [Number, setNumber] = useState("");
	const [message, setmessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);




	const submitHandler = async (e) => {
		e.preventDefault();

		setIsSubmitting(true);
		console.log("task submitted")

	
	
		try {
	
		  const data = await axios.post(
		       "http://127.0.0.1:8000/contact/" ,
			{
				fname,
				lname,
				email,
                Number,
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
		  toast.error(error);
	
	
		}finally {
			setIsSubmitting(false);
		}
	  };









	return (
		<div className="cmain">

			<form className="cform" onSubmit={submitHandler}>
				<p className="title">Contact us </p>

				<div className="flex">
					<label>
						<input
							required
							placeholder=""
							type="text"
							className="input"
							value={fname}
                             onChange={(e) => {
                              setfname(e.target.value);
            }}
						/>
						<span>First Name</span>
					</label>

					<label>
						<input
							required
							placeholder=""
							type="text"
							className="input"
							value={lname}
                             onChange={(e) => {
                              setlname(e.target.value);
            }}
						/>
						<span>Last Name</span>
					</label>
				</div>

				<label>
					<input
						required
						placeholder=""
						type="email"
						className="input"
						value={email}
                             onChange={(e) => {
                              setemail(e.target.value);
            }}
						
					/>
					<span>Email</span>
				</label>

				<label>
					<input
						required
						placeholder=""
						type="tel"
						className="input"
						value={Number}
                             onChange={(e) => {
                              setNumber(e.target.value);
            }}
					/>
					<span>Phone Number</span>
				</label>
				<label>
					<textarea
						required
						placeholder="Message"
						type="Message"
						className="input message"
						rows="7"

						value={message}
                             onChange={(e) => {
                              setmessage(e.target.value);
            }}

					/>
					
				</label>
				<button className="loginbtn submit" type="submit" disabled={isSubmitting}>
				{isSubmitting ? 'Submitting...' : 'Submit'}
				</button>



			</form>
			<div className="box">
				<img src="./contactus.png" alt=""  />
			</div>
		</div>
	);
}

export default Contact;