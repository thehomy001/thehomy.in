import React,{useState} from "react";
import "./Contact.css";
import "../Navbar/Navbar.css";
import axios from "axios";



function Contact() {
	const [f_name, setf_name] = useState("");
	const [l_name, setl_name] = useState("");
	const [email, setemail] = useState("");
	const [phone_number, setphone_number] = useState("");
	const [message, setmessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);




	const submitHandler = async (e) => {
		e.preventDefault();

		setIsSubmitting(true);
		console.log("task submitted")

	
	
		try {
	
		  const data = await axios.post(
		       "/api/contact/" ,
			{
				f_name,
				l_name,
				email,
                phone_number,
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
							value={f_name}
                             onChange={(e) => {
                              setf_name(e.target.value);
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
							value={l_name}
                             onChange={(e) => {
                              setl_name(e.target.value);
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
						value={phone_number}
                             onChange={(e) => {
                              setphone_number(e.target.value);
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