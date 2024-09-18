import React from "react";
import MyAccountNavbar from "../components/MyAccount/MyAccountNavbar";

const PreviousQuote = () => {
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <MyAccountNavbar />
            <div className="col-lg-9">
              <div className="tab-content">
                <div>
                  <h2 className="account-title">Previous Quote</h2>
                  <form className="form-wrap">
                    <div
                      id="message"
                      className="alert alert-danger alert-dismissible fade"
                    ></div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            id="quote_id"
                            name="quote_id"
                            type="text"
                            placeholder="Quote ID"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button type="submit" className="btn v5">
                          Add
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

export default PreviousQuote;
