import React from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import QuoteHeader from "@components/QuoteHeader/QuoteHeader";
import PricePlanForm from "../../components/PricePlan/PricePlanForm";


const PricePlan = () => {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <React.Fragment>
      <div id="google_translate_element" style={{ display: "none" }} ></div>
      <Head>
        <title>Inoqare-World’s Finest International Healthcare</title>
      </Head>
      <QuoteHeader />
      <section className="contact-wrap pt-50 pb-100">
        <div className="container">
          <PricePlanForm sid={sid} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricePlan;
