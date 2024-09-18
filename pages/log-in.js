import React from "react";
import PageBanner from "../components/common/PageBanner";
import LoginArea from "../components/Authentication/LoginArea";

const pageData = {
	banner: {
		title: "Get Connected",
		pageName: "Log In",
		bgImage: "",
	},
};

const Login = () => {
  return (
    <>
      <PageBanner data={pageData.banner} type="style2" />
      <LoginArea />
    </>
  );
};

export default Login;
