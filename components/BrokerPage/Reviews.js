import { useState, useEffect } from "react";
import PageBannerTwo from "../common/PageBannerTwo";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: true,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },

  navText: [
    "<i className='ri-arrow-left-line'></i>",
    "<i className='ri-arrow-right-line'></i>",
  ],
};

const Testimonial = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);
  return (
    <>
      <section className="about-wrap pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-40 style4">
                <h2>
                  We Deliver a Borderless, Seamless, Frictionless, and Worriless
                  International Treatment Experience
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-wrap">
                <div className="testimonial-slider-one swiper-container ">
                  {display ? (
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={10}
                      nav
                      {...options}
                    >
                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg bg-f testimonial-bg-1"></div>
                        <div className="client-info">
                          {/* <div className='client-img'>
                            <img
                              src='/images/testimonial/client-1.jpg'
                              alt='Image'
                            />
                          </div> */}
                          <div className="client-name">
                            <h5>Tony Stark</h5>
                            <span>USA</span>
                          </div>
                          <div className="client-quote">
                            <p>
                              "Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg bg-f testimonial-bg-2"></div>
                        <div className="client-info">
                          {/* <div className='client-img'>
                            <img
                              src='/images/testimonial/client-2.jpg'
                              alt='Image'
                            />
                          </div> */}
                          <div className="client-name">
                            <h5>Carlos Misith</h5>
                            <span>Canada </span>
                          </div>
                          <div className="client-quote">
                            <p>
                              "Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="testimonial-item new-design">
                        <div className="testimonial-bg bg-f testimonial-bg-3"></div>
                        <div className="client-info">
                          {/* <div className='client-img'>
                            <img
                              src='/images/testimonial/client-3.jpg'
                              alt='Image'
                            />
                          </div> */}
                          <div className="client-name">
                            <h5>Jhon Doe</h5>
                            <span>USA</span>
                          </div>
                          <div className="client-quote">
                            <p>
                              "Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore."
                            </p>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
