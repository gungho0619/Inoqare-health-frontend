import React, { useState, useContext, useEffect } from "react";
import useSWR from "swr";
import MyAccountNavbar from "../components/MyAccount/MyAccountNavbar";
import AuthContext from "../context/authContext";
import fetcher from "../fetcher/getFetcher";
import axios from "../axios";
import CountryCodeSelect from "../components/common/CountryCodeSelect";
import alert from "../components/common/Alert";
import errorHandler from "../errorHandler/handler";
import Password from "../components/FormElements/Password";

// Form initial state
const INITIAL_STATE = {
  salutation: "",
  first_name: "",
  last_name: "",
  email: "",
  country_code: "",
  phone: "",
};

const ChangePassword = () => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState(INITIAL_STATE);
  const authData = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const [change, setChange] = useState(false);
  const { data, error } = useSWR(
    authData.user ? `/user/info/${authData.user._id}` : null,
    fetcher
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange(true);
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
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
    if (formData.country_code.length === 0) {
      errorObj.country_code = "Country Code is required";
    }
    setErrorMsg(errorObj);
    return errorObj;
  };

  useEffect(() => {
    if (data) {
      const userData = data.data;
      const formDataObj = {};
      formDataObj.salutation = userData.salutation || "";
      formDataObj.first_name = userData.first_name || "";
      formDataObj.last_name = userData.last_name || "";
      formDataObj.phone = userData.phone || "";
      formDataObj.email = userData.email || "";
      formDataObj.username = userData.username || "";
      formDataObj.country_code = userData.country_code || "";
      setUser(userData);
      setFormData(formDataObj);
    } else if (error) {
      alert("Error", error.response.data.error, "error");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }
    if (!change) return;
    const originalValue = formData.country_code;
    errorHandler(
      async () => {
        setSubmitting(true);
        const { data } = await axios.put(
          `/user/info/${user._id}`,
          {
            ...formData,
            country_code: formData.country_code.value.split("-")[1],
          },
          {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
          }
        );
        if (data.success) {
          alert("Success", "Profile Updated Successfully", "success");
        } else {
          alert("Error", "An error occured", "error");
        }
        setFormData((prevState) => ({
          ...prevState,
          country_code: originalValue,
        }));
      },
      null,
      () => {
        setChange(false);
        setSubmitting(false);
      }
    );
  };

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content">
                <div>
                  <h2 className="account-title">Profile</h2>
                  <form className="form-wrap" onSubmit={handleSubmit}>
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    {!data && !error ? (
                      <div className="text-center">
                        <div className="spinner-grow" role="status"></div>
                      </div>
                    ) : (
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
                            checked={formData.salutation === "Mr."}
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
                            checked={formData.salutation === "Mrs."}
                          />
                          <label htmlFor="mrs" style={{ marginLeft: "10px" }}>
                            Mrs.
                          </label>
                          {errorMsg.salutation && (
                            <div className="error-msg">
                              {errorMsg.salutation}
                            </div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <span>First Name</span>
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
                            <span>Last Name</span>
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

                        <div className="col-lg-6">
                          <div className="form-group">
                            <span>Country Code</span>
                            <CountryCodeSelect
                              setChange={setChange}
                              isGeoInfo={false}
                              setFormData={setFormData}
                              value={formData.country_code}
                              error={errorMsg.country_code}
                            />
                            {errorMsg.country_code && (
                              <div className="error-msg">
                                {errorMsg.country_code}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <span>Phone</span>
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
                            <span>Email Address</span>
                            <input
                              className={`form-control ${
                                errorMsg.email && "error-input"
                              }`}
                              name="email"
                              type="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                              disabled
                            />
                            {errorMsg.email && (
                              <div className="error-msg">{errorMsg.email}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-12 text-center">
                          <button
                            type="submit"
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
                            {submitting ? "Upadting" : "Update"}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
                <div className="mt-5">
                  <h2 className="account-title">Change Password</h2>
                  <form className="form-wrap">
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Password placeholder="Old Password" />
                      </div>
                      <div className="col-lg-12">
                        <Password placeholder="New Password" />
                      </div>{" "}
                      <div className="col-lg-12">
                        <Password placeholder="Confirm New Password" />
                      </div>
                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn v5">
                          Change
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export async function getStaticProps() {
//   const response = await axios.get("/user/profile");
//   return {
//     props: {
//       response,
//     },
//   };
// }

export default ChangePassword;
