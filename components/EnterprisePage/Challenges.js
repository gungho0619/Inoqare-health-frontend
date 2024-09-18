import React from "react";
import AboutSection from "../common/AboutSection";
import {
  faCheck,
  faStethoscope,
  faMoneyBill,
  faBriefcase,
  faUserPlus,
  faNetworkWired,
  faHeadset,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const Challenges = ({ bgColor, shape, featureStyle, ptb100 }) => {
  return (
    <>
      <section className={`about-wrap pb-100 ${ptb100} ${bgColor}`}>
        {shape && (
          <>
            <div className="shape-10 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
            <div className="shape-11 sm-none">
              <img src="/images/shape-10.png" alt="Image" />
            </div>
          </>
        )}

        <div className="container">
          <div className="section-title style6 sm-center mb-40 text-center">
            <h2 className="mb-3">
              Do You Face These Roadblocks When Planning Medical Treatments
              Overseas?
            </h2>
            <p>
              As an employer or manager, a part of your job is to recommend
              affordable and high-quality treatment options to your employees.
              Their health is paramount and you have a lot on your hands. How do
              you answer the questions that may be critical to the delivery of
              quality healthcare and pleasurable experiences?
            </p>
          </div>
          <div className="row justify-content-around">
            <div className={`col-lg-5 about-feature-item ${featureStyle}`}>
              <AboutSection
                title="Treatments"
                text="What treatment options are available? Which ones are the most suitable for my employees? Do they deliver on our goals?"
                className="mb-3"
                icon={faStethoscope}
              />
              <AboutSection
                title="Communication"
                text="How do I negotiate with healthcare providers, travel agents, and other stakeholders? Who do I talk to? Do they speak my language?"
                className="mb-3"
                icon={faHeadset}
              />
              <AboutSection
                title="Paperwork"
                text="What medical records and travel documents are required? What is the visa policy? Will my client need assistance with documentation?"
                icon={faBriefcase}
                className="mb-3"
              />
              <AboutSection
                title="Quality"
                text="How do I ensure my employees will receive quality healthcare and excellent services that increase the likelihood of the desired outcomes?"
                icon={faCheck}
              />
            </div>
            <div className={`col-lg-5 about-feature-item ${featureStyle}`}>
              <AboutSection
                title="Cost"
                text="What is the cost of the treatment, traveling, and follow-up? Can insurance cover it? Do more cost-effective options exist in other countries?"
                className="mb-3"
                icon={faMoneyBill}
              />
              <AboutSection
                title="Experience"
                text="Will my workers have a safe and smooth experience throughout? What are the traveling arrangements?"
                className="mb-3"
                icon={faUserPlus}
              />
              <AboutSection
                title="Network"
                text="Is the provider I’m considering part of a global healthcare network so our employees will have no problem getting insurance coverage and visa?"
                icon={faNetworkWired}
                className="mb-3"
              />{" "}
              <AboutSection
                title="Emergencies"
                text="Is my travel agency equipped to handle emergency medical transportation and treatment, should the need arise?"
                icon={faAmbulance}
                className="mb-3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenges;
