import React from "react";
import Link from "next/link";

const Expertise = ({
	aboutText,
	aboutH2,
	aboutP,
	h41,
	h42,
	h43,
	p1,
	p2,
	p3,
}) => {
	return (
		<section className="about-wrap pt-small">
			<div className="container">
				<div className="row mt-30 mb-30 align-items-center">					
                <h2 className="mb-3 color-primary heading-second-broker text-center">
						{aboutH2}
					</h2>
					<p className="about-para text-center">{aboutP}</p>

					<div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="section-title style6 sm-center text-center">
					<img 
					src="/images/home/treat.png" 
					width={375}
					alt="Image"/>
				</div>
				
						
					</div>
					<div className="col-lg-6 mb-lg-1">
						<div className="section-title style1 about-title">
							<div className="shape-9 sm-none">
								<img src="/images/leaf-1.png" alt="Image" />
							</div>
						</div>
						<div className="">
							<div className="about-feature-item about-feautre-margin-bottom">
								<h4 className="about-head-banner">{h41}</h4>
								<p className="font-16">{p1}</p>
							</div>
							<div className="about-feature-item about-feautre-margin-bottom">
								<h4 className="about-head-banner">{h42}</h4>
								<p className="font-16">{p2}</p>
							</div>
							<div className="about-feature-item about-feautre-margin-bottom">
								<h4 className="about-head-banner">{h43}</h4>
								<p className="font-16">{p3}</p>
							</div>
							<div className="about-feature-item mt-4">
								<span>Interested ? </span>
								<Link href="/contact-us">
									<a className="btn v2 ms-5 get-started">
										Contact us now
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
