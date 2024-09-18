import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "../../axios";

import CountryCodeSelect from '../common/CountryCodeSelect';
import CountrySelect from '../common/CountrySelect';
import errorHandler from '../../errorHandler/handler';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  changeSalutation,
  changePhone,
  changeCountryCode,
  changeEmail,
  changeSourceCountry,
  changeFirstName,
  getFormData,
  incStep,
  decStep,
} from '../../store/priceSlice';

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
  specialty: "",
};

const StepSix = () => {
  const formData1 = useSelector(getFormData);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [salutation, setSalutation] = useState(formData.salutation);
  const [first_name, setFirstName] = useState(formData.first_name);
  const [phone, setPhone] = useState(formData.phone);
  const [email] = useState(formData.email);
  const [localFormData, setLocalFormData] = useState({
    country_code: formData.country_code
  });

  const [recaptchaVerify, setReCaptchaVerify] = useState(false);

  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState({});

  useEffect(() => {    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone')
      setPhone(value);
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

  const prevStep = (e) => {
    e.preventDefault();

    dispatch(decStep());
  }

  const nextStep = (e) => {
    e.preventDefault();

    const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }
    console.log(formData);
    console.log(formData1);

    axios.post("/quote", {
      ...formData,  formData1,
      source_country: formData.source_country.name,
      treatment_info: formData1.rootSpecialty.label,
      specialty: formData1.specialty.label,
      destination_country: formData1.country.label,
      phone: formData.phone,
      email: formData.email,
    });
    setFormData(INITIAL_STATE);
    
    dispatch(changeCountryCode(localFormData.country_code.value.split("-")[1]));
    dispatch(changePhone(phone));
    dispatch(changeEmail(email));
    dispatch(changeSourceCountry(formData.source_country));
    dispatch(changeSalutation(salutation));
    dispatch(changeFirstName(first_name));

    dispatch(incStep());
  };
  
  function onChangeValue(event) {
    setSalutation(event.target.value);
    console.log(event.target.value);
  };

  const handleValidation = () => {
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
    if (formData.email.length === 0) {
      errorObj.email = "Email is required";
    } else if (
      !formData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorObj.email = "Email is invalid";
    }
    if (!recaptchaVerify) {
      errorObj.recaptchaVerify = "Recaptcha is required";
    }
    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
      <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >Your information</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "85.72%", backgroundColor: "#78D2FF" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-body">
        <form className="form-wrap">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 mb-20">

              <div onChange={onChangeValue}>
                <input
                className={`form-check-input ${
                  errorMsg.salutation && "error-input"
                }`}
                style={{ marginLeft: "20px" }}
                type="radio"
                id="mr"
                value="Mr."
                name="salutation"
                onChange={handleChange}
                checked={salutation === "Mr."}
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
                checked={salutation === "Mrs."}
              />
              <label htmlFor="mrs" style={{ marginLeft: "10px" }}>
                Mrs.
              </label>
              {errorMsg.salutation && (
                <div className="error-msg">{errorMsg.salutation}</div>
              )} 
            </div>

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
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className={`form-control ${
                    errorMsg.email && "error-input"
                  }`}
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errorMsg.email && (
                  <div className="error-msg">
                    {errorMsg.email}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 select-country-code">
                        <div className="form-group">
                        <CountryCodeSelect
                  setFormData={setLocalFormData}
                  value={localFormData.country_code}
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
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number (without zero)"
                />
                {errorMsg.phone && (
                  <div className="error-msg">{errorMsg.phone}</div>
                )}
              </div>
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

          <div className="container">
          <div className="row">
            <div className="col col-lg-2">
              <button onClick={prevStep} className="btn v10">
                Prev
              </button>
            </div>
            <div className="col">
            	<button onClick={nextStep} className="btn v6">
                Next
              </button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
	);
};

export default StepSix;