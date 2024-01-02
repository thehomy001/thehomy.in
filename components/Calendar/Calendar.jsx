import React, { useState } from "react";
import "./Calendar.css"; // Import your CSS file with the styles
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Calendar = () => {
	const now = new Date();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const jan = daysInMonth(1, now.getFullYear());
	const feb = daysInMonth(2, now.getFullYear());
	const mar = daysInMonth(3, now.getFullYear());
	const apr = daysInMonth(4, now.getFullYear());
	const may = daysInMonth(5, now.getFullYear());
	const jun = daysInMonth(6, now.getFullYear());
	const jul = daysInMonth(7, now.getFullYear());
	const aug = daysInMonth(8, now.getFullYear());
	const sep = daysInMonth(9, now.getFullYear());
	const oct = daysInMonth(10, now.getFullYear());
	const nov = daysInMonth(11, now.getFullYear());
	const dec = daysInMonth(12, now.getFullYear());
	const monthRef = [
		jan,
		feb,
		mar,
		apr,
		may,
		jun,
		jul,
		aug,
		sep,
		oct,
		nov,
		dec,
	];

	const [month, setMonth] = useState(now.getMonth());
	const [monthDay, setMonthDay] = useState(monthRef[now.getMonth()]);
	const [n, setN] = useState(now.getDate());
	const [uid, setUid] = useState(`${n}${month}`);
	const [dataId, setDataId] = useState(uid);
	const [events, setEvents] = useState([]);
	const [description, setDescription] = useState("");
	const [type, setType] = useState("Social");

	function daysInMonth(month, year) {
		return new Date(year, month, 0).getDate() ;
	}

	function next() {
		if (month < 11) {
			setMonth(month + 1);
			setMonthDay(monthRef[month + 1]);
		}
	}

	function prev() {
		if (month > 0) {
			setMonth(month - 1);
			setMonthDay(monthRef[month - 1]);
		}
	}

	function add() {
		setEvents([...events, { id: uid, description, type }]);
		setDescription("");
		console.log(events);
	}

	function placeIt() {
		const dateItems = document.querySelectorAll(".date_item");

		dateItems.forEach((item, index) => {
			const marginLeft = calculateMarginLeft(index);
			item.style.marginLeft = `${marginLeft}px`;
		});
	}

	function calculateMarginLeft(index) {
		// Implement your logic for calculating margin-left based on index
		// This is just a sample logic, adjust it as per your design
		return index * 50;
	}

	function presentDay() {
		const presentDayItem = document.querySelector(
			`.date_item[data="${dataId}"]`
		);
		if (presentDayItem) {
			presentDayItem.classList.add("present");
		}
	}

	function showDays(days) {
		let daysArray = [];
		for (let i = 1; i <= days; i++) {
			const uid = `${i}${month}`;
			daysArray.push(
				<div
					key={uid}
					className={`date_item ${uid === dataId ? "present" : ""}`}
					data={uid}
					onClick={() => handleDateClick(uid)}
				>
					{i}
				</div>
			);
		}
		return daysArray;
	}

	function handleDateClick(clickedUid) {
		setUid(clickedUid);
		setDataId(clickedUid);
	}

	return (
		<div className="calendar">
			<div className="calendar_left">
				<div className="header">
					<h2 onClick={prev}>
						<BsArrowLeft />
					</h2>
					<h1>{months[month]}</h1>
					<h2 onClick={next}>
						<BsArrowRight />
					</h2>
				</div>
				<div className="days">
					<div className="day_item">Mon</div>
					<div className="day_item">Tue</div>
					<div className="day_item">Wed</div>
					<div className="day_item">Thu</div>
					<div className="day_item">Fri</div>
					<div className="day_item">Sat</div>
					<div className="day_item">Sun</div>
				</div>
				<div className="dates">{showDays(monthDay)}</div>
			</div>
			<div className="calendar_right">
				<div className="list">
					<ul>
						{events.map((event) => (
							<li key={event.id} className="bounce-in">
								<span className="type">
									It's a {event.type} thing -
								</span>
								<span className="description">
									{event.description}
								</span>
							</li>
						))}
					</ul>
				</div>
				<form onSubmit={add}>
					<input
						type="text"
						placeholder="Enter a task for this day"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button type="button" className="button">
						<span class="button__text">Add Item</span>
						<span class="button__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke-linejoin="round"
								stroke-linecap="round"
								stroke="currentColor"
								height="24"
								fill="none"
								class="svg"
							>
								<line y2="19" y1="5" x2="12" x1="12"></line>
								<line y2="12" y1="12" x2="19" x1="5"></line>
							</svg>
						</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Calendar;
