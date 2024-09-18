import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import { store } from '../store/index';
import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/remixicon.css";
import "../public/css/line-awesome.min.css";
import "../public/css/flaticon.css";
import "../public/css/nice-select.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-input-range/lib/css/index.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../public/css/page-css/general.css";
import "../public/css/page-css/header.css";
import "../public/css/page-css/footer.css";
import "../public/css/page-css/home.css";
import "../public/css/page-css/responsive.css";
import "../public/css/page-css/custom.css";
import "../styles/style.scss";
import "../public/css/page-css/landingpage.css";


import Layout from "../components/Layout/Layout";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import AuthContext from "../context/authContext";

import TawkTo from "tawkto-react";
import PopupForm from "@components/PopupForm/PopupForm";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState({});


  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setAuthData({
        user,
        token,
      });
    }
    setTimeout(() => setLoading(false), 2000);
  }, []);

  //for tawk chatting
  useEffect(() => {
    var tawk = new TawkTo("621f9ce11ffac05b1d7c9ff9", "1ft5npkqf");

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  if (router.pathname === "/get-quote" || router.pathname.startsWith('/price-plan')) {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={authData}>
          <Component {...pageProps} />
          <Loader loading={loading} />
          <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </AuthContext.Provider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authData}>
        <Layout>
         <PopupForm />
          <Component {...pageProps} />
          <Loader loading={loading} />
          <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </Layout>
      </AuthContext.Provider>
    </Provider>
  );
}

export default MyApp;
