import React from "react";

const icons = [
	"flaticon-customer-care",
	"flaticon-support-1",
	"flaticon-support",
	"flaticon-tour-guide",
	"flaticon-searching",
];

const Expertise = ({ para, h4s, heading, paraAlign = "text-center" }) => {
	return (
		<section className="about-wrap pt-40">
			<div className="container">
				{heading && (
				<div className="section-title style6 sm-center mb-40 text-center">
					<h2 className="mb-3 fs-35 fw-700">{heading}</h2>
				</div>
				)}
				<div className="row align-items-center">
					<div className="col-lg-6">
						<p className={`para-size fs-sm-16 ${paraAlign}`}>{para}</p>
						<div className="about-features">
							<div className="row row-cols-1">
								{h4s.map((item, i) => (
									<div className="col" key={i}>
										<div className="about-feature-item vision-item mb-3">
											<i className={`${icons[i]} vision-icon`}></i>
											<h4 className="fs-sm-16">{item}</h4>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>{" "}
					<div className="col-lg-5 offset-lg-1">
						<div className="testimonial-wrap">
							<div className="testimonial-slider-one swiper-container">
								<div className="swiper-wrapper">
									<video src="/videos/sample.mp4" className="w-100" controls />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
