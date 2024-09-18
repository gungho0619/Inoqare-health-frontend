import React from "react";
import Link from "next/link";

const Newsletter = ({ inputStyle }) => {
	return (
		<div className="container bg-heath newsletter mb-50 p-md-5">
			<div className={`newsletter-wrap ${inputStyle} p-md-5`}>
				<div className="dot-shape sm-none">
					<img src="/images/dot-shape.svg" alt="Image" />
				</div>
				<div className="curve-shape sm-none">
					<img src="/images/curve.png" alt="Image" />
				</div>
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-5 col-md-5">
						<div className="newsletter-img">
							<img src="/images/challenges/15.png" alt="Image" />
						</div>
					</div>
					<div className="col-xl-5 offset-xl-1 col-lg-7 offset-lg-0 col-md-7">
						<div className="newsletter-form style1">
							<h3 className="fs-32">
								<span>When Your Health is Involved</span>
								<br />
								Leave Nothing to Chance
							</h3>
							<p>Get in touch with a Inoqare Expert</p>
							<Link href="/get-quote">
							<a>
								<button className="btn v5">
									Get a Quote{" "}
									<i className="ri-logout-circle-r-line"></i>
								</button>
							</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
