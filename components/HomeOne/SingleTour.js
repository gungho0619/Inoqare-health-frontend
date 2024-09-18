import React from "react";
import Link from "next/link";

const SingleTour = () => {
	return (
		<div className="page-wrapper mt-20 ">
			<div className="adventure-tour-wrap mb-3">
				<div className="container">
					<div className="section-title style1 text-center">
						<h2 className="mb-3">Inoqare</h2>
						<p>Reliable | Affordable | Patient-centric | Global</p>
					</div>
				</div>
			</div>
			<div className="single-tour pt-20">
				<div className="container-fluid px-0">
					<div className="single-tour-slider">
						<div className="single-tour-item bg-f tour-bg-1 home-enter-bg res-pb-255">
							<div className="single-tour-info style1">
								<div className="box">
									<div className="tour-shape-two sm-none">
										<img
											src="/images/tour/shape-2.png"
											alt="Image"
										/>
									</div>
									<div className="tour-details">
										<Link href="/tour-details">
											<a>
												<h4>
													Access the World’s Finest
													Healthcare
												</h4>
											</a>
										</Link>
										<div className="row">
											<div className="col-lg-6 span-item-detail">
												<span>
													{">"} Multiple Treatment
													Options{" "}
												</span>
												<span>
													{">"} Multiple Destination
													Options{" "}
												</span>
												<span>
													{">"} Access to
													International Networks
												</span>
												<span>
													{">"} Traveling Arrangements
												</span>
												<span>
													{">"} Healthcare System
													Information
												</span>
												<span>
													{">"} Software and
													Technology
												</span>
											</div>
											<div className="col-lg-6 span-item-detail">
												<span>
													{">"} Affordable Insurance
													Options
												</span>
												<span>
													{">"} Paperwork and
													Compliance
												</span>
												<span>
													{">"} Contingencies and
													Emergencies
												</span>
												<span>
													{">"} Emergency Medical
													Transportation
												</span>
												<span>
													{">"} Financing and
													Budgeting Assistance
												</span>
											</div>
										</div>
									</div>
									<div className="tour-btn">
										<Link href="/get-quote">
											<a className="btn v3">
												Contact An Expert Inoqare Now
												<i className="ri-logout-circle-r-line"></i>
											</a>
										</Link>
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
