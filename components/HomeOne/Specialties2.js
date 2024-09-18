import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactSpecialities from "../Contact/ContactSpecialities";
import PageBanner from "@components/common/PageBanner";

const Faq = ({ data, title, bg }) => {
  const [clicked, setClicked] = useState(0);
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
      <PageBanner bannerTitle={title} pageName="Treatments" bg={bg} />

      <section className="faq-wrap pt-20 pb-50">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-12">
              <div className="section-title style4 mb-40 text-center">
                <span>Specialties</span>
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="tour-faq">
                <div className="accordion" id="accordionExample">
                  {data.length > 0 && data.map((data, index) => (
                    <div className="accordion-item" onClick={()=> toggle(index)} key={index}>
                      <h2 className="accordion-header" id="headingfour">
                        <button className="accordion-button collapsed d-flex align-items-center" type="button">
                          <FontAwesomeIcon icon={clicked===index ? faMinus : faPlus} className="icon-accordion" />
                          {data.question}
                        </button>
                      </h2>
                      <div id="collapsefour" className={ clicked===index ? "accordion-collapse show"
                        : "accordion-collapse collapse" }>
                        <div className="accordion-body no-border-accordion-body">
                          {clicked === index && (
                          <>
                            {data.answer.map((a) =>
                            a.text ? (
                            <p className={a.classes}>{a.text}</p>
                            ) : (
                            a.para
                            )
                            )}
                          </>
                          )}
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
      <ContactSpecialities />
    </>
  );
};

export default Faq;
