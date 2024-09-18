import React from "react";
import Head from "next/head";
import GetQuoteForm from "../components/GetQuote/GetQuoteForm";
import QuoteHeader from "@components/QuoteHeader/QuoteHeader";

const ContactUs = () => {
	return (
		<React.Fragment>
			<div id="google_translate_element" style={{ display: "none" }} ></div>
			<Head>
				<title>Inoqare-World’s Finest International Healthcare</title>
			</Head>
			<QuoteHeader />
			<section className="contact-wrap pt-50 pb-100">
				<div className="container">
					<GetQuoteForm />
				</div>
			</section>
		</React.Fragment>
	);
};

export default ContactUs;
