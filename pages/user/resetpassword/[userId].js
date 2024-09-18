import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "../../../axios";
import alert from "../../../components/common/Alert";
import errorHanlder from "../../../errorHandler/handler";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const userId = router.query.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Error", "Password did not match", "error");
      return;
    }
    errorHanlder(async () => {
      const { data } = await axios.put(`/user/resetpassword/${userId}`, {
        password,
      });
      setPassword("");
      setConfirmPassword("");
      alert(
        "Congratulations!",
        "Your password has been reset successfully",
        "success"
      );
      router.push("/log-in");
    });
  };

  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="login-form">
              <div className="login-header bg-minsk">
                <h2 className="text-left">Password Reset</h2>
                <span>Reset your password</span>
              </div>
              <div className="login-body">
                <form className="form-wrap" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <p>This will reset your password</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="New Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm New Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <button className="btn v6">Reset Password</button>
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
}

export default ResetPassword;
