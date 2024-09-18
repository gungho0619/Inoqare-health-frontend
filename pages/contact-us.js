import React from "react";
import Link from "next/link";
import ContactForm from "../components/Contact/ContactForm";
import PageBanner from "@components/common/PageBanner";

const pageData = {
	banner: {
		title: "Contact Us",
		pageName: "Contact Us",
		bgImage: "",
	},
};

const ContactUs = () => {
	return (
		<React.Fragment>
			<PageBanner data={pageData.banner} type="style2" />

			<section className="contact-wrap ptb-100">
				<div className="container">
					<div className="row pb-70">
						<div className="col-lg-4">
							<div className="contact-address">
								<div className="contact-icon">
									<i className="ri-map-pin-fill"></i>
								</div>
								<div className="contact-info">
									<h5>Office Address</h5>
									<p className="mb-0">
									45 PLACE NICOLE NEUBURGER
									93140 BONDY <br />
									France <br />
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-address">
								<div className="contact-icon">
									<i className="ri-map-pin-fill"></i>
								</div>
								<div className="contact-info">
									<h5>Contact</h5>
									<p className="mb-0">
										<a href="tel:+33180839483">
										<span> France :{" "}</span>
										<img src="/images/flags/fr.png" style= {{maxWidth: 24 + 'px'}} /> 
										<span> +33 1 80 83 94 83</span>
										</a>
									</p>
									<p className="mb-0">
										<a href="tel:+12405075252">
										<span> USA :{" "}</span>
										<img src="/images/flags/24/en-us.png"/> 
										<span> +1 240 507 5252</span>
										</a>
									</p>
									<p className="mb-0">
										<a href="tel:0014184782486">
										<span> Canada :{" "}</span>
										<img src="/images/flags/24/en-ca.png"/> 
										<span> +1 418 478 2486</span>
										</a>
									</p>


									<p className="mb-0">
										Email:{" "}
										<a href="mailto:contact@inoqare.com">
											contact@inoqare.com
										</a>
									</p>
									<p className="mb-0">
										Website:{" "}
										<Link href="/index-2">
										<a>inoqare.com</a>
										</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="contact-address">
								<div className="contact-icon">
									<i className="ri-map-pin-fill"></i>
								</div>
								<div className="contact-info">
									<h5>Follow Us On</h5>
									<p>
									</p>
									<ul className="social-profile v1">
										<li>
											<a target="_blank" href="https://www.facebook.com/Inoqare-103675005612450">
												<i className="ri-facebook-fill"></i>{" "}
											</a>
										</li>
										<li>
											<a target="_blank" href="https://www.linkedin.com/company/inoqare.com/about/">
												{" "}
												<i className="ri-linkedin-fill"></i>{" "}
											</a>
										</li>
										{/*<li>
											<a target="_blank" href="https://twitter.com">
												{" "}
												<i className="ri-twitter-fill"></i>{" "}
											</a>
										</li>*/}
										<li>
											<a target="_blank" href="https://www.instagram.com/inoqare/">
												{" "}
												<i className="ri-instagram-line"></i>{" "}
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<ContactForm />

					{/*<div className="row">
						<div className="col-lg-12">
							<div className="comp_map style2">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
							</div>
						</div>
									</div>*/}
				</div>
			</section>
		</React.Fragment>
	);
};

export default ContactUs;
