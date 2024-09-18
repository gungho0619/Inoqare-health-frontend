import React, { useEffect } from "react";

const SubscriptionPartner = () => {
    
useEffect(() => {
const script = document.createElement("script");
script.src = "https://js.stripe.com/v3/pricing-table.js";
script.async = true;
document.body.appendChild(script);
return () => {
document.body.removeChild(script);
};
}, []);
return React.createElement("stripe-pricing-table", {
"pricing-table-id" : "prctbl_1N7JPFFk94eVFADx10iLfmHn",
"publishable-key" : "pk_live_51N2vheFk94eVFADxHpinKda2noZSkgXv0PH40wMSMQjsbgDpnQbQH8pfJH9BgwIFkQnPP74uKQyPd8T3C3wqkx6100UDDbrjW1",
});
};
export default SubscriptionPartner;