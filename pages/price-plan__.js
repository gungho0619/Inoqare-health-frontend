import React from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import PricePlanForm from "../components/PricePlan/PricePlanForm";
// import QuoteHeader from "@components/QuoteHeader/QuoteHeader";

const PricePlan = () => {
	const router = useRouter();
  	const { sid } = router.query;

	return (
		<React.Fragment>
			<Head>
				<title>Inoqare-World’s Finest International Healthcare</title>
			</Head>
			{/*<QuoteHeader />*/}
			<section className="contact-wrap pt-50 pb-100">
				<div className="container">
					<PricePlanForm />
				</div>
			</section>
		</React.Fragment>
	);
};

export default PricePlan;
