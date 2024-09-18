import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "../../../utils/ActiveLink";
import AuthContext from "../../../context/authContext";
import { translateLanguage, googleTranslateElementInit,	getLocation } from "../../GoogleTranslate/GoogleTranslate";
import Contact from "./Contact";
const Navbar = () => {
	const router = useRouter();
	const authData = useContext(AuthContext);
	const [display, setDisplay] = useState(false);
	const [displayContact, setDisplayContact] = useState(false);
	const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
	const [displayAuth, setDisplayAuth] = useState(false);
	const [sticky, setSticky] = useState(false);
	const [mobileView, setMobileView] = useState(
		typeof window !== "undefined" &&
			window.matchMedia("(max-width: 567px)").matches
	);

	useEffect(() => {
		window
			.matchMedia("(max-width: 567px)")
			.addEventListener("change", (e) => setMobileView(e.matches));
	}, []);

	const toggleCart = () => {
		setDisplay(!display);
	};

	const toggleContact = () => {
		setDisplayContact(!displayContact);
	};

	const toggleMobileMenu = () => {
		setDisplayMobileMenu(!displayMobileMenu);
	};
	
	const toggleAuth = () => {
		setDisplayAuth(!displayAuth);
	};

	// sticky menu
	const showStickyMenu = () => {
		if (window.scrollY >= 80)  setSticky(true);
		else  setSticky(false);
	};

	// browser code
	if (typeof window !== "undefined") window.addEventListener("scroll", showStickyMenu);

	//set language
	const [open, setOpen] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [name, setName] = useState({
		country_name: "English",
		code: "en",
		text: "English",
	});

	//toggle language
	const toggleCategory = () => {
		setOpen(!open);
	};

	// Toggle function for select language
	const toggleSelected = (cat, index) => {
		translateLanguage(cat.text);
		if (clicked === index) {
			return setClicked(false);
		}
		setClicked(index);
		setName(cat);
	};

	// Google translator
	useEffect(() => {
		var addScript = document.createElement("script");
		addScript.setAttribute(
			"src",
			"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
		);
		document.body.appendChild(addScript);
		window.googleTranslateElementInit = () =>
			googleTranslateElementInit(
				mobileView
					? "google_translate_element_mobile"
					: "google_translate_element"
			);
		getLocation(setName, toggleSelected);
	}, [mobileView]);

	const secondNavbar = [
		"/",
		"/services",
		"/patient",
		"/treatments",
		"/treatments/cardiology",
		"/treatments/plumonology",
		"/treatments/weight-loss-surgery",
		"/treatments/pulmonary",
		"/treatments/orthopedic-surgery",
		"/treatments/neurosurgery",
		"/treatments/pediatrics-all-specialties",
		"/treatments/gynecology",
		"/treatments/urology",
		"/services/treatments",
	].includes(router.pathname);

	return (
		<div className={`page-wrapper`}>
			<div
				className={display ? "body_overlay open" : "body_overlay"}
			></div>
			{/* Top Header */}
			<header className="header-wrap style1">
				<div className={displayContact ? "body_overlay open" : "body_overlay"}></div>
				<div className={displayAuth ? "header-top open" : "header-top"}>
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-12">
								<div className="header-top-left">
									<div className="close-header-top xl-none" onClick={toggleAuth} >
										<button type="button">
											<i className="las la-times"></i>
										</button>
									</div>
									<div id="menu_espace">
										<ul>
											<li>
												<Link href="/" activeclassname="active1" >
													<a className="link style3 link1">
														Individuals
													</a>
												</Link>
											</li>
											<li>
												<Link href="/brokers" activeclassname="active2" >
													<a className="link style3 link2">
														Brokers
													</a>
												</Link>
											</li>
											<li>
												<Link href="/enterprise" activeclassname="active3" >
													<a className="link style3 link3">
														Enterprises
													</a>
												</Link>
											</li>
											<li>
												<Link href="/partners" activeclassname="active4">
													<a className="link style3 link4">
														Partners
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-lg-5">
								<div className="header-top-right">
									<Link href="/about-us">
										<a className="link style3 border-right">
											About us
										</a>
									</Link>
									<Link href="/contact-us" activeclassname="active" >
										<a className="link style3">Press</a>
									</Link>
									<div id="google_translate_element" 	style={{ marginLeft: "10px" }} ></div>
									<Link href={ authData.user ? "/quote-list" : "/log-in" }>
										<a className="link style3">
											<i className="ri-user-line"></i>
											{authData.user ? authData.user.first_name : "Sign in"}
										</a>
									</Link>
									<div className="contact-box xl-none d-none">
										<span className="ri-phone-line"></span>
										<p>
											Contact Now <br />
											<a href="tel:+15143214567">
												+1 (514) 321-4567
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Navbar area */}
			<header	className={`header-wrap style1 ${sticky ? "is-sticky" : ""}`}>
				<div className={secondNavbar ? "header-bottom" : ""}>
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-6 d-flex d-md-none">
								<div id="google_translate_element_mobile"></div>
							</div>
							{secondNavbar && (
								<div className="col-lg-2 col-md-3 col-4">
									<div className="logo v2 margin-left-sm">
										<Link href="/">
											<a>
												<img
													src="/images/logo.svg"
													alt="Inoqare logo"
												/>
											</a>
										</Link>
									</div>
								</div>
							)}

							<div className="col-lg-8 col-md-9 col-2 order-lg-1 order-md-2 order-2" style={{ paddingLeft: "0" }}>
								<div className={displayMobileMenu ? "main-menu-wrap open" : "main-menu-wrap" }>
									<div className="menu-close xl-none">
										<a onClick={toggleMobileMenu}>
											<i className="las la-times"></i>
										</a>
									</div>

									{secondNavbar && (
										<div id="menu">
											<ul className="main-menu">
												<li>
													<a href="/" activeclassname="active" >
														<i className="las la-home"></i>
														&nbsp; HOME
													</a>
												</li>

												<li>
													<Link href="/patient">
														<a activeclassname="active">
															PATIENT CARE
														</a>
													</Link>
												</li>
												<li className="">
													<a href="/services">
														SERVICE +
													</a>
												</li>

												<li className="">
													<a href="/treatments">
														TREATMENTS
													</a>

												</li>

												<li>
													<a href="testimonials">
														TESTIMONIALS
													</a>
												</li>

												<li className="">
													<a href="/get-quote">
														PERSONALISED
														SERVICES
													</a>
												</li>
												{mobileView && (
													<React.Fragment>
														<hr />
														<li>
															<Link href="/">
																<a activeclassname="active">
																	INDIVIDUALS
																</a>
															</Link>
														</li>
														<li>
															<Link href="/brokers">
																<a activeclassname="active">
																	BROKERS
																</a>
															</Link>
														</li>
														<li>
															<Link href="/enterprise">
																<a activeclassname="active">
																	ENTERPRISE
																</a>
															</Link>
														</li>
														<li>
															<Link href="/partners">
																<a activeclassname="active">
																	MEDICAL
																	PARTNERS
																</a>
															</Link>
														</li>
													</React.Fragment>
												)}
											</ul>
										</div>
									)}
								</div>

								<div className="mobile-bar-wrap">
									<div className="mobile-menu xl-none">
										<a onClick={toggleMobileMenu}>
											<i className="las la-bars"></i>
										</a>
									</div>
								</div>
							</div>

							{secondNavbar && (
								<div className="col-lg-2 col-md-6 order-lg-2 order-md-1 md-none">
									<div className="header-bottom-right">
										<div className="contact-box">
											<a className="btn v3" href="/get-quote/" >
												GET A QUOTE{" "}
												<i className="ri-logout-circle-r-line"></i>
											</a>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>

			{/* Sidebar Modal */}
			<Contact show={displayContact} toggleContact={toggleContact} />

		</div>
	);
};

export default Navbar;
