import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard/BlogCard";

const Resources = () => {
	let blogs = [
		{
			url: "#",
			image: "/images/home/hospital.png",
			title: "10 Best Medical Tourism Destinations",
			publishedAt: "06 Feb , 2021"
		} ,
		{
			url: "#",
			image: "/images/home/regenerative.png",
			title: "10 Emerging Trends in Regenerative Medicine",
			publishedAt: "26 Jan , 2021"
		},
		{
			url: "#",
			image: "/images/home/regenerative.png",
			title: "10 Most Common Medical Procedures People Receive Overseas",
			publishedAt: "15 Jan , 2021"
		},
		{
			url: "#",
			image: "/images/home/hospital.png",
			title: "10 Best Medical Tourism Destinations",
			publishedAt: "06 Feb , 2021"
		} ,
		{
			url: "#",
			image: "/images/home/regenerative.png",
			title: "10 Emerging Trends in Regenerative Medicine",
			publishedAt: "26 Jan , 2021"
		},
		{
			url: "#",
			image: "/images/home/regenerative.png",
			title: "10 Most Common Medical Procedures People Receive Overseas",
			publishedAt: "15 Jan , 2021"
		}
	]

	let settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 900,
		autoPlay: true,
		autoplaySpeed: 0,
		slidesToShow: 3,
		slidesToScroll: 2,
		className: "w-100",
		swipeToSlide: true,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
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
		<div className="page-wrapper mt-20 mb-small">
			<div className="container">
				<div className="adventure-tour-wrap">
					<div className="section-title style1 mb-40 text-center">
						<h2>Resources</h2>
					</div>
				</div>
				<Slider {...settings}>
					{blogs.map((item, i) => (
						<div className="px-2 px-md-3" key={i}>
							<BlogCard data={item} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Resources;
