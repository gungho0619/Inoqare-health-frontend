import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './QuoteHeader.module.scss'
import { translateLanguage, googleTranslateElementInit, getLocation } from "@components/GoogleTranslate/GoogleTranslate";
import category from "@data/language_category";

const QuoteHeader = () => {
    const [name, setName] = useState({
		country_name: "English",
		code: "en",
		text: "English",
	});
	const [open, setOpen] = useState(false);
	const [clicked, setClicked] = useState(false);

	const toggleCategory = () => setOpen(!open);

	// Toggle function for select language
	const toggleSelected = (cat, index) => {
		translateLanguage(cat.code);
		if (clicked === index) setClicked(false);
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
		window.googleTranslateElementInit = () => {
			googleTranslateElementInit(
				"google_translate_element_mobile"
			);
		};
		getLocation(setName, toggleSelected);
	}, []);
    
    return (
        <header className={`${styles.wrapper}`}>
            <div className={`container ${styles.container}`}>
                <nav className="d-flex align-items-center justify-content-between">
                    <div className="logo v2">
                        <Link href="/">
                            <a><img src="/images/logo_light.svg" alt="Inoqare Logo" width="100" /></a>
                        </Link>
                    </div>
                    <div className="menus d-flex align-items-center justify-content-end text-nowrap">
                        <Link href="/contact-us">
                            <a className="link style3 border-right  text-white d-none d-sm-block"> Need help ?</a>
                        </Link>
                        <div id="google_translate_element" style={{ marginLeft: "10px" }}></div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default QuoteHeader