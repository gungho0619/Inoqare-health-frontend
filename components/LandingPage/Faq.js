const Faq = ({data}) => {
  return (
    <div className="faq">
      <div className="section-title text-center style1 mb-40">
        <h1>{data.title}</h1>
        <h2 className="feature_secondary_title">{data.sub_title}</h2>
      </div>
      <div className="faq_container_wrapper">
        {faq.map((data, i) => {
          return (
            <div className="col-sm-12 col-md-5 col-lg-5 faq_container" key={i}>
              <h3 className="faq_title">{data.title}</h3>
              <p className="faq_description">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

const faq = [
  {
    title: 'How do I change my password?',
    description:
      "To change your password, log into your account and click on the 'Settings' tab. From there, you should see an option to change your password. Simply enter your current password and your new password, and click 'Save' to update your password.",
  },

  {
    title: 'What are your hours of operation?',
    description:
      'Our customer service team is available to assist you from 9am to 5pm EST, Monday through Friday. We are closed on weekends and major holidays. If you need assistance outside of these hours, please feel free to leave us a message and we will get back to you as soon as possible.',
  },

  {
    title: 'How do I cancel my subscription?',
    description:
      "To cancel your subscription, log into your account and click on the 'Subscription' tab. From there, you should see an option to cancel your subscription. Simply follow the prompts to cancel your subscription.",
  },
  {
    title: 'How do I place an order?',
    description:
      "Placing an order on our website is easy! Simply add the items you would like to purchase to your shopping cart and proceed to checkout. You will be prompted to enter your shipping and billing information, as well as your payment details. Once you have reviewed your order, click 'Place Order' to complete the process. If you have any issues with this process, please contact our customer support team for assistance.",
  },

  {
    title: 'What is your return policy?',
    description:
      'We offer a 30-day return policy on most of our products. If you are not satisfied with your purchase, you may return it within 30 days of the original purchase date for a full refund. Please note that some items may not be eligible for return, such as customized or personalized products. For more information, please see our full return policy on our website.',
  },
  {
    title: 'How do I track my order?',
    description:
      "Once your order has been shipped, you will receive a shipping confirmation email that includes a tracking number. You can use this tracking number to follow the progress of your delivery on the carrier's website.",
  },
];
