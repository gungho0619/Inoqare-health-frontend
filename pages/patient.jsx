import React from "react";
import RecommendTour from "../components/HomeOne/RecommendTour";
import Specialties from "../components/HomeOne/Specialties";
import AdventureTour from "../components/HomeOne/AdventureTour";
import SingleTour from "../components/HomeOne/SingleTour";
import Partners from "@components/Partners/Partners";
import Promo from "@components/Promo/Promo";

export default function Patient() {
	const pageData = {
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
	}
	return (
		<React.Fragment>
			<SingleTour />
			<Promo data={pageData.promo}/>
			<Specialties />
			<RecommendTour />
			<Partners data={pageData.partner}/>
			<AdventureTour
				heading="When Your Health is Involved, Leave Nothing to Chance"
				para="Get in touch with a Inoqare Expert"
			/>
		</React.Fragment>
	);
}