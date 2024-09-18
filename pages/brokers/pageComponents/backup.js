import React from "react";
{/*import AboutVideo from "@components/HomeOne/AboutVideo";*/}
import Challenges from "@components/BrokerPage/Challenges";
import Expertise from "@components/HomeOne/Expertise";
import SingleTour from "@components/BrokerPage/SingleTour";
import Quote from "@components/HomeOne/Quote";
{/*import Partner from "@components/HomeOne/Partners/Partners";*/}
import AdventureTour from "@components/HomeOne/AdventureTour";
import RecommendTour from "@components/HomeOne/RecommendTour";
import BrokerBanner from "@components/BrokerPage/BrokerBanner/BrokerBanner";

export default function Broker() {
	return (
		<React.Fragment>
			<BrokerBanner />
			
			{/*<AboutVideo
				aboutText="About"
				aboutH2="We Deliver International Healthcare Excellence On A Turnkey Basis"
				aboutP="Inoqare is the industry-leading platform that allows individuals, insurance companies, and enterprises to access quality medical treatments on a turnkey basis. We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of on-demand healthcare.."
				h41="Full Coverage"
				h42="Better Prices"
				h43="Robust Treatments"
				p1="Our global experience in some of the most demanding healthcare sectors empowers us to offer an extensive range of treatments and destinations."
				p2="Utilize our relationships with international providers including hospitals, governments, and professionals to access special prices that fit your client’s plan."
				p3="Let Inoqare look after your clients through treatment planning, appointment booking, traveling, medical procedure, and rehabilitation."
			/>*/}
			<Challenges
				bgColor="bg-heath"
				featureStyle="style3"
				ptb100="ptb-100"
				shape={true}
			/>
			<Expertise
				para="The patient’s condition may not allow you to delay the procedure
                or take any chances. And you do not want to settle for the
                second-best treatment that is the first to come your way. You
                wish you could talk to a professional who would:"
				h4s={[
					"Answer all of your questions",
					"Recommend the best and most cost-effective treatment options",
					"Books appointments and makes traveling arrangements",
					"Ensure that your client receives top-quality healthcare",
					"Manage your complete treatment on a turnkey basis",
				]}
			/>
			<SingleTour />
			<Quote
				h2Text="Discover, Recommend, and Administer the Best Medical Treatments to Your Clients"
				paraText="Inoqare provides you quick and easy access to extensive treatment options worldwide, so you can select and quote what’s best for your clients. Let the world be your oyster."
				imgs={[
					"/images/home/quote.png",
					"/images/home/match.png",
					"/images/home/control.png",
					"/images/home/treat.png",
				]}
				headings={["Search", "Quote", "Finalize", "Treat"]}
				texts={[
					"Search our range of treatments or reach out to us for a customized response.",
					"Use the info to prepare a quote for your corporate or individual clients.",
					"Finalize the plan with the enterprise or individual in consultation with Inoqare.",
					"Refer the patient to Inoqare and let us take care of their complete treatment.",
				]}
			/>
			<AdventureTour heading="Have the World’s Finest Healthcare Platform Behind Your Back" />
			{/*<Partner
				heading="We Want You As Our Partners because Experts Work with Experts"
				para="We work with the best healthcare service providers, travel agencies, insurance brokers, and business partners around the world."
				partner1="/images/partners/partners-1.png"
				partner2="/images/partners/partners-2.png"
				partner3="/images/partners/partners-3.jpeg"
				partner4="/images/partners/partners-4.png"
				partner5="/images/partners/partners-5.png"
			/>*/}
			<RecommendTour
				heading="Instant Access to International Treatments Worldwide"
				des1="india"
				des2="germany"
				des3="thailand"
				des4="malaysia"
				des5="canada"
			/>
			<section className="service-wrap pt-50 pb-50">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-12">
							<div className="section-title style1 text-center">
								<h2>
									Offer Your Clients the Peace of Mind they
									Deserve!
								</h2>
								<p>Join Inoqare as an Insurance Broker</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
