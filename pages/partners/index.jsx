import React from "react";
import Challenges from "../../components/PartnerPage/Challenges";
import Partners from "@components/Partners/Partners";
import BannerForm from "@components/BannerForm/BannerForm";
import AboutPartners from "@components/HomeOne/AboutPartners";
import Healthcare from "./Healthcare/Healthcare";


// import PartnerBanner from "./PartnerBanner/PartnerBanner";
// import Form from "../../components/BrokerPartnerForm/BrokerPartnerForm";
// import styles from "../../public/css/page-css/Partners.module.scss";
// import Quote from "../../components/HomeOne/Quote";
// import AdventureTour from "../../components/HomeOne/AdventureTour";
// import RecommendTour from "../../components/HomeOne/RecommendTour";

export default function PartnerPage() {
	const pageData = {
		banner: {
			video: "/videos/inoqare-broker-banner.mp4",
			title: "Easily Provide Healthcare to Overseas Patients Anywhere in the World",
			smTitle: "Borderless Healthcare Solutions for <br /> <span class='text-primary'>Everyone, Everywhere, Anytime.</span>",
			formTitle: "Get Registered as Medical Partner",
			userType: "medical_partner"
		},
		expertiseVideo: {
			title: "Distances Don't Matter When You Are Good At What You Do",
			text: "Inoqare is the industry-leading platform that connects patients seeking medical treatments abroad with quality healthcare providers like you. We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of quality healthcare.",
			video: "/videos/inoqare.mp4",
			areas: [
				{
					icon: "flaticon-customer-care",
					title: "Global Reach",
					info: "Our global platform and on-ground presence makes you accessible to foreign patients and health travelers looking for the treatments you offer."
				},
				{
					icon: "flaticon-support",
					title: "Industry Expertise",
					info: "With extensive hands-on experience in international organ transportation business, we can manage all types of medical travel and overseas treatments."
				},
				{
					icon: "flaticon-tour-guide",
					title: "Extensive Networks",
					info: "Utilize our relationships with governments, patient groups, enterprises, travel agents, and medical caregivers to deliver healthcare worldwide."
				}
			]
		},
		partner: {
			title: "We Want You On Our Team because Experts Work with Experts",
			text: "We work with the best companies, travel agencies, insurance brokers, and business partners around the world.",
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
			
			<AboutPartners
				aboutText="About Us"
				aboutH2="Distances Don't Matter When You Are Good At What You Do"
				aboutP="Inoqare is the industry-leading platform that connects patients seeking medical treatments abroad with quality healthcare providers like you. We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of quality healthcare."
				h41="Extensive Reach"
				h42="Strong Networks"
				h43="Robust Treatments"
				p1="Trust our global experience in some of the most complicated and demanding sectors of healthcare delivery. "
				p2="Utilize our relationships with international providers including hospitals, brokers, governments, and professionals."
				p3="Access the best treatment regardless of where you are. Gain your best health and leave everything else to us."
			/>

			<Challenges
				bgColor="bg-heath"
				featureStyle="style3"
			/>
						<Healthcare />

			<div className="mb-4 mb-md-0">
				<Partners data={pageData.partner} />
			</div>
		</React.Fragment>
	);
}
