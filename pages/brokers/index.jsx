import React from "react";
import Link from 'next/link' 
import BannerForm from "@components/BannerForm/BannerForm";
import TwoColumn from "./pageComponents/TwoColumn/TwoColumn";
import MapSection from "./pageComponents/MapSection/MapSection";
import Partners from "@components/Partners/Partners";

export default function Broker() {
	const pageData = {
		banner: {
			video: "/videos/inoqare-broker-banner.mp4",
			title: "Let Your Clients Access the Best Overseas Medical Treatments All Over the World",
			smTitle: "On-demand Healthcare Services for <br /> <span class='text-primary'>Everyone, Everywhere, Anytime.</span>",
			formTitle: "Request Callback!",
			userType: "broker"
		},
		partner: {
			title: "We Want You As Our Partners because Experts Work with Experts",
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
			<div id="contact">
			<BannerForm pageData={pageData.banner}/>
			</div>
			<TwoColumn />
			<MapSection />
			<Partners data={pageData.partner}/>

			<section className="service-wrap pt-50 pb-50  bg-minsk">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-12">
							<div className="section-title style1 text-center">
								<h2 className="mb-4 text-white">
									Offer Your Clients the Peace of Mind they
									Deserve!
								</h2>
								<Link href="#contact">
									<a className="btn v3" >Join Inoqare as an Insurance Broker</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
