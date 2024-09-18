import React from "react";
import Link from "next/link";
import Promo from "../../components/HomeOne/Promo";

const ServicesDetails = () => {
  return (
    <>
      <div className="post-details pt-20 pb-20">
        <div className="container">
        <h2>
                    Inoqare is your single touchpoint to access top-quality
                    overseas medical treatments from anywhere in the world.
                  </h2>
                  <p>
                    We combine the power of our rich experience, time-honored
                    relationships, and sound industry knowledge to enable
                    borderless, seamless, and frictionless delivery of
                    healthcare international.
                  </p>
                  <Promo />

          <div className="row gx-5">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 col-12">
                  <div className="content-wrapper">
                  <div className="post-content ">
                  <div className="row mt-30 mb-30 align-items-center">
                    <div className="col-lg-6 mb-2">
                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg">
                          <img src="/images/service/services/services-3.png" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2 services-border">
                      <div className="d-flex align-items-center">
                        <span className="heading-services">
                          Before your trip - We anticipate your needs :
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Consultation with a suitable specialist
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Selection of a hospital establishment and a team of
                          specialists
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Estimate of medical costs
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">Visa Process</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-30 mb-30 align-items-center">
                    <div className="col-lg-6 mb-2">
                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg">
                          <img src="/images/service/services/services-2.png" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2 services-border">
                      <div className="d-flex align-items-center">
                        <span className="heading-services">
                        During your stay - We are available 24 hours a day
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Travel Arrangement
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Accommodation
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Translation Services
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">Transfer to the accommodation establishment by a personal driver or ambulance</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-30 mb-30 align-items-center">
                    <div className="col-lg-6 mb-2">
                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg">
                          <img src="/images/service/services/services-1.png" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2 services-border">
                      <div className="d-flex align-items-center">
                        <span className="heading-services">
                        Assistance to your companions
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Travel Arrangement
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Accommodation
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Translation Services
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                        Tourist concierge services (tourist information, reservations, leisure activities, shopping)  
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                        Nannies (if you are traveling with children, nanny services are available your disposal so that the children are fully taken care of during the treatments).                        
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;