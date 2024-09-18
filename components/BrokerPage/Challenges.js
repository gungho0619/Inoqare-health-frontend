import React from "react";
import AboutSection from "../common/AboutSection";
import {
	faCheck,
	faStethoscope,
	faMoneyBill,
	faBriefcase,
	faUserPlus,
	faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const Challenges = ({ bgColor, shape, featureStyle, ptb100 }) => {
	return (
		<section className={`about-wrap pb-100 ${ptb100} ${bgColor}`} id="challenges">
			{shape && (
				<React.Fragment>
					<div className="shape-10 sm-none">
						<img src="/images/shape-10.png" alt="Image" />
					</div>
					<div className="shape-11 sm-none">
						<img src="/images/shape-10.png" alt="Image" />
					</div>
				</React.Fragment>
			)}

			<div className="container">
				<div className="section-title style6 sm-center mb-40 text-center">
					<h2 className="mb-3 fs-sm-22">
						Do You Face these Challenges When Insuring Health Travelers?
					</h2>
					<p className="fs-sm-14">
						As an insurance broker, a part of your job is to
						recommend affordable and high-quality treatment options
						to your clients. Their health is paramount and you don’t
						have all the time in the world to answer the following
						questions.
					</p>
				</div>
				<div className="row justify-content-around row-cols-md-3 row-cols-md-2 row-cols-1">
					<div className="col">
						<AboutSection title="Treatments"
							text="What treatment options are available? Which ones are the most suitable for my client? Who do I talk to? Do they speak my language?"
							className="mb-3" icon={faStethoscope} />
					</div>

					<div className="col">
						<AboutSection title="Quality"
							text="How do I ensure my clients will receive quality healthcare? How do I access quality healthcare providers? Will the treatment increase the likelihood of the desired outcomes?"
							className="mb-3" icon={faCheck} />
					</div>

					<div className="col">
						<AboutSection title="Paperwork"
							text="What medical records and travel documents are required? What is the visa policy? Will my client need assistance with documentation?"
							icon={faBriefcase} />
					</div>

					<div className="col">
						<AboutSection title="Cost"
							text="What is the cost of the treatment, traveling, and follow-up? Can the client afford it? Do more cost-effective options exist in other countries?"
							className="mb-3" icon={faMoneyBill} />
					</div>

					<div className="col">
						<AboutSection title="Experience"
							text="Will my client have a safe and pleasant experience? What are the traveling arrangements? "
							className="mb-3" icon={faUserPlus} />
					</div>

					<div className="col">
						<AboutSection title="Network"
							text="Is the facility I’m considering part of a global healthcare network so I’ll have no problem settling claims?  getting insurance coverage, visa and reimbursements?"
							icon={faNetworkWired} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
