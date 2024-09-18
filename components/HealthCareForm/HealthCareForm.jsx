import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CountrySelect from "@components/common/CountrySelect";
import alert from "@components/common/Alert";
import axios from "../../axios";
import CountryCodeSelect from "@components/common/CountryCodeSelect";
import errorHandler from "@errorHandler/handler";

const INITIAL_STATE = {
	type: "",
	// enterprise fields
	enterprise_name: "",
	coverage: "",
	number_of_employees: "",
	contact_person_name: "",
	contact_person_email: "",
	contact_person_phone: "",
	country_code: "",
	// common for both
	country: "",
	remarks: "",
	// employee fields
	employee_name: "",
	organization_name: "",
	employee_email: "",
	employee_country_code: "",
	employee_phone: "",
	organization_contact_person_name: "",
	organization_contact_person_email: "",
	organization_contact_person_country_code: "",
	organization_contact_person_phone: "",
};

const HealthCareForm = () => {
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [back, setBack] = useState(false);
	const [recaptchaVerify, setReCaptchaVerify] = useState(false);
	const [errorMsg, setErrorMsg] = useState({});
	const [submitting, setSubmitting] = useState(false);

	const handleReCaptcha = () => {
		setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
		setReCaptchaVerify(true);
	};

	const nextStep = (e) => {
		e.preventDefault();
		const obj = handleValidationStep1();
		for (const [_, value] of Object.entries(obj)) {
			if (value && value.length > 0) {
				return;
			}
		}
		setBack(true);
	};

	const prevStep = () => {
		setBack(false);
	};

	const handleValidationStep1 = () => {
		const errorObj = {};
		if (formData.type.length === 0) {
			errorObj.type = "Type is required";
		}
		if (formData.type === "enterprise") {
			if (formData.enterprise_name.length === 0) {
				errorObj.enterprise_name = "Enterprise Name is required";
			}
			if (formData.coverage.length === 0) {
				errorObj.coverage = "Coverage is required";
			}
		} else {
			if (formData.employee_name.length === 0) {
				errorObj.employee_name = "Employee Name is required";
			}
			if (formData.organization_name.length === 0) {
				errorObj.organization_name = "Organization Name is required";
			}
		}
		setErrorMsg(errorObj);
		return errorObj;
	};

	const handleValidationStep2 = () => {
		const errorObj = {};
		if (formData.type === "enterprise") {
			if (formData.number_of_employees.length === 0) {
				errorObj.number_of_employees = "No. of Employee is required";
			}
			if (formData.contact_person_name.length === 0) {
				errorObj.contact_person_name = "Name is required";
			}
			if (formData.contact_person_email.length === 0) {
				errorObj.contact_person_email = "Email is required";
			} else if (
				!formData.contact_person_email.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
			) {
				errorObj.contact_person_email = "Email is invalid";
			}
			if (formData.contact_person_phone.length === 0) {
				errorObj.contact_person_phone = "Phone is required";
			} else if (formData.contact_person_phone[0] === "0") {
				errorObj.contact_person_phone = "Please remove starting 0";
			}
			if (formData.country_code.length === 0) {
				errorObj.country_code = "Country code is required";
			}
		} else {
			if (formData.organization_contact_person_name.length === 0) {
				errorObj.organization_contact_person_name = "Name is required";
			}
			if (formData.organization_contact_person_email.length === 0) {
				errorObj.organization_contact_person_email =
					"Email is required";
			} else if (
				!formData.organization_contact_person_email.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
			) {
				errorObj.organization_contact_person_email = "Email is invalid";
			}
			if (formData.employee_email.length === 0) {
				errorObj.employee_email = "Email is required";
			} else if (
				!formData.employee_email.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
			) {
				errorObj.employee_email = "Email is invalid";
			}
			if (formData.organization_contact_person_phone.length === 0) {
				errorObj.organization_contact_person_phone =
					"Phone is required";
			} else if (formData.organization_contact_person_phone[0] === "0") {
				errorObj.organization_contact_person_phone =
					"Please remove starting 0";
			}
			if (
				formData.organization_contact_person_country_code.length === 0
			) {
				errorObj.organization_contact_person_country_code =
					"Country code is required";
			}
			if (formData.employee_phone.length === 0) {
				errorObj.employee_phone = "Phone is required";
			} else if (formData.employee_phone[0] === "0") {
				errorObj.employee_phone = "Please remove starting 0";
			}
			if (formData.employee_country_code.length === 0) {
				errorObj.employee_country_code = "Country code is required";
			}
		}
		if (formData.country.length === 0) {
			errorObj.country = "Country is required";
		}
		if (formData.remarks.length === 0) {
			errorObj.remarks = "Remark is required";
		}
		if (!recaptchaVerify) {
			errorObj.recaptchaVerify = "Recaptcha is required";
		}
		setErrorMsg(errorObj);
		return errorObj;
	};

	const handleCountryChange = (name, value) => {
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "type") setErrorMsg({});
		else setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const obj = handleValidationStep2();
		for (const [_, value] of Object.entries(obj)) {
			if (value && value.length > 0) {
				return;
			}
		}
		const url =
			formData.type === "enterprise"
				? "/contact-enterprise"
				: "/contact-employee";
		errorHandler(
			async () => {
				setSubmitting(true);
				await axios.post(url, {
					...formData,
					country: formData.country.name,
					country_code:
						formData.type === "enterprise"
							? formData.country_code.value.split("-")[1]
							: "",
					employee_country_code:
						formData.type === "employee"
							? formData.employee_country_code.value.split("-")[1]
							: "",
					organization_contact_person_country_code:
						formData.type === "employee"
							? formData.organization_contact_person_country_code.value.split(
									"-"
							  )[1]
							: "",
				});
				setFormData(INITIAL_STATE);
				alert(
					"Congratulations!",
					"Your message was successfully send and will call back you soon",
					"success"
				);
				prevStep();
			},
			null,
			() => setSubmitting(false)
		);
	};

	const key1 = formData.type === "enterprise" ? "enterprise_name" : "employee_name";
	const key2 = formData.type === "enterprise" ? "coverage" : "organization_name";
	return (
		<div className="Login-wrap" style={{ backgroundColor: "white" }}>
		    <div className="login-form">
		        {!back && (
		        <>
		            <div className="login-header bg-minsk">
		                <div className="quote-header">
		                    <h2 className="">1</h2>
                            <span>Basic Information</span>
		                    <h2 className=" quote-header-nonactive">2</h2>
		                </div>
		            </div>
		            <div className="progress" style={{ height: "5px" }}>
		                <div className="progress-bar" role="progressbar" style={{
									width: "50%",
									backgroundColor: "#78D2FF",
								}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
		            </div>
		            <div className="login-body">
		                <form className="form-wrap">
		                    <div className="row">
		                        <div className="col-lg-12">
		                            <div className="form-group">
		                                <select className={`form-control ${ errorMsg.type && "error-input" }`} name="type"
		                                    onChange={handleChange} value={formData.type}>
		                                    <option disabled value="">
		                                        Select Type
		                                    </option>
		                                    <option value="enterprise">
		                                        Enterprise
		                                    </option>
		                                    <option value="employee">
		                                        Employee
		                                    </option>
		                                </select>
		                                {errorMsg.type && (
		                                <div className="error-msg">
		                                    {errorMsg.type}
		                                </div>
		                                )}
		                            </div>
		                        </div>
		                        {formData.type && (
		                        <>
		                            <div className="col-lg-12">
		                                <div className="form-group">
		                                    <input type="text" name={ formData.type==="enterprise" ? "enterprise_name"
		                                        : "employee_name" } placeholder={ formData.type==="enterprise"
		                                        ? "Enterprise Name" : "Employee Name" } className={`form-control ${
		                                        errorMsg[key1] && "error-input" }`} value={ formData.type==="enterprise" ?
		                                        formData.enterprise_name : formData.employee_name } onChange={handleChange} />
		                                    {errorMsg[key1] && (
		                                    <div className="error-msg">
		                                        {errorMsg[key1]}
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                            <div className="col-lg-12">
		                                <div className="form-group">
		                                    <input type="text" name={ formData.type==="enterprise" ? "coverage"
		                                        : "organization_name" } placeholder={ formData.type==="enterprise"
		                                        ? "Coverage" : "Organization Name" } className={`form-control ${
		                                        errorMsg[key2] && "error-input" }`} value={ formData.type==="enterprise" ?
		                                        formData.coverage : formData.organization_name } onChange={handleChange} />
		                                    {errorMsg[key2] && (
		                                    <div className="error-msg">
		                                        {errorMsg[key2]}
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                        </>
		                        )}
		                        <div className="col-lg-12 col-sm-12">
		                            <button onClick={nextStep} className="btn v5">
		                                Next Step
		                            </button>
		                        </div>
		                    </div>
		                </form>
		            </div>
		        </>
		        )}
		        {/* ---------------aditonal info steps------------------------------ */}
		        {back && (
		        <>
		            <div className="login-header bg-minsk">
		                <div className="quote-header">
		                    <h2 className=" quote-header-nonactive">1</h2>{" "}
		                    <span>Additional Information</span>
		                    <h2 className="">2</h2>
		                </div>
		            </div>
		            <div className="progress" style={{ height: "5px" }}>
		                <div className="progress-bar" role="progressbar" style={{
									width: "100%",
									backgroundColor: "#78D2FF",
								}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
		            </div>
		            <div className="login-body">
		                <form className="form-wrap">
		                    {" "}
		                    <div className="row">
		                        {formData.type === "enterprise" ? (
		                        <>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <input className={`form-control ${ errorMsg.number_of_employees && "error-input"
		                                        }`} name="number_of_employees" type="number" placeholder="Number of Employees"
		                                        value={ formData.number_of_employees } onChange={handleChange} />
		                                    {errorMsg.number_of_employees && (
		                                    <div className="error-msg">
		                                        {
		                                        errorMsg.number_of_employees
		                                        }
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <input className={`form-control ${ errorMsg.contact_person_name && "error-input"
		                                        }`} name="contact_person_name" type="text" placeholder="Contact Person Name"
		                                        value={ formData.contact_person_name } onChange={handleChange} />
		                                    {errorMsg.contact_person_name && (
		                                    <div className="error-msg">
		                                        {
		                                        errorMsg.contact_person_name
		                                        }
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <input className={`form-control ${ errorMsg.contact_person_email && "error-input"
		                                        }`} name="contact_person_email" type="text" placeholder="Contact Person Email"
		                                        value={ formData.contact_person_email } onChange={handleChange} />
		                                    {errorMsg.contact_person_email && (
		                                    <div className="error-msg">
		                                        {
		                                        errorMsg.contact_person_email
		                                        }
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <CountrySelect inputSx={{
															padding: "0",
															margin: "0",
														}} placeholder="Country" error={errorMsg.country} value={formData.country} handleChange={(value)=>
		                                        handleCountryChange(
		                                        "country",
		                                        value
		                                        )
		                                        }
		                                        />
		                                        {errorMsg.country && (
		                                        <div className="error-msg">
		                                            {errorMsg.country}
		                                        </div>
		                                        )}
		                                </div>
		                            </div>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <CountryCodeSelect setFormData={ setFormData } value={ formData.country_code } />
		                                </div>
		                            </div>
		                            <div className="col-lg-6">
		                                <div className="form-group">
		                                    <input className={`form-control ${ errorMsg.contact_person_phone && "error-input"
		                                        }`} name="contact_person_phone" type="number" value={
		                                        formData.contact_person_phone } onChange={handleChange}
		                                        placeholder="Contact Person Phone Number" />
		                                    {errorMsg.contact_person_phone && (
		                                    <div className="error-msg">
		                                        {
		                                        errorMsg.contact_person_phone
		                                        }
		                                    </div>
		                                    )}
		                                </div>
		                            </div>
		                            <div className="col-lg-12">
		                                <div className="form-group">
		                                    <textarea name="remarks" cols="30" rows="6" placeholder="Any Other Information..."
		                                        className={`form-control ${ errorMsg.remarks && "error-input" }`}
		                                        value={formData.remarks} onChange={handleChange} />
		                                    {errorMsg.remarks && (
														<div className="error-msg">
															{errorMsg.remarks}
														</div>
													)}
												</div>
											</div>
										</>
									) : (
										<>
											<div className="col-lg-12">
												<div className="form-group">
													<input
														className={`form-control ${
															errorMsg.employee_email &&
															"error-input"
														}`}
														name="employee_email"
														type="text"
														placeholder="Employee Email"
														value={
															formData.employee_email
														}
														onChange={handleChange}
													/>{" "}
													{errorMsg.employee_email && (
														<div className="error-msg">
															{
																errorMsg.employee_email
															}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<CountryCodeSelect
														setFormData={
															setFormData
														}
														name="employee_country_code"
														value={
															formData.employee_country_code
														}
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<input
														className={`form-control ${
															errorMsg.employee_phone &&
															"error-input"
														}`}
														name="employee_phone"
														type="number"
														value={
															formData.employee_phone
														}
														onChange={handleChange}
														placeholder="Employee Phone Number"
													/>
													{errorMsg.employee_phone && (
														<div className="error-msg">
															{
																errorMsg.employee_phone
															}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<input
														className={`form-control ${
															errorMsg.organization_contact_person_name &&
															"error-input"
														}`}
														name="organization_contact_person_name"
														type="text"
														placeholder="Organization Contact Person Name"
														value={
															formData.organization_contact_person_name
														}
														onChange={handleChange}
													/>{" "}
													{errorMsg.organization_contact_person_name && (
														<div className="error-msg">
															{
																errorMsg.organization_contact_person_name
															}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<input
														className={`form-control ${
															errorMsg.organization_contact_person_email &&
															"error-input"
														}`}
														name="organization_contact_person_email"
														type="text"
														placeholder="Organization Contact Person Email"
														value={
															formData.organization_contact_person_email
														}
														onChange={handleChange}
													/>{" "}
													{errorMsg.organization_contact_person_email && (
														<div className="error-msg">
															{
																errorMsg.organization_contact_person_email
															}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<CountryCodeSelect
														name="organization_contact_person_country_code"
														setFormData={
															setFormData
														}
														value={
															formData.organization_contact_person_country_code
														}
													/>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<input
														className={`form-control ${
															errorMsg.organization_contact_person_phone &&
															"error-input"
														}`}
														name="organization_contact_person_phone"
														type="number"
														value={
															formData.organization_contact_person_phone
														}
														onChange={handleChange}
														placeholder="Organization Phone Number"
													/>{" "}
													{errorMsg.organization_contact_person_phone && (
														<div className="error-msg">
															{
																errorMsg.organization_contact_person_phone
															}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<CountrySelect
														inputSx={{
															padding: "0",
															margin: "0",
														}}
														placeholder="Country"
														error={errorMsg.country}
														value={formData.country}
														handleChange={(value) =>
															handleCountryChange(
																"country",
																value
															)
														}
													/>
													{errorMsg.country && (
														<div className="error-msg">
															{errorMsg.country}
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<textarea
														name="remarks"
														cols="30"
														rows="6"
														placeholder="Any Other Information..."
														className={`form-control ${
															errorMsg.remarks &&
															"error-input"
														}`}
														value={formData.remarks}
														onChange={handleChange}
													/>{" "}
													{errorMsg.remarks && (
														<div className="error-msg">
															{errorMsg.remarks}
														</div>
													)}
												</div>
											</div>
										</>
									)}
									<div className="col-lg-12">
										<div className="form-group">
											<ReCAPTCHA
												sitekey="6Ld280oeAAAAAJDunzfYMkbKS1E-LeaUOCQkBY2_"
												onChange={handleReCaptcha}
											/>
											{errorMsg.recaptchaVerify && (
												<div className="error-msg">
													{errorMsg.recaptchaVerify}
												</div>
											)}
										</div>
									</div>
									<div className="col-lg-6 col-sm-6">
										<button
											onClick={prevStep}
											className="btn v5"
										>
											Back
										</button>
									</div>
									<div className="col-lg-6 col-sm-6">
										<button
											onClick={handleSubmit}
											className="btn v5"
											disabled={submitting}
										>
											{submitting && (
												<div
													className="spinner-border spinner-border-sm"
													style={{
														marginRight: "10px",
													}}
													role="status"
												></div>
											)}
											{submitting
												? "Submitting"
												: "Submit"}
										</button>
									</div>
								</div>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default HealthCareForm;
