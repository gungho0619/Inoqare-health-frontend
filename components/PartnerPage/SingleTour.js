import React from "react";
import Link from "next/link";

const SingleTour = () => {
	return (
		<section className="page-wrapper mt-100">
			<div className="adventure-tour-wrap">
				<div className="container">
					<div className="section-title style1 text-center">
						<span className="mb-2 mb-sm-0 fs-24 text-primary fw-500">
							This is where Inoqare enters the picture.
						</span>
						<h2 className="fs-28 mb-2 mb-sm-0">Inoqare</h2>
						<h4 className="fs-28">
							Reliable | Affordable | Patient-centric | Global
						</h4>
					</div>
				</div>
			</div>
			<div className="single-tour pt-20">
				<div className="single-tour-item bg-f tour-bg-1" style={{ minHeight: "900px" }}>
					<div className="single-tour-info style1">
						<div className="box">
							<div className="tour-shape-two sm-none">
								<img src="/images/tour/shape-2.png" alt="Image" />
							</div>
							<div className="tour-details">
								<Link href="/tour-details">
								<a>
									<h4 className="fs-20 text-white fw-700">We make it easy for individuals and
										enterprises around the world to find your facility, interact with your
										consultants, book medical treatments or procedures, travel to your
										facility, and receive quality healthcare that increases the chances of
										desirable outcomes. </h4>
								</a>
								</Link>
								<div className="row">
									<div className="col-lg-6 span-item-detail">
										<span>
											{">"} Showcase Your
											Practice Abroad
										</span>
										<p className="ml-25">
											Feature your facility
											and treatments on one of
											the most prestigious
											global healthcare
											platforms.
										</p>
										<span>
											{">"} Get Found by
											Expats and Foreigners
										</span>
										<p className="ml-25">
											Be visible to expats,
											health travelers, and
											companies searching for
											a provider like you
											around the world.
										</p>
										<span>
											{">"} Deliver Treatments
											Across Borders
										</span>
										<p className="ml-25">
											Never let distances,
											borders, or other
											barriers keep you from
											delivering services to
											foreign patients
										</p>
										<span>
											{">"} Find the Answers
											to Your Questions
										</span>
										<p className="ml-25">
											Leave nothing to doubt
											because you cannot take
											chances with your
											patients’ health and
											wellbeing.
										</p>
									</div>
									<div className="col-lg-6 span-item-detail">
										<span>
											{">"} Recommend Inoqare
											to Patients
										</span>
										<p className="ml-25">
											Refer your foreign
											patients to Inoqare for
											a safe, worry-free, and
											professional traveling
											experience.
										</p>
										<span>
											{">"} Offer All Types of
											Treatments
										</span>{" "}
										<p className="ml-25">
											Our platform supports
											all types of health and
											wellbeing treatments and
											intricate surgical
											procedures.
										</p>
										<span>
											{">"} Get Assistance
											with Paperwork
										</span>{" "}
										<p className="ml-25">
											Inoqare ensures no
											compliance issues stand
											between your patients
											and the treatments they
											need.
										</p>
										<span>
											{">"} Join a Prestigious
											Community
										</span>{" "}
										<p className="ml-25">
											Be a part of a global
											network that includes
											patients, businesses,
											brokers, and government
											bodies.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleTour;
