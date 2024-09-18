import React from "react";
import Link from "next/link";

const Specialties = () => {
	return (
		<section className="service-wrap pt-20 pb-50">
			<div className="container">
				<div className="row mb-40 align-items-end">
					<div className="col-md-12">
						<div className="section-title style1 text-center">
							<h2 className="fs-32">Top Specialties</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="service-item style1">
							<div className="service-img">
								<Link href="/treatments/plumonology">
								<a>
									<img src="/images/home/plumonology.png" alt="plumonology" />
								</a>
								</Link>
							</div>
							<div className="service-info">
								<Link href="/treatments/plumonology">
								<a>Plumonology</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-item style1">
							<div className="service-img">
								<Link href="/treatments/cardiology">
								<a>
									<img src="/images/home/cardiology.png" alt="cardiology" />
								</a>
								</Link>
							</div>
							<div className="service-info">
								<Link href="/treatments/cardiology">
								<a>Cardiology</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-item style1">
							<div className="service-img">
								<Link href="/treatments/gynecology">
								<a>
									<img src="/images/home/gynecology.png" alt="gynecology" />
								</a>
								</Link>
							</div>
							<div className="service-info">
								<Link href="/treatments/gynecology">
								<a>Gynecology</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-item style1">
							<div className="service-img">
								<Link href="/treatments/neurology">
								<a>
									<img src="/images/home/neurology.png" alt="Image" />
								</a>
								</Link>
							</div>
							<div className="service-info">
								<Link href="/treatments/neurology">
								<a>Neurology</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="service-item style1">
							<div className="service-img">
								<Link href="/treatments/orthopedics">
								<a>
									<img src="/images/home/orthopedics.png" alt="Image" />
								</a>
								</Link>
							</div>
							<div className="service-info">
								<Link href="/treatments/orthopedics">
								<a>Orthopedics</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-20">
					<div className="col-12 text-center">
						<Link href="/contact-us">
						<a className="btn v2">Talk to Expert</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Specialties;
