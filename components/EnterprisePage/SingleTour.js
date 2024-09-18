import { useState, useEffect } from "react";
import Link from "next/link";

const SingleTour = () => {
  return (
    <div className="page-wrapper mt-100">
      <div className="adventure-tour-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title style1 text-center">
                <span>This is where Inoqare enters the picture.</span>
                <h2>Inoqare</h2>
                <h4>Reliable | Affordable | Patient-centric | Global</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-tour pt-20">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-12">
              <div className="single-tour-slider swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-tour-item bg-f tour-bg-1 bg-size">
                      <div className="single-tour-info style1">
                        <div className="box">
                          <div className="tour-shape-two sm-none">
                            <img src="/images/tour/shape-2.png" alt="Image" />
                          </div>
                          <div className="tour-details">
                            <Link href="/tour-details">
                              <a>
                                <h4>
                                  Access Medical Care and Services that Deliver
                                  Your Goals
                                </h4>
                              </a>
                            </Link>
                            <p>
                              Inoqare makes it easy for organizations to provide
                              top-quality international healthcare to their
                              employees. Access affordable treatments and
                              comprehensive care that meet your human resource,
                              compliance, and budgetary targets.
                            </p>
                            <div className="row">
                              <div className="col-lg-6 span-item-detail">
                                <span>{">"} Access Affordable Treatments</span>
                                <p className="ml-25">
                                  Explore the best and most cost-effective
                                  treatments accessible through our platforms.
                                </p>
                                <span>{">"} Deliver Quality Healthcare</span>
                                <p className="ml-25">
                                  We guarantee safe and convenient
                                  transportation and quality healthcare
                                  delivery.
                                </p>
                                <span>
                                  {">"} Find Answers to Your Questions
                                </span>
                                <p className="ml-25">
                                  Clear your doubts about medical procedures,
                                  traveling arrangements, and insurance.
                                </p>
                                <span>
                                  {">"} Work with International Providers
                                </span>
                                <p className="ml-25">
                                  Inoqare connects you with world-class health
                                  institutions and medical professionals.
                                </p>
                              </div>
                              <div className="col-lg-6 span-item-detail">
                                <span>{">"} Avail All Types of Treatments</span>{" "}
                                <p className="ml-25">
                                  Avail the wide range of medical procedures and
                                  treatments available via Inoqare.
                                </p>
                                <span>{">"} Explore the Best Destinations</span>{" "}
                                <p className="ml-25">
                                  Incentivize and engage employees by taking
                                  them to the best medical tourism destinations.
                                </p>
                                <span>{">"} View Comprehensive Reporting</span>{" "}
                                <p className="ml-25">
                                  Receive pre-treatment guidance, real-time
                                  updates, and post-treatment reports.
                                </p>
                                <span>{">"} Get Assistance with Paperwork</span>{" "}
                                <p className="ml-25">
                                  We handle everything including documentation,
                                  appointments, flight reservations, and transit
                                  care.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
