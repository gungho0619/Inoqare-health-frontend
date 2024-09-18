import React from "react";
import Link from "next/link";

const TreatmentsDetails = ({ spec1, spec2, spec3, spec4, spec5 }) => {
  return (
    <>
      <div className="post-details pt-20 pb-20">
        <div className="container">
        <h2>
                    Inoqare is your single touchpoint to access top-quality
                    overseas medical treatments from anywhere in the world.
                  </h2>
                  <p>
                    You have considered having your surgery in your local hospital but it is too expensive. Medical travel can reduce the prices by over 60% while receiving the highest quality care.
                  </p>
                  <p>We combine the power of our rich experience, time-honored
                    relationships, and sound industry knowledge to enable
                    borderless, seamless, and frictionless delivery of
                    healthcare international.
                  </p>

          <div className="row gx-5">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="content-wrapper">
                <div className="post-content ">
                  <div className="row mt-30 mb-30 align-items-center">
                    <div className="col-lg-6 mb-2">
                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg treatments">
                          <img src="/images/service/services/services-3.png" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2 treatments">
                      <div className="d-flex align-items-center">
                        <span className="heading-services">
                        Featured Treatments :
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Dentistery
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Hair Transplant
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <Link href="/treatments/neurology"> 
                        <a>
                        <span className="heading-services p">
                          Neurology
                        </span>
                        </a>
                        </Link>
                      </div>
                      <div className="d-flex align-items-center">
                      <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <Link href="/treatments/orthopedics/"> 
                        <a>
                        <span className="heading-services p">
                          Orthopedic Surgery
                        </span>
                        </a>
                        </Link>
                        
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <span className="heading-services p">
                          Surrogacy
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="ri-arrow-right-s-line challenges-arrow"></i>
                        <Link href="/treatments/bariatric-surgery"> 
                        <a>
                        <span className="heading-services p">
                          Weight Loss Surgery
                        </span>
                        </a>
                        </Link>
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

export default TreatmentsDetails;
