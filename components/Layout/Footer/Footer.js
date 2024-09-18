import React from "react";
import Link from "next/link";
import {
	faEnvelopeOpenText,
	faPenToSquare,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import Cookie from "../Cookie";
import { useState } from "react";
import Cookies from "js-cookie";

const Footer = () => {
	const [cookie, setCookie] = useState(Cookies.get("cookie"));
	
	const today = new Date();
  	const year = today.getFullYear();

	const handleAccept = () => {
		console.log("accepted");
		setCookie(true);
		Cookies.set("cookie", true, { expires: 30 });
		console.log(Cookies.get("cookie"));
	};

	const handleCancel = () => {
		setCookie(true);
		Cookies.remove("cookie");
	};

	return (
		<footer className={`footer-wrap style1 ${styles.footerWraper}`}>
		  <div className="container">
		    <div className="footer-top pt-20 pb-20">
		      <div className="row">
		        <div className="col-lg-3 col-md-12">
		          <a href="/" className={`${styles.footerLogo} mb-4`}>
		            <img src="/images/logo_light.svg" alt="logo Inoqare" />
		          </a>
		          <div className="mb-4">
		            <p>
		              When Your Health is Involved, Leave Nothing
		              to Chance
		            </p>
					<p className="mb-0">
						<a href="tel:+33180839565">
							<span> France :{" "}</span>
							<img src="/images/flags/fr.png" style= {{maxWidth: 24 + 'px'}} />
							<span> +33 1 80 83 95 65</span>
						</a>
					</p>
					<p className="mb-0">
						<a href="tel:+13376281849">
						<span> USA :{" "}</span>
						<img src="/images/flags/en-us.png"/> 
						<span> +1 337 628 1849</span>
						</a>
					</p>
					<p className="mb-0">
						<a href="tel:0014184782486">
						<span> Canada :{" "}</span>
						<img src="/images/flags/en-ca.png"/> 
						<span> +1 418 478 2486</span>
						</a>
					</p>
					<p className="mb-0">
						<a href="tel:+442045863872">
						<span> UK :{" "}</span>
						<img src="/images/flags/en.png" style= {{maxWidth: 24 + 'px'}} /> 
						<span> +44 204 586 3872</span>
						</a>
					</p>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-4 col-sm-6">
		          <div className="footer-widget">
		            <h4 className="footer-widget-title">About</h4>
		            <ul className="footer-menu">
		              <li>
		                <Link href="/contact-us">
		                <a>Help Center</a>
		                </Link>
		              </li>
		              <li>
		                <Link href="/privacy-policy">
		                <a>Privacy</a>
		                </Link>
		              </li>
		              <li>
		                <Link href="/mentions-legales">
		                <a>Mentions Légales</a>
		                </Link>
		              </li>
		              <li>
		                <Link href="/contact-us">
		                <a>Join Us</a>
		                </Link>
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-4 col-sm-6">
		          <div className="footer-widget">
		            <h4 className="footer-widget-title">
		              Services
		            </h4>
		            <ul className="footer-menu">
		              <li>
		                <Link href="/">
		                <a>Inoqare for Individuals</a>
		                </Link>
		              </li>
		              <li>
		                <Link href="/enterprises">
		                <a>Inoqare for Enterprises</a>
		                </Link>
		              </li>
		              <li>
		                <Link href="/partners">
		                <a>Inoqare for Medical Partner</a>
		                </Link>
		              </li>{" "}
		              <li>
		                <Link href="/brokers">
		                <a>Inoqare for Broker</a>
		                </Link>
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-4 col-sm-6">
		          <div className="footer-widget">
		            <h4 className="footer-widget-title">
		              Contact Us
		            </h4>
		            <ul className={`footer-menu ${styles.footerMenu}`}>
		              <li>
		                <FontAwesomeIcon icon={faEnvelopeOpenText} className="footer-icon" />
		                <a href="mailto:contact@inoqure.com">
		                  contact@inoqare.com
		                </a>
		              </li>
		              <li>
		                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
		                <Link href="/get-quote">
		                <a>Request a call back</a>
		                </Link>
		              </li>
		              <li>
		                <FontAwesomeIcon icon={faPenToSquare} className="footer-icon" />
		                <Link href="/contact-us">
		                <a>Send us a message</a>
		                </Link>
		              </li>
		            </ul>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div className="footer-bottom">
		      <div className="row align-items-center">
		        <div className="col-lg-6 col-md-4">
		          <ul className="social-profile v1">
		            <li>
					  <a target="_blank" href="https://www.facebook.com/Inoqare-103675005612450">
		                <i className="ri-facebook-fill"></i>
		              </a>
		            </li>
		            <li>
				      <a target="_blank" href="https://www.linkedin.com/company/inoqare.com/about/">
		                <i className="ri-linkedin-fill"></i>
		              </a>
		            </li>
		            <li>
					  <a target="_blank" href="https://www.instagram.com/inoqare/">
		                <i className="ri-instagram-line"></i>
		              </a>
		            </li>
		          </ul>
		        </div>
		        <div className="col-lg-6 col-md-8">
		          <div className="copyright-text">
		            <p>
		              Copyright{" "}
		              <span className="las la-copyright"></span>{" "}
		              {year}. Inoqare. All Rights Reserved
		            </p>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>

		  {!cookie &&
		  <Cookie accept={handleAccept} cancel={handleCancel} />}
		</footer>
	);
};

export default Footer;
