import React from "react";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import ExpertiseVideo from "@components/ExpertiseVideo/ExpertiseVideo";
import Promo from "@components/Promo/Promo";
import Challenges from "@components/HomeOne/Challenges/Challenges";
import Partners from "@components/Partners/Partners";
import RecommendTour from "@components/HomeOne/RecommendTour";


const pageData = {
	banner: {
		title: "<span class='text-marine'>100% Free :</span> Inoqare helps you find the best partner for your treatment anywhere in the world.",
		smTitle: "Healthcare Services for <span class='text-marine'>Everyone, Everywhere, Anytime.</span>",
		video: "/videos/inoqare-homepage.mp4"
	},
	expertise: {
		title: "The Healthcare You Need, Wherever, Whenever!",
		text: "Inoqare is your single touchpoint to access top-quality overseas medical treatments from anywhere in the world. We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of healthcare.",
		video: "/videos/inoqare.mp4",
		areas: [
			{
				icon: "flaticon-customer-care",
				title: "Extensive Reach",
				info: "Trust our global experience in some of the most complicated and demanding sectors of healthcare delivery."
			},
			{
				icon: "flaticon-support",
				title: "Strong Networks",
				info: "Utilize our relationships with international providers including hospitals, brokers, governments, and professionals."
			},
			{
				icon: "flaticon-tour-guide",
				title: "Robust Treatments",
				info: "Access the best treatment regardless of where you are. Gain your best health and leave everything else to us."
			}
		]
	},
	promo: {
		title: "How it Works",
		text: "Finding Healthcare Abroad was Never This Easy!",
		promos: [
			{
				image: "/images/service/howitworks/quote.png",
				title: "Quote",
				text: "Request a quote directly from our website."
			},
			{
				image: "/images/service/howitworks/match.png",
				title: "Match",
				text: "Based on your query, we recommend the best providers"
			},
			{
				image: "/images/service/howitworks/control.png",
				title: "Control",
				text: "Finalize the details of your treatment and traveling."
			},
			{
				image: "/images/service/howitworks/treat.png",
				title: "Treat",
				text: "Receive the treatment from the provider of your choice."
			},
		]
	},
	partner: {
		title: "Our Partners",
		text: "We work with the best healthcare service providers, travel agencies, insurance companies, and business partners around the world.",
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

const index = () => {
	return (
		<React.Fragment>
			<HomeBanner data={pageData.banner}/>
			<ExpertiseVideo data={pageData.expertise} />
			<RecommendTour />
			<Promo data={pageData.promo} />
			<Challenges bgColor="bg-heath" />
			<Partners data={pageData.partner}/>
		</React.Fragment>
	);
};

export default index;
