import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
	translateLanguage,
	googleTranslateElementInit,
	getLocation,
} from "../../GoogleTranslate/GoogleTranslate";
import AuthContext from "@context/authContext";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";

const Navbar = () => {
	const router = useRouter();
	const authData = useContext(AuthContext);
	const [menuName, setMenuName] = useState("");
	const [display, setDisplay] = useState(false);
	const [displayAuth, setDisplayAuth] = useState(false);
	const [displayContact, setDisplayContact] = useState(false);

	const [mobileView, setMobileView] = useState(
		typeof window !== "undefined" && window.matchMedia("(max-width: 567px)").matches
	);

	const [name, setName] = useState({
		country_name: "English",
		code: "en",
		text: "English",
	});

	const mainNavPaths = [
		"/",
		"/services",
		"/patient",
		"/treatments",
		"/testimonials",
		"/treatments/cardiology",
		"/treatments/plumonology",
		"/treatments/bariatric-surgery",
		"/treatments/plumonology",
		"/treatments/orthopedics",
		"/treatments/neurology",
		"/treatments/pediatrics",
		"/treatments/gynecology",
		"/treatments/urology",
		"/services/treatments",
		"/testimonial",
		"/about-us",
		"/contact-us",
		"/destination",
	];

	const toggleCart = () => setDisplay(!display);
	const toggleContact = () => setDisplayContact(!displayContact);
	const toggleAuth = () => etDisplayAuth(!displayAuth);
	const [clicked, setClicked] = useState(false);

	const toggleSelected = (cat, index) => {
		translateLanguage(cat.text);
		if (clicked === index) return setClicked(false);
		setClicked(index);
		setName(cat);
	};

	useEffect(() => {
		let path = router.pathname;
		if (mainNavPaths.includes(path)) setMenuName("main");
		else setMenuName("");
	}, [router.pathname]);

	useEffect(() => {
		window
			.matchMedia("(max-width: 567px)")
			.addEventListener("change", (e) => setMobileView(e.matches));
	}, []);

	// Google translator
	useEffect(() => {
		var addScript = document.createElement("script");
		addScript.setAttribute(
			"src",
			"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
		);
		document.body.appendChild(addScript);
		window.googleTranslateElementInit = () => {
			googleTranslateElementInit(
				mobileView
					? "google_translate_element_mobile"
					: "google_translate_element"
			);
		};
		getLocation(setName, toggleSelected);
	}, [mobileView]);

	return (
		<div className={`page-wrapper`}>
			<div
				className={display ? "body_overlay open" : "body_overlay"}
			></div>

			<HeaderTop
				displayContact={displayContact}
				displayAuth={displayAuth}
				toggleAuth={toggleAuth}
				authData={authData}
			/>

			<HeaderMain
				menuName={menuName}
				toggleCart={toggleCart}
				mobileView={mobileView}
			/>


		</div>
	);
};

export default Navbar;
