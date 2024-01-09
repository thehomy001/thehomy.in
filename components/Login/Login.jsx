import React from "react";
import "./Login.css";
import { GiIndiaGate } from "react-icons/gi";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsAlignEnd } from "react-icons/bs";
import { useEffect,useState } from "react";

const Login = (props)=>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isApiCall, setIsApiCall] = useState(false);
// }
// function Login() {

useEffect(() => {
	if(isApiCall==false){
	return;
	}


	fetch("https://jsonplaceholder.typicode.com/users")
	.then((res) => res.json())
	.then((json) => {
		this.setState({
			items: json,
			DataisLoaded: true,
		});
	});
	
   

}, [isApiCall])

function callApiToLogin(e){
	e.preventDefault();
	setIsApiCall(true)


}
	return (
		<div className="spage">
			<form className="sform">
				<h1>Login</h1>
				<div className="flex-column">
					<label>Contact number</label>
				</div>
				<div className="sinputForm">
					<h6>
						<GiIndiaGate />
					</h6>
					<input
						type="text"
						className="input"
						placeholder="+91 Enter your registered number"
					/>
				</div>
				<span className="login-text">OR</span>
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
						onChange={(e)=>{
							setEmail(e.target.value)
						
						}}
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
						onChange={(e)=>{
							setPassword(e.target.value)
						
						}}
					/>
				</div>

				<span className="login-text">OR</span>
				<div type="button" className="login-with-google-btn" >
					Sign in with Google
				</div>
				<button className="button-submit" onClick={(e)=>{
					callApiToLogin(e);
				}}>Login</button>
				<h6>
					Not a user?
					<Link to="/signup"
					style={{ color: "red", textDecorationLine: "none" }}
					>   Sign up</Link>
				</h6>
			</form>
		</div>
	);
}

export default Login;
