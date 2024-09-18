import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ForgotPasswordArea from '../components/Authentication/ForgotPasswordArea';

const pageData = {
	banner: {
		title: "Forgot Password",
		pageName: "Forgot Password",
		bgImage: "",
	},
};

const ForgotPassword = () => {
  return (
    <>
      <PageBanner data={pageData.banner} type="style2"/>
      <ForgotPasswordArea />
    </>
  );
};

export default ForgotPassword;
