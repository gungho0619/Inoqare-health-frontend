import React, { useEffect } from "react";
import PageBanner from "@components/Subscriptions/PageBanner";
import SubscriptionPartner from "@components/Subscriptions/SubscriptionPartner";

export default function SubscriptionPartnerPage () {
return (
    <React.Fragment>
              <PageBanner bannerTitle="Subscriptions" pageName="Subscriptions" bg="subscriptions"/>
        <section class="pt-50 pb-4">
        <SubscriptionPartner/>
        </section>
    </React.Fragment>
);
}