import TreatmentForm from "@components/TreatmentForm/TreatmentForm";
import Video from "@components/Video/Video";
import { data } from "jquery";
import React from "react";
import { useSpring, animated } from 'react-spring';
import PromoW from "@components/Promo/Promo_why";

const pageData = {
	promow: {
		text: "We collaborate exclusively with the best Hospitals and Clinics in the World. ",
		promos: [
			{
				image:"/images/home-service/icon-service2.png",
				title: "We take 0 fee",
			},
			{
				image:"/images/home-service/icon-service1.png",
				title: "Best price",
			},
			{
				image:"/images/home-service/icon-service3.png",
				title: "Fixed price",
			},
		]
	},
}

const HomeBanner = ({data}) => {
	const [props, set] = useSpring(() => ({
		number1: 0,
		number2: 0,
		number3: 0,
		
	  }))
	
	  React.useEffect(() => {
		set({
		  number1: 80,
		  number2: 7600,
		  number3: 97,
		  config: { duration: 3000 }
		})
	}, [])
	return (
		<section className="hero-wrap style1 home-banner">
			<div className="container">
				<div className="row">
					<div className="col-12">
					<Video 
					autoPlay
					muted 
					loop
					playsInline
					preload="auto"
					className="pb-50" url={data.video} />

					<video autoPlay muted loop playsInline>         
    					<source src={data.video} type="video/mp4"/>       
					</video>
					</div>
					<div className="caption">
					<div className="col-lg-12 col-sm-12">
							<div className="hero__content p-md-4 pb-50">
							<h2 className="hero-head banner-form text-center" dangerouslySetInnerHTML={{__html: data.title}}></h2>

						</div>
						<div className="hero-filter-box">
							<div className="px-4 pb-50">
								<TreatmentForm />
							</div>
							<div className="hero__content p-md-4">
								<row>
								<div className="col-12 col-md-4 inline text-center inline text-center">
									<div className="col-lg-3 inline" style={{textAlign: 'right'}}>
										<h1 className="hero-head home-heading banner-form" >+<animated.span>{props.number1.interpolate(number1 => Math.floor(number1))}</animated.span></h1>
									</div>
									<div className="col-lg-6 inline" style={{textAlign: 'left'}}>
										<h2 className="hero-head home-heading banner-form" >&ensp;Countries</h2>
									</div>
								</div>
								<div className="col-12 col-md-4 inline text-center inline text-center">
								<div className="col-lg-3 inline" style={{textAlign: 'right'}}>
										<h1 className="hero-head home-heading banner-form" >+<animated.span>{props.number2.interpolate(number2 => Math.floor(number2))}</animated.span></h1>
									</div>
									<div className="col-lg-6 inline" style={{textAlign: 'left'}}>
										<h1 className="hero-head home-heading banner-form" >&ensp;Partners</h1>
									</div>
								</div>
								<div className="col-12 col-md-4 inline text-center inline text-center">
								<div className="col-lg-3 inline" style={{textAlign: 'right'}}>
										<h1 className="hero-head home-heading banner-form" >+<animated.span>{props.number3.interpolate(number3 => Math.floor(number3))}</animated.span>%</h1>
									</div>
									<div className="col-lg-6 inline" style={{textAlign: 'left'}}>
										<h1 className="hero-head home-heading banner-form" >&ensp;Satisfaction</h1>
									</div>
								</div>
								</row>
							<h2 className="hero-head home-heading banner-form pt-50 no-display" dangerouslySetInnerHTML={{__html: data.smTitle}}></h2>
						</div>
						<PromoW data={pageData.promow} />
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
