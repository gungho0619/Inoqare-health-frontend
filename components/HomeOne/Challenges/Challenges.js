import React from "react";
import { faAngleDoubleDown, faClipboardList} from "@fortawesome/free-solid-svg-icons";
// import { faComment, faHospital, faHandshake } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Challenges.module.scss';

const About = ({ bgColor }) => {
	const data = [
		{
			icon: "flaticon-support-1",
			title: "24/7 Support",
			text: "By having experts available to answer all your questions"
		},
		{
			icon: "flaticon-support",
			title: "Best Selections",
			text: "Manage your complete treatment on a turnkey basis"
		},
		{
			icon: "flaticon-tour-guide",
			title: "Quality Services",
			text: "Help you book the right treatment"
		},
		{
			icon: "flaticon-map",
			title: "Reasonable Price",
			text: "Make traveling and lodging arrangements"
		},
	]
	return (
		<section className={`about-wrap pt-20 pb-30 ${bgColor}`}>
			<div className="container">
				<div className="section-title style6 sm-center text-center mb-5 mb-md-small">
					<h2 className="mb-3">
						Challenges in Accessing Healthcare Overseas
					</h2>
					<p className="about-para">
						The complex international traveling becomes
						complicated when you are traveling for health
						reasons.
					</p>
					{/* <p className="about-para">
							Here are some of the <strong>critical questions</strong> every
							potential <strong>health tourist or international patient</strong>{" "}
							must answer to avoid any misadventure and increase the chances of
							successful treatment.
					</p>*/}
					<p className="about-para">
						The patient’s condition may not allow you to delay
						the procedure or take any chances. And you do not
						want to settle for the second-best treatment that is
						the first to come your way. You wish you could talk
						to a professional who would:
					</p>
				</div>
				{/* <div className="row mt-30 mb-30 align-items-center">
					<div className="col-lg-5 mb-2">
					<img src="/images/challenges/5.png" className="img-challenges" />
					</div>
					<div className="col-lg-6">
					<div className="d-flex align-items-center">
						<i className="ri-arrow-right-s-line challenges-arrow"></i>
						<span className="heading-challenges">Treatments</span>
					</div>
					<p className="margin-left-30">
						What treatment options are available? Which one is the best? Who
						do I talk to? Do they speak my language?
					</p>
					<div className="d-flex align-items-center">
						<i className="ri-arrow-right-s-line challenges-arrow"></i>
						<span className="heading-challenges">Financials</span>
					</div>
					<p className="margin-left-30">
						What is the cost of the treatment , traveling, and follow-up?
						How will I pay for the procedure?
					</p>
					<div className="d-flex align-items-center">
						<i className="ri-arrow-right-s-line challenges-arrow"></i>
						<span className="heading-challenges">Healthcare</span>
					</div>
					<p className="margin-left-30">
						What healthcare system or policy is in place in my country and
						the destination country and how will it affect me?
					</p>
					<div className="d-flex align-items-center">
						<i className="ri-arrow-right-s-line challenges-arrow"></i>
						<span className="heading-challenges">Paperwork</span>
					</div>
					<p className="margin-left-30">
						What medical records and travel documents do I need to take
						along? What is the visa process?
					</p>
					<div className="d-flex align-items-center">
						<i className="ri-arrow-right-s-line challenges-arrow"></i>
						<span className="heading-challenges">Network</span>
					</div>
					<p className="margin-left-30">
						Is the facility I’m considering part of a global healthcare
						network so I’ll have no problem getting insurance coverage, visa
						and reimbursements?
					</p>
					</div>*/}
					{/*	</div>
						<div className="row pt-50 pb-50">
							<div className="col-lg-12 pt-20 pb-30">
					<p className="text-center about-para ">
						The patient’s condition may not allow you to delay the procedure
						or take any chances. And you do not want to settle for the
						second-best treatment that is the first to come your way. You
						wish you could talk to a professional who would:
					</p>
				</div>*/}
			</div>
			<div className="promo-wrap pt-small pb-4 py-md-large py-sm-small challenge-background">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
						{data.map((item, i) => 
							<div className="col mb-4 mb-md-0" key={i}>
								<div className="promo-item style1 h-100">
									<div className="promo-content">
										<i className={item.icon}></i>
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* <div className="row mt-20">
				<div className="col-lg-6">
					<img src="/images/challenges/15.png" className="second-img" />
				</div>
				<div className="col-lg-6 margin-top-head-challenges">
					<div className="about-features-div">
					<div className="about-feature-item vision-item">
						<FontAwesomeIcon
						icon={faComment}
						className="vision-icon-home"
						/>
						<h4 className="challenges-h4">
						Answer all of your questions
						</h4>
					</div>
					<div className="about-feature-item vision-item">
						<FontAwesomeIcon
						icon={faHospital}
						className="vision-icon-home"
						/>
						<h4 className="challenges-h4">
						Manage your complete treatment on a turnkey basis
						</h4>
					</div>
					</div>
					<div className="about-features-div">
					<div className="about-feature-item vision-item">
						<FontAwesomeIcon
						icon={faHandshake}
						className="vision-icon-home"
						/>
						<h4 className="challenges-h4">
						Help you book the right treatment
						</h4>
					</div>
					<div className="about-feature-item vision-item">
						<div className="col-1">
						<FontAwesomeIcon
							icon={faClipboardList}
							className="vision-icon-home"
						/>
						</div>
						<h4 className="col-11 challenges-h4">
						Make traveling and lodging arrangements
						</h4>
					</div>
					</div>
				</div>
			</div>*/}
			<div className="section-title style1 text-center pt-small">
				<span>This is where Inoqare enters the picture</span>
				<div className="position-relative py-4">
					<FontAwesomeIcon icon={faAngleDoubleDown} className={`${styles.doubleArrow} double-arrow`} />
				</div>
				<div className="pt-30 pb-30">
					<a className="btn v3" href="/get-quote/">
						GET A QUOTE <i className="ri-logout-circle-r-line"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
