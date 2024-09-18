import React, { useState } from "react";
import Link from "next/link";
import axios from "../../axios";
import ReCAPTCHA from "react-google-recaptcha";
import alert from "../common/Alert";
import errorHandler from "../../errorHandler/handler";
import Password from "../FormElements/Password";
import { clientId, onSuccess } from "./GoogleAuth";
import { useGoogleLogin } from "react-google-login";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginArea = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [recaptchaVerify, setReCaptchaVerify] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleValidation = () => {
    const errorObj = {};
    if (formData.email.length === 0) {
      errorObj.email = "Email is required";
    } else if (
      !formData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorObj.email = "Email is invalid";
    }
    if (formData.password.length === 0) {
      errorObj.password = "Password is required";
    }
    if (!recaptchaVerify) {
      errorObj.recaptchaVerify = "Recaptcha is required";
    }
    setErrorMsg(errorObj);
    return errorObj;
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }

    errorHandler(
      async () => {
        setSubmitting(true);
        const { data } = await axios.post("/user/login", formData);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.data));
        alert("Authenticated", "User logged in successfully", "success");
        setTimeout(() => {
          window.location = "/quote-list";
        }, 2000);
      },
      null,
      () => {
        setSubmitting(false);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
  };
  const handleReCaptcha = () => {
    setErrorMsg((prevState) => ({ ...prevState, recaptchaVerify: null }));
    setReCaptchaVerify(true);
  };
  const responseFacebook = (response) => {
    console.log("fb login", response);
  };
  const onResponse = (resp) => {
    console.log("login page", resp);
    console.log(resp.profileObj);
    const userData = resp.profileObj;
    if (userData) {
      // const sendData= {
      //     first_name: userData.name,
      //     middle_name: userData.givenName,
      //     last_name: userData.givenName,
      //     email:"deekshainbox1001@gmail.com",
      //     user_name: userData.givenName,
      //   };
      const sendData = {
        salutation: "Mr.",
        first_name: userData.name,
        middle_name: userData.givenName,
        last_name: userData.givenName,
        email: userData.email,
        //email:"deekshainbox1006@gmail.com",
        country_code: "+91",
        phone: "123456",
        password: "123456",
        address: "indore",
        user_name: userData.givenName,
      };
      registerSubmit(sendData);
    }
  };
  const registerSubmit = async (event) => {
    // register user on backend
    try {
      const { data } = await axios.post("/user/register", event);
      //console.log('data dataRegister',data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data));
      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-white">Log In</h2>
                <span>Keep Connected With Us</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className={`form-control ${
                            errorMsg.email && "error-input"
                          }`}
                          name="email"
                          type="email"
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
                    <div className="col-lg-6 col-md-6 col-6">
                      <div className="form_group mb-20">
                        <input type="checkbox" id="test_1" />
                        <label htmlFor="test_1">Remember Me</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 text-end mb-20">
                      <Link href="/forgot-password">
                        <a className="link">Forgot Password?</a>
                      </Link>
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
                        <button className="btn v7" disabled={submitting}>
                          {submitting && (
                            <div
                              className="spinner-border spinner-border-sm"
                              style={{ marginRight: "10px" }}
                              role="status"
                            ></div>
                          )}
                          {submitting ? "Logging In" : "Log In"}
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group text-center">
                        <span className="or">Or Login With</span>
                      </div>
                    </div>
                    {/*<div className="col-lg-12">
                      <div className="form-group">
                        <ul className="social-profile v3 text-center mt-0">
                          <li>
                            <a target="_blank" href="https://instagram.com">
                              <i className="lab la-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://twitter.com">
                              <i className="lab la-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="https://facebook.com">
                              <i className="lab la-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <ReactGoogleLogin
                              buttonText="Login"
                              onSuccess={onResponse}
                        {onResponse}
                              redirectUri="http://localhost:3000"
                              clientId={clientId}
                            />
                          </li>
                        </ul>

                        <FacebookLogin
                          appId="1024247571492634"
                          autoLoad={false}
                          fields="name,email"
                          callback={responseFacebook}
                        />
                      </div>
                    </div>*/}
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
                    <div className="col-md-12 text-center">
                      <p className="mb-0">
                        Don’t Have an Account?{" "}
                        <Link href="/register">
                          <a className="link">Create One</a>
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

export default LoginArea;
