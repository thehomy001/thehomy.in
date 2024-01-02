import React from "react";
import "./SignUp.css";
import { IoMdPerson } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
function Login() {
	
	return (
		<div className="spage">
			<form className="sform">
				<h1>Sign Up</h1>
				<div className="flex-column">
					<label>Name </label>
				</div>
				<div className="sinputForm">
					<h6>
						<IoMdPerson />
					</h6>
					<input
						type="text"
						className="input"
						placeholder="Enter your Name"
					/>
				</div>
				<div className="flex-column">
					<label>Email </label>
				</div>
				<div className="sinputForm">
					<h6>
						<MdOutlineAlternateEmail />
					</h6>
					<input
						type="text"
						className="input"
						placeholder="Enter your Email"
					/>
				</div>
				<div className="flex-column">
					<label>Password </label>
				</div>
				<div className="sinputForm">
					<h6>
						<MdLock />
					</h6>

					<input
						type="password"
						className="input"
						placeholder="Enter your Password"
					/>
				</div>
				<div className="flex-column">
					<label>Confirm Password </label>
				</div>
				<div className="sinputForm">
					<h6>
						<MdLock />
					</h6>

					<input
						type="password"
						className="input"
						placeholder="Confirm your Password"
					/>
				</div>
				
				<button className="button-submit">Continue to Home</button>
				<h6>
					Existing user?
					<Link to="/login"
					style={{ color: "red", textDecorationLine: "none" }}
					>   Login</Link>
				</h6>
			</form>
			
		</div>
	);
}

export default Login;
