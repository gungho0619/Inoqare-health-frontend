import React from "react";
import AboutSection from "./AboutSection";
import {
  faMedkit,
  faStethoscope,
  faMoneyBill,
  faBriefcase,
  faHandHoldingMedical,
  faNetworkWired,
  faAngleDoubleDown,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHospital,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ({ featureStyle, ptb100 }) => {
  return (
    <>
    <section className={`about-wrap pt-small`} id="healthcare">
      <div className="container">
        <div className="section-title style6 sm-center text-center pb-50">
          <h2 className="mb-3 color-primary heading-second-broker fs-sm-22">The Healthcare You Need, Wherever, Whenever!</h2>
          <p className="about-para fs-sm-14">Inoqare is your single touchpoint to access top-quality overseas medical treatments from anywhere in the world.
        <br/>  We are working in the field of medical tourism on the American , European , African and Asian continents.
        <br/>We offer patients all over the world to benefit from quality care .
        <br/>We are currently the market leader in the transport of transplant teams and organs.</p>
        </div></div>
                  <div className="container">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center">
                      <div className="col-lg-1 col-md-4 col-sm-4"></div>
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <div className="promo-item style1">
                          <div className="promo-content">
                            <i className="flaticon-support"></i>
                            <h4>Team of Experts</h4>
                            <p>Your request will be handled by experts every time.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <div className="promo-item style1">
                          <div className="promo-content">
                            <i className="flaticon-tour-guide"></i>
                            <h4>Quality Services</h4>
                            <p>We collaborate with the finest medical partners worldwide</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-4">
                        <div className="promo-item style1">
                          <div className="promo-content">
                            <i className="flaticon-support-1"></i>
                            <h4>24/7 Support</h4>
                            <p>Our team is there to make sure everything goes smoothly.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-4 col-sm-4"></div>
                    </div>
                  </div>
    </section>
    </>
  );
};

export default About;
