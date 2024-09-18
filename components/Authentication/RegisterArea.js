import React, { useState } from "react";
import Link from "next/link";
import axios from "../../axios";
import CountryCodeSelect from "../common/CountryCodeSelect";
import ReCAPTCHA from "react-google-recaptcha";
import alert from "../common/Alert";
import errorHandler from "../../errorHandler/handler";
import Password from "../FormElements/Password";
import { useGoogleLogin } from "react-google-login";
import { clientId, onSuccess } from "./GoogleAuth";

// Form initial state
const INITIAL_STATE = {
  salutation: "",
  first_name: "",
  last_name: "",
  email: "",
  country_code: "",
  phone: "",
  password: "",
  terms: false,
  confirmPassword: "",
};

const RegisterArea = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [recaptchaVerify, setReCaptchaVerify] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitting, setSubmitting] = useState(false);

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
    if (formData.email.length === 0) {
      errorObj.email = "Email is required";
    } else if (
      !formData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorObj.email = "Email is invalid";
    }
    if (formData.country_code.length === 0) {
      errorObj.country_code = "Country Code is Required";
    }
    if (formData.phone.length === 0) {
      errorObj.phone = "Phone is required";
    } else if (formData.phone[0] === "0") {
      errorObj.phone = "Please remove the first zero";
    }
    if (formData.password.length === 0) {
      errorObj.password = "Password is required";
    } else if (formData.password.length < 6) {
      errorObj.password = "Password length should be atleast 6 characters";
    }
    if (formData.confirmPassword.length === 0) {
      errorObj.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errorObj.confirmPassword = "Password did not match";
    }
    if (!recaptchaVerify) {
      errorObj.recaptchaVerify = "Recaptcha is required";
    }
    if (!formData.terms) {
      errorObj.terms = "Please check this box";
    }
    setErrorMsg(errorObj);
    return errorObj;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }
    // register user on backend
    errorHandler(
      async () => {
        setSubmitting(true);
        const { data } = await axios.post("/user/register", {
          ...formData,
          country_code: formData.country_code.value.split("-")[1],
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.data));
        alert(
          "Authenticated",
          "User has been registered successfully",
          "success"
        );
        setTimeout(() => {
          window.location = "/quote-list";
        }, 2000);
      },
      (ex) => {
        const erMsg = ex.response.data.error;
        if (erMsg && erMsg.includes("Duplicate"))
          alert(
            "Error",
            "Account Already Exist! Please reset using Forgot Password",
            "error"
          );
      },
      () => {
        setSubmitting(false);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "terms")
      setFormData((prevState) => ({ ...prevState, [name]: checked }));
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
  });

  const handleReCaptcha = () => {
    setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
    setReCaptchaVerify(true);
  };

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-white">Register</h2>
                <span>Get Start With Us</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={handleSubmit}>
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
                          <div className="error-msg">{errorMsg.first_name}</div>
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
                          <div className="error-msg">{errorMsg.last_name}</div>
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className={`form-control ${
                            errorMsg.email && "error-input"
                          }`}
                          name="email"
                          type="text"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errorMsg.email && (
                          <div className="error-msg">{errorMsg.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Password
                        value={formData.password}
                        handleChange={handleChange}
                        error={errorMsg.password}
                        name="password"
                      />
                    </div>
                    <div className="col-lg-12">
                      <Password
                        value={formData.confirmPassword}
                        handleChange={handleChange}
                        error={errorMsg.confirmPassword}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form_group mb-20">
                        <input
                          type="checkbox"
                          id="test_2"
                          name="terms"
                          value={formData.terms}
                          onChange={handleChange}
                        />
                        <label htmlFor="test_2">
                          I agree to terms and conditions
                        </label>
                        {errorMsg.terms && (
                          <div className="error-msg">{errorMsg.terms}</div>
                        )}
                      </div>
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn v6" disabled={submitting}>
                          {submitting && (
                            <div
                              className="spinner-border spinner-border-sm"
                              style={{ marginRight: "10px" }}
                              role="status"
                            ></div>
                          )}
                          {submitting ? "Registering" : "Register"}
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group text-center">
                        <span className="or">Or Register With</span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group row text-center">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                          <a className="g-fbbtn btn btn-primary btn-block">
                            <i className="lab la-facebook-f"></i>
                            Sign in with <b>Facebook</b>
                          </a>
                        </div>
                        <div className="col-lg-3"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group row text-center">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6" onClick={signIn}>
                          <a className="g-glebtn btn btn-danger btn-block">
                            <i className="lab fab la-google-plus-g"></i> Sign in
                            with <b>Google</b>
                          </a>
                        </div>
                        <div className="col-lg-3"></div>
                      </div>
                    </div>

                    {/*<div className="col-lg-12">
                      <div className="form-group text-center">
                      <FacebookLogin
                          appId="1024247571492634"
                          autoLoad={false}
                          fields="name,email"
                          callback={responseFacebook}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group text-center">
                      <ReactGoogleLogin className="btn btn-danger btn-block"
                              buttonText="Sign in with Google"
                              onSuccess={onResponse}
                        {onResponse}
                              redirectUri="http://localhost:3000"
                               clientId={clientId}
                            />
                      </div>
                    </div>*/}

                    <div className="col-md-12 text-center">
                      <p className="mb-0">
                        Already Have An Account?{" "}
                        <Link href="/log-in">
                          <a className="link">Login</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
