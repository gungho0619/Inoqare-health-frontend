import React from "react";
import PageBanner from "../components/common/PageBanner";
import RegisterArea from "../components/Authentication/RegisterArea";
const pageData = {
	banner: {
		title: "Get Start With Us",
		pageName: "Register",
		bgImage: "",
	},
};
const Register = () => {
  return (
    <>
      <PageBanner data={pageData.banner} type="style2" />
      <RegisterArea />
    </>
  );
};

export default Register;
