import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";

const Faq = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <PageBanner bannerTitle="Faq" pageName="Faq" />
      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-12">
              <div className="section-title style4 mb-40 text-center">
                <span>FAQ</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="tour-faq">
                <div className="accordion" id="accordionExample">
                  {data.length > 0 &&
                    data.map((data, index) => (
                      <div
                        className="accordion-item"
                        onClick={() => toggle(index)}
                      >
                        <h2 className="accordion-header" id="headingfour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                          >
                            {data.question}
                          </button>
                        </h2>
                        <div
                          id="collapsefour"
                          className={
                            clicked === index
                              ? "accordion-collapse show"
                              : "accordion-collapse collapse"
                          }
                        >
                          <div className="accordion-body">
                            {clicked === index && <p>{data.answer}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Faq.defaultProps = {
  data: [
    {
      question: "What languages do you offer tours in?",
      answer:
        "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "Are there any extra fees that I will have to pay on top of the listed price?",
      answer:
        "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How much does it cost to do a private tour?",
      answer:
        "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What do I need to bring?",
      answer:
        "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: " Should I print a receipt to show the tour guide?",
      answer:
        "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

export default Faq;
