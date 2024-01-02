import React from "react";
import "./Dashboard.css";
import Calendar from "../Calendar/Calendar";

const Dashboard = () => {
	return (
		<div>
			<div className="detail">
				<div className="Dashboard-card">
					<div className="card-border-top"></div>
					<div className="Dashboard-img"></div>
					<span> Person</span>
					<p className="job"> Job Title</p>
					<button> Click</button>
				</div>
			</div>
			<div className="Dashboard-container">
				<div className="carousel"></div>
				<div>
					<div className="Dashboard-cards">
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
						<div className="Dashboard-card"></div>
					</div>
					<div className="calender">
						<Calendar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
