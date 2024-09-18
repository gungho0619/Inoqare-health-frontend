import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CountryCodeSelect from "../common/CountryCodeSelect";
import axios from "../../axios";
import CountrySelect from "../common/CountrySelect";
import errorHandler from "../../errorHandler/handler";
import ReCAPTCHA from "react-google-recaptcha";
import country_data from "../../data/country_code";

// Form initial state
const INITIAL_STATE = {
  treatment_info: "",
  destination_country: "",
  email: "",
  phone: "",
  salutation: "",
  country_code: "",
  first_name: "",
  last_name: "",
  source_country: "",
};

const GetQuoteForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [back, setBack] = useState(false);
  const [recaptchaVerify, setReCaptchaVerify] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleValidationStep1 = () => {
    const errorObj = {};
    // treatment info
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

  const handleValidationStep2 = () => {
    const errorObj = {};
    //salutaion validation
    if (formData.salutation.length === 0) {
      errorObj.salutation = "Salutation is required";
    }
    // name validation
    if (formData.first_name.length === 0) {
      errorObj.first_name = "First Name is required";
    }
    if (formData.last_name.length === 0) {
      errorObj.last_name = "Last Name is required";
    }
    if (formData.phone.length === 0) {
      errorObj.phone = "Phone is required";
    } else if (formData.phone[0] === "0") {
      errorObj.phone = "Please remove the first zero";
    }
    if (formData.source_country.length === 0) {
      errorObj.source_country = "Residence country is required";
    }
    if (!recaptchaVerify) {
      errorObj.recaptchaVerify = "Recaptcha is required";
    }
    setErrorMsg(errorObj);
    return errorObj;
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

  useEffect(() => {
    const { treatment_info, email, destination_country } = router.query;
    if (treatment_info && email && destination_country) {
      setFormData({
        ...formData,
        treatment_info,
        email,
        destination_country: country_data.find(
          (i) => i.name === destination_country
        ),
      });
      setBack(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
  };

  const handleCountryChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
  };

  const handleReCaptcha = () => {
    setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
    setReCaptchaVerify(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = handleValidationStep2();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }
    errorHandler(
      async () => {
        setSubmitting(true);
        await axios.post("/quote", {
          ...formData,
          destination_country: formData.destination_country.name,
          source_country: formData.source_country.name,
          country_code: formData.country_code.value.split("-")[1],
        });
        setFormData(INITIAL_STATE);
        setBack(false);
        router.push("/quote-success");
      },
      null,
      () => setSubmitting(false)
    );
  };

  return (
    <section className="Login-wrap quoteForm">
      <div className="container">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="login-form">
            {/* ----------------------personal info steps ----------------*/}
            {!back && (
              <>
                <div className="login-header bg-minsk">
                  <div className="quote-header">
                    <h2>1</h2> <span>Personal Information</span>
                    <h2 className="quote-header-nonactive">2</h2>
                  </div>
                </div>
                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%", backgroundColor: "#78D2FF" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="login-body">
                  <form className="form-wrap">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="treatment_info"
                            placeholder="Treatment Type"
                            className={`form-control ${
                              errorMsg.treatment_info && "error-input"
                            }`}
                            value={formData.treatment_info}
                            onChange={handleChange}
                          />
                          {errorMsg.treatment_info && (
                            <div className="error-msg">
                              {errorMsg.treatment_info}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-12"
                        style={{ marginBottom: "25px" }}
                      >
                        <CountrySelect
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
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`form-control ${
                              errorMsg.email && "error-input"
                            }`}
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errorMsg.email && (
                            <div className="error-msg">{errorMsg.email}</div>
                          )}
                        </div>
                      </div>
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
                    <h2 className="quote-header-nonactive">1</h2>{" "}
                    <span>Additional Infos</span>
                    <h2>2</h2>
                  </div>
                </div>
                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", backgroundColor: "#78D2FF" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="login-body">
                  <form className="form-wrap">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-12 mb-20">
                        <input
                          className={`form-check-input ${
                            errorMsg.salutation && "error-input"
                          }`}
                          type="radio"
                          value="Mr."
                          id="mr"
                          name="salutation"
                          onChange={handleChange}
                        />
                        <label htmlFor="mr" style={{ marginLeft: "10px" }}>
                          Mr.
                        </label>

                        <input
                          className={`form-check-input ${
                            errorMsg.salutation && "error-input"
                          }`}
                          style={{ marginLeft: "20px" }}
                          type="radio"
                          id="mrs"
                          value="Mrs."
                          name="salutation"
                          onChange={handleChange}
                        />
                        <label htmlFor="mrs" style={{ marginLeft: "10px" }}>
                          Mrs.
                        </label>
                        {errorMsg.salutation && (
                          <div className="error-msg">{errorMsg.salutation}</div>
                        )}
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errorMsg.first_name && "error-input"
                            }`}
                            name="first_name"
                            type="text"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                          {errorMsg.first_name && (
                            <div className="error-msg">
                              {errorMsg.first_name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errorMsg.last_name && "error-input"
                            }`}
                            name="last_name"
                            type="text"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                          {errorMsg.last_name && (
                            <div className="error-msg">
                              {errorMsg.last_name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 select-country-code">
                        <div className="form-group">
                          <CountryCodeSelect
                            setFormData={setFormData}
                            value={formData.country_code}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errorMsg.phone && "error-input"
                            }`}
                            name="phone"
                            type="number"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number (without zero)"
                          />
                          {errorMsg.phone && (
                            <div className="error-msg">{errorMsg.phone}</div>
                          )}
                        </div>
                      </div>
                      <div
                        className="col-lg-12"
                        style={{ marginBottom: "25px" }}
                      >
                        <CountrySelect
                          error={errorMsg.source_country}
                          value={formData.source_country}
                          placeholder = 'What country are you from?'
                          handleChange={(value) =>
                            handleCountryChange("source_country", value)
                          }
                        />
                        {errorMsg.source_country && (
                          <div className="error-msg">
                            {errorMsg.source_country}
                          </div>
                        )}
                      </div>
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
                      <div className="col-6">
                        <button onClick={prevStep} className="btn v5">
                          Back
                        </button>
                      </div>
                      <div className="col-6">
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
                          {submitting ? "Getting Quote" : "Get Quote"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteForm;
