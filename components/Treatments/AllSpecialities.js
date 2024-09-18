import React from "react";
import Link from "next/link";

const specialitiesData = [
	{ name: "Cancer" },
	{ name: "Cardiology", href: "/treatments/cardiology" },
	{ name: "Orthopedics", href: "/treatments/orthopedics" },
	{ name: "Ophthalmology" },
	{ name: "Urology", href: "/treatments/urology" },
	{ name: "Gynecology", href: "/treatments/gynecology" },
	{ name: "Neurology", href: "/treatments/neurology" },
	{ name: "Pediatrics", href: "/treatments/pediatrics" },
	{ name: "Dental", href: "/solutions/dental" },
	{ name: "IVF" },
	{ name: "Oncology" },
	{ name: "Reconstructive Surgery" },
	{ name: "Endocrinology" },
	{ name: "Gastroenterology" },
	{ name: "Nephrology" },
	{ name: "Physical Medicine" },
	{ name: "Sports Medicine" },
	{ name: "Rehabilitation" },
	{ name: "Plumonology", href: "/treatments/plumonology" },
	{ name: "ENT-Sleep-Voice" },
	{ name: "Paediatric Cardiology" },
	{ name: "Rheumatology" },
	{ name: "Physiotherapy" },
	{ name: "Diabetology" },
	{ name: "Organ Transplants" },
	{ name: "Robotics Surgery" },
	{ name: "Bariatric Surgery", href: "/treatments/bariatric-surgery" },
	{ name: "Spine Surgery" },
	{ name: "Dermatology" },
	{ name: "Hair Transplants", href: "/solutions/hair-transplant" },
];

export default function AllSpecialities() {
	return (
		<section className="service-wrap pt-20 pb-50">
			<div className="container">
				<div className="row mb-40 align-items-end">
					<div className="col-md-12">
						<div className="section-title style1 text-center">
							<h2 className="fs-32">All Specialities</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{specialitiesData.map((s, i) => (
					<div className="col-6 col-md-3 col-lg-2" key={i}>
						<div className="service-item style1">
							<div className="service-img">
								<div>
									{s.featured === "yes" ? (
									<Link href={s.href}>
									<a>
										<img src={`/images/specialities/${s.name.toLowerCase()}.png`}
											alt={`${s.name.toLowerCase()}`} />
									</a>
									</Link>
									) : (
									<img src={`/images/specialities/${s.name.toLowerCase()}.png`}
									alt={`${s.name.toLowerCase()}`} />
									)}
								</div>
							</div>
							<div className="service-info">
								{s.featured === "yes" ? 
									<Link href={s.href}>
										<a>{s.name}</a>
									</Link>
									: <p>{s.name}</p>
								}
							</div>
						</div>
					</div>
					))}
				</div>
				{/* <div className="row mt-20">
					<div className="col-12 text-center">
						<Link href="/contact-us">
						<a className="btn v2">Talk to Expert</a>
						</Link>
					</div>
				</div> */}
			</div>
		</section>
	);
}
