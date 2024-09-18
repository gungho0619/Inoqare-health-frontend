import React, { useState } from "react";
import CountryCodeSelect from "../common/CountryCodeSelect";
import axios from "../../axios";
import alert from "../common/Alert";
import errorHandler from "../../errorHandler/handler";
import ReCAPTCHA from "react-google-recaptcha";

// Form initial state
const INITIAL_STATE = {
  user_type: "",
  organization_name: "",
  contact_person_name: "",
  contact_person_email: "",
  contact_person_country_code: "",
  contact_person_phone: "",
};

export default function Form({ user_type }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [recaptchaVerify, setReCaptchaVerify] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleReCaptcha = () => {
    setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
    setReCaptchaVerify(true);
  };
  const handleValidation = () => {
    const errorObj = {};
    if (formData.organization_name.length === 0) {
      errorObj.organization_name = "Organization Name is required";
    }
    if (formData.contact_person_name.length === 0) {
      errorObj.contact_person_name = "Person Name is required";
    }
    if (formData.contact_person_email.length === 0) {
      errorObj.email = "Email is required";
    } else if (
      !formData.contact_person_email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorObj.email = "Email is invalid";
    }
    if (formData.contact_person_country_code.length === 0) {
      errorObj.country_code = "Country Code is Required";
    }
    if (formData.contact_person_phone.length === 0) {
      errorObj.phone = "Phone is required";
    } else if (formData.contact_person_phone[0] === "0") {
      errorObj.phone = "Please remove the first zero";
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
    formData.user_type = user_type;
    errorHandler(
      async () => {
        setSubmitting(true);
        const { data } = await axios.post("/contact-partner", {
          ...formData,
          contact_person_country_code:
            formData.contact_person_country_code.value.split("-")[1],
        });
        setFormData(INITIAL_STATE);
        alert(
          "Congratulations!",
          "Your message was successfully send and will call back you soon",
          "success"
        );
      },
      null,
      () => setSubmitting(false)
    );
  };
  return (
    <section className="Login-wrap" style={{ backgroundColor: "white" }}>
      <div className="login-form">
        {" "}
        <div className="login-header bg-minsk">
          <h2 className="fs-24 fw-600 text-white">  Get Registered as{" "}
            {user_type === "broker" ? "Broker" : "Medical Partner"}
          </h2>
        </div>
        <div className="login-body">
          <form className="form-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    type="text"
                    className={`form-control ${
                      errorMsg.organization_name && "error-input"
                    }`}
                    placeholder="Organization Name"
                  />
                  {errorMsg.organization_name && (
                    <div className="error-msg">
                      {errorMsg.organization_name}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="contact_person_name"
                    value={formData.contact_person_name}
                    onChange={handleChange}
                    type="text"
                    className={`form-control ${
                      errorMsg.contact_person_name && "error-input"
                    }`}
                    placeholder="Contact Person Name"
                  />
                  {errorMsg.contact_person_name && (
                    <div className="error-msg">
                      {errorMsg.contact_person_name}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <input
                  name="contact_person_email"
                  value={formData.contact_person_email}
                  onChange={handleChange}
                  type="text"
                  className={`form-control ${errorMsg.email && "error-input"}`}
                  placeholder="Contact Person Email"
                />
                {errorMsg.email && (
                  <div className="error-msg">{errorMsg.email}</div>
                )}
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <CountryCodeSelect
                    name="contact_person_country_code"
                    value={formData.contact_person_country_code}
                    setFormData={setFormData}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="contact_person_phone"
                    value={formData.contact_person_phone}
                    onChange={handleChange}
                    type="number"
                    className={`form-control ${
                      errorMsg.phone && "error-input"
                    }`}
                    placeholder="Contact Person Phone"
                  />
                  {errorMsg.phone && (
                    <div className="error-msg">{errorMsg.phone}</div>
                  )}
                </div>{" "}
              </div>
              <div className="col-lg-12">
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
              <div className="form-group">
                <button
                  onClick={handleSubmit}
                  className="btn v5"
                  disabled={submitting}
                >
                  {submitting && (
                    <div
                      className="spinner-border spinner-border-sm"
                      style={{ marginRight: "10px" }}
                      role="status"
                    ></div>
                  )}
                  {submitting ? "Submitting" : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
