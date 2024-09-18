import Link from "next/link";
import styles from "./Service.module.scss";

const Service = () => {
	let data = [
		{
			url: "/#",
			image: "/images/home/individual.svg",
			title: "Inoqare for Individuals",
			text: "Receive the treatment you need and be in good hands wherever you go."
		},
		{
			url: "/#",
			image: "/images/home/enterprise.svg",
			title: "Inoqare for Enterprises",
			text: "Get the finest healthcare for your employees anywhere in the world."
		},
		{
			url: "/#",
			image: "/images/home/medical-partner.svg",
			title: "Inoqare for Medical Partner",
			text: "Deliver on-demand healthcare to patients around the world via our professional platform."
		},
		{
			url: "/#",
			image: "/images/home/broker.svg",
			title: "Inoqare for Brokers",
			text: "Make top-quality healthcare available to your clients all over the world."
		}
	]

	return (
		<section className="service-wrap">
			<div className="container">
				<div className="section-title style4 text-center mb-40 ">
					<span className="about-title-span">Our Vision</span>
					<h5 className="mb-2">
						Exceptional Quality Healthcare for All
					</h5>
					<p className="para-footer">
						At Inoqare, we make safe, effective, timely,
						efficient, equitable, and patient-centric
						healthcare accessible to everyone, everywhere.
					</p>
				</div>
				<div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
					{data.map((item, i)=> 
						<div className="col" key={i}>
							<div className="service-item style2">
								<div className={`service-img ${styles.image}`}>
									<Link href={item.url}>
										<a>
											<img className="service-partner-img" src={item.image} alt={item.title} />
										</a>
									</Link>
								</div>
								<div className="service-info">
									<h4>
										<Link href={item.url}>
											<a>{item.title}</a>
										</Link>
									</h4>
									<p>{item.text}</p>
								</div>
							</div>
						</div>
					)}

				</div>
			</div>
		</section>
	);
};

export default Service;
