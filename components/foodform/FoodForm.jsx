import React, { useState } from "react";
import "./FoodForm.css";
const FoodForm = () => {
	// State for radio buttons
	const [selectedOption1, setSelectedOption1] = useState(null);
	const [selectedOption2, setSelectedOption2] = useState(null);

	// State for sliders
	const [sliderValue1, setSliderValue1] = useState(0);
	const [sliderValue2, setSliderValue2] = useState(1500);

	// State for dropdown menu
	const [selectedDropdown, setSelectedDropdown] = useState("");

	// State for checkboxes
	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(false);
	const [checkbox3, setCheckbox3] = useState(false);

	// State for button-specific checkboxes
	const [button1Checkbox1, setButton1Checkbox1] = useState(false);
	const [button1Checkbox2, setButton1Checkbox2] = useState(false);
	const [button1Checkbox3, setButton1Checkbox3] = useState(false);

	const [button2Checkbox1, setButton2Checkbox1] = useState(false);
	const [button2Checkbox2, setButton2Checkbox2] = useState(false);
	const [button2Checkbox3, setButton2Checkbox3] = useState(false);

	const [button3Checkbox1, setButton3Checkbox1] = useState(false);
	const [button3Checkbox2, setButton3Checkbox2] = useState(false);
	const [button3Checkbox3, setButton3Checkbox3] = useState(false);

	// State to track which button is selected
	const [selectedButton, setSelectedButton] = useState(null);

	// Handle radio button change
	const handleRadioChange1 = (event) => {
		setSelectedOption1(event.target.value);
	};

	const handleRadioChange2 = (event) => {
		setSelectedOption2(event.target.value);
	};

	// Handle slider change
	const handleSliderChange1 = (event) => {
		setSliderValue1(parseInt(event.target.value, 10));
	};

	const handleSliderChange2 = (event) => {
		setSliderValue2(parseInt(event.target.value, 10));
	};

	// Handle dropdown change
	const handleDropdownChange = (event) => {
		setSelectedDropdown(event.target.value);
	};

	// Handle checkbox change
	const handleCheckboxChange1 = () => {
		setCheckbox1(!checkbox1);
	};

	const handleCheckboxChange2 = () => {
		setCheckbox2(!checkbox2);
	};

	const handleCheckboxChange3 = () => {
		setCheckbox3(!checkbox3);
	};

	// Handle button click
	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	// Handle button-specific checkbox changes
	const handleButton1CheckboxChange1 = () => {
		setButton1Checkbox1(!button1Checkbox1);
	};

	const handleButton1CheckboxChange2 = () => {
		setButton1Checkbox2(!button1Checkbox2);
	};

	const handleButton1CheckboxChange3 = () => {
		setButton1Checkbox3(!button1Checkbox3);
	};

	const handleButton2CheckboxChange1 = () => {
		setButton2Checkbox1(!button2Checkbox1);
	};

	const handleButton2CheckboxChange2 = () => {
		setButton2Checkbox2(!button2Checkbox2);
	};

	const handleButton2CheckboxChange3 = () => {
		setButton2Checkbox3(!button2Checkbox3);
	};

	const handleButton3CheckboxChange1 = () => {
		setButton3Checkbox1(!button3Checkbox1);
	};

	const handleButton3CheckboxChange2 = () => {
		setButton3Checkbox2(!button3Checkbox2);
	};

	const handleButton3CheckboxChange3 = () => {
		setButton3Checkbox3(!button3Checkbox3);
	};

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Do something with the form data
	};

	// Render checkboxes based on the selected button
	const renderCheckboxes = () => {
		if (selectedButton === "button1") {
			return (
				<>
					<div className="drop-btn-cb">
						<h5>Breakfast</h5>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox1}
								onChange={handleButton1CheckboxChange1}
							/>
							7:00 AM to 9:00 AM
						</label>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox2}
								onChange={handleButton1CheckboxChange2}
							/>
							9:00 AM to 11:00 AM
						</label>
					</div>
					<div className="drop-btn-cb">
						<h5>Lunch</h5>

						<label>
							<input
								type="checkbox"
								checked={button2Checkbox1}
								onChange={handleButton2CheckboxChange1}
							/>
							11:00 AM to 1:00 PM
						</label>
						<label>
							<input
								type="checkbox"
								checked={button2Checkbox2}
								onChange={handleButton2CheckboxChange2}
							/>
							1:00 PM to 3:00 PM
						</label>
						<label>
							<input
								type="checkbox"
								checked={button2Checkbox3}
								onChange={handleButton2CheckboxChange3}
							/>
							3:00 PM to 5:00 PM
						</label>
					</div>
				</>
			);
		} else if (selectedButton === "button2") {
			return (
				<div className="drop-btn-cb">
					<div className="drop-btn-cb">
						<h5>Breakfast</h5>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox1}
								onChange={handleButton1CheckboxChange1}
							/>
							7:00 AM to 9:00 AM
						</label>
						<label>
							<input
								type="checkbox"
								checked={button1Checkbox2}
								onChange={handleButton1CheckboxChange2}
							/>
							9:00 AM to 11:00 AM
						</label>
					</div>
					<h5>Lunch</h5>

					<label>
						<input
							type="checkbox"
							checked={button2Checkbox1}
							onChange={handleButton2CheckboxChange1}
						/>
						11:00 AM to 1:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button2Checkbox2}
							onChange={handleButton2CheckboxChange2}
						/>
						1:00 PM to 3:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button2Checkbox3}
							onChange={handleButton2CheckboxChange3}
						/>
						3:00 PM to 5:00 PM
					</label>
					<h5>Dinner</h5>

					<label>
						<input
							type="checkbox"
							checked={button3Checkbox1}
							onChange={handleButton3CheckboxChange1}
						/>
						6:00 PM to 7:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button3Checkbox2}
							onChange={handleButton3CheckboxChange2}
						/>
						7:00 PM to 8:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button3Checkbox3}
							onChange={handleButton3CheckboxChange3}
						/>
						8:00 PM to 9:00 PM
					</label>
				</div>
			);
		} else if (selectedButton === "button3") {
			return (
				<div className="drop-btn-cb">
					<h5>Breakfast</h5>
					<label>
						<input
							type="checkbox"
							checked={button1Checkbox1}
							onChange={handleButton1CheckboxChange1}
						/>
						7:00 AM to 9:00 AM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button1Checkbox2}
							onChange={handleButton1CheckboxChange2}
						/>
						9:00 AM to 11:00 AM
					</label>

					<h5>Dinner</h5>

					<label>
						<input
							type="checkbox"
							checked={button3Checkbox1}
							onChange={handleButton3CheckboxChange1}
						/>
						6:00 PM to 7:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button3Checkbox2}
							onChange={handleButton3CheckboxChange2}
						/>
						7:00 PM to 8:00 PM
					</label>
					<label>
						<input
							type="checkbox"
							checked={button3Checkbox3}
							onChange={handleButton3CheckboxChange3}
						/>
						8:00 PM to 9:00 PM
					</label>
				</div>
			);
		} else {
			// Default: No checkboxes
			return null;
		}
	};

	return (
		<div className="Food-page">
			<div className="FoodForm">
				<form className="forrm bdr" onSubmit={handleSubmit}>
					{/* Radio Buttons 1 */}
					<div className="form-head">
						<img src="../../public/Gender.svg" alt="" />
					</div>
					<div className="veg-non bdr">
						<label>
							<input
								type="radio"
								value="option1"
								checked={selectedOption1 === "option1"}
								onChange={handleRadioChange1}
							/>
							<h6>
								<span className="inner-img">
									<img src="../../public/Male.svg" alt="" />{" "}
									Male
								</span>
							</h6>
						</label>
						<label>
							<input
								type="radio"
								value="option2"
								checked={selectedOption1 === "option2"}
								onChange={handleRadioChange1}
							/>
							<h6>
								<span className="inner-img">
									<img src="../../public/Female.svg" alt="" />{" "}
									Female
								</span>
							</h6>
						</label>
					</div>

					{/* Slider 1 */}
					<div className="form-head">
						<img src="../../public/SpicyMeter.svg" alt="" />
					</div>
					<div className="bdr">
						<label>
							<h6>{sliderValue1}</h6>
						</label>
						<br />
						<input
							type="range"
							min="0"
							max="3"
							value={sliderValue1}
							onChange={handleSliderChange1}
						/>
					</div>

					{/* Radio Buttons 2 */}
					<div className="form-head">
						<img src="../../public/Food.svg" alt="" />
					</div>
					<div className="veg-non bdr">
						<label>
							<input
								type="radio"
								value="option3"
								checked={selectedOption2 === "option3"}
								onChange={handleRadioChange2}
							/>
							<h6>
								<span className="inner-img2">
									<img src="../../public/veg.svg" alt="" />{" "}
									Veg
								</span>
							</h6>
						</label>
						<label>
							<input
								type="radio"
								value="option4"
								checked={selectedOption2 === "option4"}
								onChange={handleRadioChange2}
							/>
							<h6>
								<span className="inner-img2">
									<img
										src="../../public/Non-veg.svg"
										alt=""
									/>{" "}
									Non
								</span>
								Veg
							</h6>
						</label>
					</div>

					{/* Slider 2 */}
					<div className="form-head">
						<img src="../../public/Calorie.svg" alt="" />
					</div>
					<div className="bdr">
						<label>
							<h6>{sliderValue2}</h6>
						</label>
						<br />
						<input
							type="range"
							min="1500"
							max="5000"
							value={sliderValue2}
							onChange={handleSliderChange2}
						/>
					</div>

					{/* Dropdown Menu */}
					{/* <div className="form-head">Caste:</div>

				<div className="bdr">
					<label>
						<br />
						<select
							value={selectedDropdown}
							onChange={handleDropdownChange}
						>
							<option value="">If you prefer...</option>
							<option value="optionA">Option A</option>
							<option value="optionB">Option B</option>
							<option value="optionC">Option C</option>
						</select>
					</label>
				</div> */}

					{/* Checkboxes 1 */}

					{/* Button 1 with Checkboxes */}
					<div className="form-head">
						<img
							src="../../public/TimeSlots.svg"
							alt=""
							srcset=""
						/>
					</div>
					<div className="drop-btn bdr">
						<div>
							<button
								type="button"
								className="custbtn"
								onClick={() => handleButtonClick("button1")}
							>
								Breakfast & Lunch
							</button>
							{selectedButton === "button1" && renderCheckboxes()}
						</div>

						{/* Button 2 with Checkboxes */}
						<div>
							<button
								type="button"
								className="custbtn"
								onClick={() => handleButtonClick("button2")}
							>
								Breakfast, Lunch & Dinner
							</button>
							{selectedButton === "button2" && renderCheckboxes()}
						</div>

						{/* Button 3 with Checkboxes */}
						<div>
							<button
								type="button"
								className="custbtn"
								onClick={() => handleButtonClick("button3")}
							>
								Breakfast & Dinner
							</button>
							{selectedButton === "button3" && renderCheckboxes()}
						</div>
					</div>
					{/* Buttons */}
					<div className="sub-res">
						<button type="submit" className="loginbtn">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FoodForm;
