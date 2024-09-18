import React from "react";
import PageBanner from "@components/common/PageBanner";
import Partners from "@components/Partners/Partners";
import ContactSpecialities from "@components/Contact/ContactSpecialities";

const pageData = {
	pageTitle: "We Deliver a Borderless, Seamless, Frictionless, and Worriless International Treatment Experience",
	banner: {
		title: "Testimonial",
		pageName: "Testimonial",
		bgImage: ""
	},
	testimonials: [
		{
			name: "Melvin H",
			comment: `"I had a lot of apprehension but everything is going well thank you very much Paris Internationale care"`
		},
		{
			name: "Debbie Stone",
			comment: `With your advice and support, I was able to take the plunge, thank you Paris International Care.`
		},
		{
			name: "Ronald S",
			comment: `"Thank you to Paris International Care for taking care of me and my friends"`
		},
		{
			name: "Jeffrey Coleman",
			comment: `"Thank you for being there for me when I needed you most. Thank you very much, I really recommend Paris International Care."`
		},
		{
			name: "Wilma Herrera",
			comment: `"I performed my rhinoplasty at Paris Internationale care, the service was incredible. They looked after me from start to finish I really recommend."`
		},
		{
			name: "Jonathan Hunter",
			comment: `"I was really in doubt, and I was really scared. Paris Internationale care was able to reassure me and my family. Thank you so much !"`
		}
	],
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
};

const Testimonials = () => {

	let settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 900,
		autoPlay: false,
		autoplaySpeed: 900,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: "w-100",
		swipeToSlide: true,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerMode: true,
					centerPadding: '80px'
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '30px'
				},
			},
		],
	};

	return (
		<React.Fragment>
			<PageBanner data={pageData.banner} type="style2" />

			<section className="about-wrap pt-50 pb-50">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title text-center mb-40 style4">
								<span>What Our</span>
								<h2>Client Say About Us</h2>
							</div>
						</div>
					</div>
					<div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
						{pageData.testimonials.map((item, i) =>
							<div className="col mb-4" key={i}>
								<div className="testimonial-item new-design h-100">
									<div className="client-info">
										<div className="client-name">
											<h5>{item.name}</h5>
										</div>
										<div className="client-quote">
											<p className="fs-15">{item.comment}</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					
				</div>
			</section>

			<Partners data={pageData.partner}/>
			<ContactSpecialities />
			
		</React.Fragment>
	);
};

export default Testimonials;
