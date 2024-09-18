import React from "react";
import AboutSection from "../common/AboutSection";
import {
	faUserDoctor,
	faHeadset,
	faUserPlus,
	faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const Challenges = ({ bgColor, shape, featureStyle}) => {
	return (
		<section className={`about-wrap pt-20 pb-20 ${bgColor}`}>
			<div className="container">
				<div className="mt-4 text-center">
					<h2 className="fs28 fw-700 text-center text-dark">
						Do You Face These Limitations When Treating Foreign Patients?
					</h2>
					<p className="fs-16">You are a quality provider. The treatments and procedures you offer are in demand locally and around the world. But are you missing out on international patients because you don't know the answers to some of the following questions?</p>
					<hr className="w-25 mx-auto"></hr>
				</div>

				<div className="row justify-content-around">
					<div className={`col-lg-6`}>
							<AboutSection 
								icon={faUserDoctor} 
								title="Patients"
								text="How do we reach patients in other countries? How do we get seen as a quality provider? How do we provide services to global enterprises?"
							/>
							<AboutSection 
								icon={faPlaneDeparture} 
								title="Transportation"
								text="How will the patient be transported? How do we deliver the treatment at the patient's location? Is there a medical transportation company we can work with or recommend to patients?"
							/>
					</div>
					<div className={`col-lg-6`}>
							<AboutSection 
								icon={faUserPlus} 
								title="Insurance"
								text="Will the patient’s insurance cover the cost of the treatment? Are there insurance options we can recommend to patients? How do we transact safely with patients who don’t have insurance?"
							/>
							<AboutSection 
								icon={faHeadset} 
								title="Communication"
								text="How to finalize the details of the treatment? Does the patient speak my language? How do we communicate with third parties such as travel agencies and insurance?"
							/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
