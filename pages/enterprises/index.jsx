import React from "react";
import AboutEnterprise from "@components/HomeOne/AboutEnterprise";
import Healthcare from "./Healthcare/Healthcare";
import Partners from "@components/Partners/Partners";
import HealthCareForm from "@components/HealthCareForm/HealthCareForm";

export default function Enterprises() {
	const pageData = {
		partner: {
			title: "We Want You On Our Client List because Professionals Work with Professionals",
			text: "We work with the best healthcare service providers, travel agencies, insurance brokers, and business partners around the world.",
			partners: [
				{
					link: "#",
					image: "/images/partners/partners-1.png",
				},
				{
					link: "#",
					image: "/images/partners/partners-2.png",
				},
				{
					link: "#",
					image: "/images/partners/partners-3.jpeg",
				},
				{
					link: "#",
					image: "/images/partners/partners-4.png",
				},
				{
					link: "#",
					image: "/images/partners/partners-5.png",
				},
			]
		}
	}
	
	return (
		<React.Fragment>
			<section className="bg-light-blue pt-large pb-small">
				<div className="container ">
					<div className="row">
						<div className="col-12 col-lg-6">
							<h3 className="fs-32 fw-700">
								Make Top Quality Healthcare Available to Your Workers around the World
							</h3>
							<h6 className="fs-24 fw-600">
								On-demand Healthcare Services for
							</h6>
							<h6 className="fs-24 fw-600 text-primary">
								Everyone, Everywhere, Anytime.
							</h6>
						</div>
						<div className="col-12 col-lg-6" id="contact">
							<HealthCareForm />
						</div>
					</div>
				</div>
			</section>

			<AboutEnterprise
				aboutText="About Us"
				aboutH2="Employees Deserve the Best Care!"
				aboutP="Inoqare makes it easy to access top-quality overseas medical treatments for your employees, customers, shareholders, or just anyone else located anywhere in the world."
				h41="Extensive Reach"
				h42="Strong Networks"
				h43="Robust Treatments"
				p1="Trust our global experience in some of the most complicated and demanding sectors of healthcare delivery. "
				p2="Utilize our relationships with international providers including hospitals, brokers, governments, and professionals."
				p3="Access the best treatment regardless of where you are. Gain your best health and leave everything else to us."
			/>
			
			<Healthcare />

			<Partners data={pageData.partner}/>
		</React.Fragment>
	);
}
