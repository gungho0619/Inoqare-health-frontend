import React from 'react'
import PageBanner from '@components/common/PageBanner'
import RecommendTour from "@components/HomeOne/RecommendTour";
import ServicesDetails from "@components/Services/ServicesDetails";
import Challenges from "@components/HomeOne/Challenges/Challenges";
import ContactSpecialities from "@components/Contact/ContactSpecialities";


// import Promo from '@components/Promo/Promo'
// import FeatureCard from '@components/FeatureCard/FeatureCard'

const index = () => {
    const pageData = {
		banner: {
			title: "Services",
			pageName: "Services",
			bgImage: "/images/breadcrumb/pages/services_banner.png"
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
        pageTitle: "Inoqare is your single touchpoint to access top-quality overseas medical treatments from anywhere in the world.",
        pageContent: "We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of healthcare international.",
        lists: [
            {
                title: "Before your trip - We anticipate your needs :",
                image: "/images/service/services/services-3.png",
                data: [
                    {url: "", title: "Consultation with a suitable specialist"},
                    {url: "", title: "Selection of a hospital establishment and a team of specialists"},
                    {url: "", title: "Estimate of medical costs"},
                    {url: "", title: "Visa Process"}
                ]
            },
            {
                title: "Medical Matchmaking",
                image: "/images/service/services/services-2.png",
                data: [
                    {url: "", title: "Travel Arrangement"},
                    {url: "", title: "Accommodation"},
                    {url: "", title: "Translation Services"},
                    {url: "", title: "Visa Process"}
                ]
            },
            {
                title: "Medical Matchmaking",
                image: "/images/service/services/services-1.png",
                data: [
                    {url: "", title: "Travel Arrangement"},
                    {url: "", title: "Accommodation"},
                    {url: "", title: "Translation Services"},
                    {url: "", title: "Visa Process"}
                ]
            }
        ]
	}
    return (
        <React.Fragment>
            <PageBanner data={pageData.banner} />

            <ServicesDetails />
{/* 
            <div className="pt-100 pb-sm">
                <div className="container">
                    <h2 className='fs-28'>{pageData.pageTitle}</h2>
                    <p>{pageData.pageContent}</p>
                </div>
            </div>
            
            <Promo data={pageData.promo} />
            
            <div className="container">
                {pageData.lists.map((item, i) =>
                    <FeatureCard data={item} key={i}/>
                )}
            </div> */}
            <Challenges bgColor="bg-heath" />
            <RecommendTour />
            <ContactSpecialities />
        </React.Fragment>
    )
}

export default index