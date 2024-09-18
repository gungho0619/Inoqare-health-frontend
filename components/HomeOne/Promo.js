import React from "react";

const Card = ({ image, title, text }) => {
	return (
		<div className="service-card hover-img hover-shadow h-100 d-flex flex-column">
			<div className="image">
				<img alt="" src={image} data-original={image} data-lazy-src={image} />
			</div>
			<div className="promo-item style1 text-center mb-0">
				<div className="promo-content">
					<h4>{title}</h4>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

const Promo = () => {
	const data = [
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
	return (
		<section className="promo-wrap pt-50 pb-4">
			<div className="container">
				<div className="row mb-small align-items-end">
					<div className="col-md-12">
						<div className="section-title style1 text-center">
							<span>How it Works</span>
							<h2>
								Finding Healthcare Abroad was Never This
								Easy!
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-4 ">
					{data.map((item, i) => 
						<div className="col mb-4" key={i}>
							<Card image={item.image}
								title={item.title}
								text={item.text}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Promo;
