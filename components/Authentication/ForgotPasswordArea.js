import React from "react";
import axios from "../../axios";
import alert from "../common/Alert";

const ForgotPasswordArea = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/forgotpassword", { email });
      console.log(data);
      alert(
        "Congralutions!",
        "A reset password link has been sent to provided email",
        "success"
      );
      setEmail("");
    } catch (ex) {
      console.log(ex.response.data);
    }
  };

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-white">Password Reset</h2>
                <span>Get your Password Back</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        We will send a verification code to your mail to reset
                        your password.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <button
                          className="btn v6"
                          disabled={email.length === 0 ? true : false}
                        >
                          Submit
                        </button>
                      </div>
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

export default ForgotPasswordArea;
