import Link from '../../utils/ActiveLink';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/router";
import {
	translateLanguage,
	googleTranslateElementInit,
	getLocation,
} from "@components/GoogleTranslate/GoogleTranslate";

const Navbar = () => {
    const router = useRouter();

    const { pathname } = router;

    const [displayContact, setDisplayContact] = useState(false);
    const [sticky, setSticky] = useState(false);

    const [name, setName] = useState({
      country_name: "English",
      code: "en",
      text: "English",
    });
  
  	const [mobileView, setMobileView] = useState(
      typeof window !== "undefined" && window.matchMedia("(max-width: 567px)").matches
    );
    const [clicked, setClicked] = useState(false);

  	const toggleSelected = (cat, index) => {
      translateLanguage(cat.text);
      if (clicked === index) return setClicked(false);
      setClicked(index);
      setName(cat);
    };
  
    // sticky menu
    const showStickyMenu = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    if (typeof window !== 'undefined') {
        // browser code
        window.addEventListener('scroll', showStickyMenu);
    }
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
        <>
        <section id="navbar">
                {/* Top Header */}
                <header className="header-wrap style1">
				<div className={displayContact ? "body_overlay open" : "body_overlay"}></div>
        <div className="header-top">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-12">
								<div className="header-top-left">
                <div style={{color: 'white'}} className="pad10">Join us</div>                 
                <ul className="social-profile v1 border-right">
                  <li><a className="backcolor-light" href="https://facebook.com/inoqare"><i className="ri-facebook-fill"></i></a></li>
                  <li><a className="backcolor-light" href="https://linkedin.com/inoqare"><i className="ri-linkedin-fill"></i></a></li>
                  <li><a className="backcolor-light" href="https://instagram.com/inoqare"><i className="ri-instagram-line"></i></a></li>
                </ul>


									<div className="close-header-top xl-none" >
                                    <div id="google_translate_element_mobile"></div>
									</div>
								</div>
							</div>

							<div className="col-lg-5">
								<div className="header-top-right">
									<div id="google_translate_element" 	style={{ marginLeft: "10px" }} ></div>
								</div>
							</div>
						</div>
					</div>
        </div>
			</header>
                 
                {/* Navbar area */}
                <header
                    className={
                        sticky ? 'is-sticky header-wrap style1' : 'header-wrap style1'
                    }
                >
                    <div className='header-bottom'>
                        <div className='container-fluid'>
                            <div className='row align-items-center'>
                                <div className='col-lg-2 col-md-3 col-5'>
                                    <div className='logo v2'>
                                        <Link href='#home'>
                                            <a>
                                                <img src='/images/logo.png' alt='Image' />
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-lg-7 col-md-9 col-7 order-lg-3 order-md-2 order-2 xl-none'>

                                    <div className='mobile-bar-wrap'>
                                    <div className='header-bottom-right'>
                                    {pathname === "/solutions/hair-transplant" && 
                                        <Link href="/price-plan/hair">
                                            <a className="btn v3 v3_right">
                                                GET A QUOTE
                                            </a>
                                        </Link>
                                    }
                                    {pathname === "/solutions/dental" && 
                                        <Link href="/price-plan/dental">
                                            <a className="btn v3 v3_right">
                                                GET A QUOTE
                                            </a>
                                        </Link>
                                    }
                                    {pathname === "/solutions/gastric" && 
                                        <Link href="/price-plan/gastric">
                                            <a className="btn v3 v3_right">
                                                GET A QUOTE
                                            </a>
                                        </Link>
                                    }
                                    </div>

                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-6 order-lg-2 order-md-1 md-none'>
                                    <div className='header-bottom-right'>
                                    {pathname === "/solutions/hair-transplant" && 
                                        <Link href="/price-plan/hair">
                                            <a className="btn v3 v3_right">
                                            GET A QUOTE{" "}
                                                <i className="ri-logout-circle-r-line"></i>
                                            </a>
                                        </Link>
                                    }
                                    {pathname === "/solutions/dental" && 
                                        <Link href="/price-plan/dental">
                                            <a className="btn v3 v3_right">
                                            GET A QUOTE{" "}
                                                <i className="ri-logout-circle-r-line"></i>
                                            </a>
                                        </Link>
                                    }
                                    {pathname === "/solutions/gastric" && 
                                        <Link href="/price-plan/gastric">
                                            <a className="btn v3 v3_right">
                                            GET A QUOTE{" "}
                                                <i className="ri-logout-circle-r-line"></i>
                                            </a>
                                        </Link>
                                    }
                                    
                                        <div className='contact-box'>
                                            <span className='ri-phone-line'></span>
                                            <p>
                                                Contact Now <br />
                                                <a href='tel:+442045863872'>+44 204 586 3872</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                </section>

        </>
    );
};

export default Navbar;
