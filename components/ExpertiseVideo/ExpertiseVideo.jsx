import React from "react";
import Link from 'next/link';

const ExpertiseVideo = ({data}) => {
	return (
		<section className="about-wrap pt-small" id="healthcare">
			<div className="container">
				<div className="section-title style6 sm-center text-center">
					<h2 className="mb-3 fs-36 text-primary fw-700 fs-sm-22">{data.title}</h2>
					<p className="about-para fs-sm-14">{data.text}</p>
				</div>
				<div className="row mt-30 mb-30 align-items-center">
					<div className="col-lg-5 mb-5 mb-lg-0">
						<video src={data.video} className="w-100 video-home" type="video/mp4" autoPlay controls loop muted />
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="section-title style1 about-title">
							<div className="shape-9 sm-none">
								<img src="/images/leaf-1.png" alt="Image" />
							</div>
						</div>
						<div className="">
							{data.areas.map((item, i) => 
								<div className="about-feature-item about-feautre-margin-bottom" key={i}>
									<i className={item.icon}></i>
									<h4 className="about-head-banner fs-sm-16">{item.title}</h4>
									<p className="font-16 fs-sm-14">{item.info}</p>
								</div>
							)}
							<div className="about-feature-item mt-4">
								<span>Interested ? </span>
								<Link href="/get-quote">
									<a className="btn v2 ms-5 get-started">
										Get a Quote
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

export default ExpertiseVideo;
