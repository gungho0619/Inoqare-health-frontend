import React, { useState } from "react";
import alert from "../common/Alert";
import axios from "../../axios";
import errorHandler from "../../errorHandler/handler";
import ReCAPTCHA from "react-google-recaptcha";

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [errorMsg, setErrorMsg] = useState({});
  const [recaptchaVerify, setReCaptchaVerify] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
  };

  const handleReCaptcha = () => {
    setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
    setReCaptchaVerify(true);
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
    <div className="row pb-100">
      <div className="col-lg-12">
        <div className="contact-form">
          <div className="section-title style1 text-center mb-30">
            <span>When Your Health is Involved, Leave Nothing to Chance</span>
            <h2>Get in touch with a Inoqare Expert</h2>
          </div>
          <form className="form-wrap" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`form-control ${errorMsg.name && "error-input"}`}
                    value={contact.name}
                    onChange={handleChange}
                  />{" "}
                  {errorMsg.name && (
                    <div className="error-msg">{errorMsg.name}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`form-control ${
                      errorMsg.email && "error-input"
                    }`}
                    value={contact.email}
                    onChange={handleChange}
                  />
                  {errorMsg.email && (
                    <div className="error-msg">{errorMsg.email}</div>
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`form-control ${
                      errorMsg.subject && "error-input"
                    }`}
                    value={contact.subject}
                    onChange={handleChange}
                  />
                  {errorMsg.subject && (
                    <div className="error-msg">{errorMsg.subject}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Write your message..."
                    className={`form-control ${errorMsg.text && "error-input"}`}
                    value={contact.text}
                    onChange={handleChange}
                  />
                  {errorMsg.text && (
                    <div className="error-msg">{errorMsg.text}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <ReCAPTCHA
                    sitekey="6Ld280oeAAAAAJDunzfYMkbKS1E-LeaUOCQkBY2_"
                    onChange={handleReCaptcha}
                  />
                  {errorMsg.recaptchaVerify && (
                    <div className="error-msg">{errorMsg.recaptchaVerify}</div>
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-sm-12">
                <button type="submit" className="btn v5" disabled={submitting}>
                  {submitting && (
                    <div
                      className="spinner-border spinner-border-sm"
                      style={{ marginRight: "10px" }}
                      role="status"
                    ></div>
                  )}
                  {submitting ? "Sending" : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
