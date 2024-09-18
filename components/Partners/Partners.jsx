import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import styles from './Partners.module.scss';

const Partners = ({ data }) => {
	var settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 2,
		className: styles.partnerSlider,
		swipeToSlide: true,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className="service-wrap pt-30 pb-30">
			<div className="container">
				<div className="mt-4 text-center">
					<h3 className="fs28 fw-700 text-center text-dark">
						{data.title}
					</h3>
					<p>{data.text}</p>
					<hr className="w-25 mx-auto" />
				</div>
				<Slider {...settings}>
						<div className="d-flex align-items-center justify-content-center px-4 service-item my-0">
							<Link href="#">
								<a className="flex-img service-img m-0">
									<img src="/images/partners/partners-6.png" alt="Image"/>
								</a>
							</Link>
						</div>
						<div className="d-flex align-items-center justify-content-center px-4 service-item my-0">
							<Link href="#">
								<a className="flex-img service-img m-0">
									<img src="/images/partners/partners-7.svg" alt="Image"/>
								</a>
							</Link>
						</div>

						<div className="d-flex align-items-center justify-content-center px-4 service-item my-0">
							<Link href="#">
								<a className="flex-img service-img m-0">
									<img src="/images/partners/partners-8.png" alt="Image"/>
								</a>
							</Link>
						</div>

						<div className="d-flex align-items-center justify-content-center px-4 service-item my-0">
							<Link href="#">
								<a className="flex-img service-img m-0">
									<img src="/images/partners/partners-9.png" alt="Image"/>
								</a>
							</Link>
						</div>

						<div className="d-flex align-items-center justify-content-center px-4 service-item my-0">
							<Link href="#">
								<a className="flex-img service-img m-0">
									<img src="/images/partners/partners-10.png" alt="Image"/>
								</a>
							</Link>
						</div>

				</Slider>
				<Slider {...settings}>
					{data.partners.map((item, i) => (
						<div
							className="d-flex align-items-center justify-content-center px-4 service-item my-0"
							key={i}
						>
							<Link href={item.link}>
								<a className="flex-img service-img m-0">
									<img src={item.image} alt="Image" />
								</a>
							</Link>
						</div>
					))}
				</Slider>

			</div>
		</section>
	);
};

export default Partners;
