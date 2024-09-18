import React from "react";

const Cookie = (props) => {
  return (
    <div className="cookie-bar">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <p>
            Inoqare.com uses cookies to provide necessary website
            functionality, improve your experience and analyze our traffic. By
            using our website, you agree to
            {/* <br /> */}
            <a href="https://www.inoqare.com/privacy-policy/">
              <strong> privacy policy </strong>
            </a>{" "}
            and
            <a href="https://www.inoqare.com/cookie-policy/">
              <strong> cookie policy</strong>.
            </a>
          </p>
        </div>
        <div className="col">
          <button onClick={props.accept} className="btn theme-btn-one btn_sm mr-2 ml-4">
            Accept
          </button>
          <button onClick={props.cancel} className="btn theme-btn-one btn_sm ml-2">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
