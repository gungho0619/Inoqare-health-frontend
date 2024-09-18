import CountrySelect from "@components/common/CountrySelect";
import { useRouter } from "next/router";
import React, { useState } from "react";

const INITIAL_STATE = {
	treatment_info: "",
	destination_country: "",
	email: "",
};

const TreatmentForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [errorMsg, setErrorMsg] = useState({});

	const handleValidation = () => {
		const errorObj = {};
		if (formData.treatment_info.length === 0) {
			errorObj.treatment_info = "Treatment info is required";
		}
		if (formData.destination_country.length === 0) {
			errorObj.destination_country = "Country is required";
		}
		if (formData.email.length === 0) {
			errorObj.email = "Email is required";
		} else if (
			!formData.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			errorObj.email = "Email is invalid";
		}
		setErrorMsg(errorObj);
		return errorObj;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleCountryChange = (name, value) => {
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleClick = () => {
		const obj = handleValidation();
		for (const [_, value] of Object.entries(obj)) {
			if (value && value.length > 0) return;
		}
		router.push(
			`/get-quote?treatment_info=${formData.treatment_info}&destination_country=${formData.destination_country.name}&email=${formData.email}`
		);
	};

	return (
		<div className="filter-tours-wrap style3">
			<div className="filter-box">
				<div className="form-group">
					<p className="banner-form">What treatment you need?</p>
					<input
						className={`filter-box-input small-ph ${
							errorMsg.treatment_info && "error-input"
						}`}
						name="treatment_info"
						value={formData.treatment_info}
						onChange={handleChange}
						type="text"
						placeholder="Treatment, Specialities.."
					/>
					{errorMsg.treatment_info && (
						<div className="error-msg">
							{errorMsg.treatment_info}
						</div>
					)}
				</div>
			</div>
			<div className="filter-box">
				<p className="banner-form">Where you want treatment?</p>
				<CountrySelect
					height="50px"
					placeholder="Country"
					error={errorMsg.destination_country}
					value={formData.destination_country}
					handleChange={(value) =>
						handleCountryChange("destination_country", value)
					}
				/>
				{errorMsg.destination_country && (
					<div className="error-msg">
						{errorMsg.destination_country}
					</div>
				)}
			</div>
			<div className="filter-box">
				<div className="form-group">
					<p className="banner-form">Your Email Address</p>
					<input
						className={`filter-box-input small-ph ${
							errorMsg.email && "error-input"
						}`}
						name="email"
						value={formData.email}
						onChange={handleChange}
						type="email"
						placeholder="Your email address"
					/>
					{errorMsg.email && (
						<div className="error-msg">{errorMsg.email}</div>
					)}
				</div>
			</div>
			<div className="filter-box">
				<button
					type="submit"
					className="search-btn banner-btn"
					onClick={handleClick}
				>
					Let's Start
					<i className="ri-logout-circle-r-line"></i>
				</button>
			</div>
		</div>
	);
};

export default TreatmentForm;
