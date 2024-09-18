import React, { useState } from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import axios from "../../axios";
import errorHandler from "../../errorHandler/handler";
import alert from "../common/Alert";
import ReCAPTCHA from "react-google-recaptcha";

const INITIAL_STATE = {
	name: "",
	email: "",
	subject: "",
	text: "",
};

const AdventureTour = ({ heading, para }) => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const [errorMsg, setErrorMsg] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [recaptchaVerify, setReCaptchaVerify] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleValidation = () => {
		const errorObj = {};
		if (contact.name.length === 0) {
			errorObj.name = "Name is required";
		}
		if (contact.email.length === 0) {
			errorObj.email = "Email is required";
		} else if (
			!contact.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			errorObj.email = "Email is invalid";
		}
		if (contact.subject.length === 0) {
			errorObj.subject = "Subject is required";
		}
		if (contact.text.length === 0) {
			errorObj.text = "Message is required";
		}
		if (!recaptchaVerify) {
			errorObj.recaptchaVerify = "Recaptcha is required";
		}
		setErrorMsg(errorObj);
		return errorObj;
	};

	const handleReCaptcha = () => {
		setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
		setReCaptchaVerify(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const obj = handleValidation();
		for (const [_, value] of Object.entries(obj)) {
			if (value && value.length > 0) {
				return;
			}
		}
		errorHandler(
			async () => {
				setSubmitting(true);
				await axios.post("/contact-form", contact);
				setContact(INITIAL_STATE);
				alert(
					"Congratulations!",
					"Your message was successfully send and will back to you soon",
					"success"
				);
			},
			null,
			() => setSubmitting(false)
		);
	};

	return (
		<div className="page-wrapper mt-20 pb-50">
			<div className="adventure-tour-wrap">
				<div className="container">
					<div className="section-title style1 mb-40 text-center">
						<h2 className="mb-2">{heading}</h2>
						<p>{para}</p>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-f tour-bg-4 d-flex align-items-center py-small">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="tour-shape-two d-none d-md-block end-0 top-50" style={{transform: 'translate(16px, -50%)' }}>
							<img src="/images/tour/shape-5.png" alt="Image" />
						</div>
						<div className="px-2 bg-white p-4 p-sm-5 radius-10">
							<form className="form-wrap" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-6 d-flex flex-column justify-content-center">
										<div className="form-group">
											<input type="text" name="name" placeholder="Name" className={`form-control ${
												errorMsg.name && "error-input" }`} value={contact.name}
												onChange={handleChange} />{" "}
											{errorMsg.name && (
											<div className="error-msg">
												{errorMsg.name}
											</div>
											)}
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<input type="text" name="email" placeholder="Email" 
												className={`form-control ${errorMsg.email && "error-input" }`} value={contact.email}
												onChange={handleChange} />
											{errorMsg.email && (
											<div className="error-msg">
												{errorMsg.email}
											</div>
											)}
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<input type="text" name="subject" placeholder="Subject" className={`form-control ${
												errorMsg.subject && "error-input" }`} value={contact.subject}
												onChange={handleChange} />
											{errorMsg.subject && (
											<div className="error-msg">
												{errorMsg.subject}
											</div>
											)}
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<textarea name="text" cols="30" rows="6" placeholder="Write your message..."
												className={`form-control ${ errorMsg.text && "error-input" }`}
												value={contact.text} onChange={handleChange} />
											{errorMsg.text && (
											<div className="error-msg">
												{errorMsg.text}
											</div>
											)}
										</div>
									</div>
									<div className="col-xl-6">
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
									<div className="col-xl-6">
										<button type="submit" className="btn v5" disabled={submitting}>
											{submitting && (
												<div className="spinner-border spinner-border-sm" style={{ marginRight: "10px" }} role="status"></div>
											)}
											{submitting ? "Sending" : "Send Message"}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdventureTour;
