import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import NavbarTwo from "@components/LandingPage/Header";
import Footer from "./Footer/Footer";
import FooterTwo from "./Footer/FooterTwo";
const GA_TAG_ID = "G-KGZYGQ398B";
const isProductionEnv =
  process.env.NODE_ENV && process.env.NODE_ENV !== "development";

const Layout = ({ children }) => {
	const router = useRouter();

	const { pathname } = router;

	return (
		<React.Fragment>
			<Head>
			{/* Google Analytics -- Only Include in Production*/}
  {isProductionEnv ? (
    <React.Fragment>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TAG_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </React.Fragment>
  ) : null}			
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="Inoqare-World’s Finest International Healthcare" />
				<meta name="og:title" property="og:title" content="Inoqare-World’s Finest International Healthcare" />
				<meta name="twitter:card" content="Inoqare-World’s Finest International Healthcare" />
				<link rel="canonical" href="https://inoqare.com" />
			</Head>
			{pathname === "/solutions/hair-transplant" ? (
				<NavbarTwo />
			) : pathname === "/solutions/gastric" ? (
					<NavbarTwo />
			) : pathname === "/solutions/dental" ? (
				<NavbarTwo />
			) : pathname === "/calendar" ? (
				<NavbarTwo />
			) : pathname === "/fr/solutions/greffe-cheveux" ? (
					<NavbarTwo />
			) : pathname === "/solutions" ? (
				<NavbarTwo />
			) :	(	
				<Navbar />
			)}
			{children}
	{/*		{pathname === "/destination" ? (
				<FooterTwo />
			) : pathname === "/destination-details" ? (
				<FooterTwo />
			) : (
				<Footer />
			)} */}
			{pathname === "/solutions/hair-transplant" ? (
				<FooterTwo />
			) : pathname === "/solutions/gastric" ? (
				<FooterTwo />
			) : pathname === "/solutions/dental" ? (
				<FooterTwo />
			) : pathname === "/calendar" ? (
				<FooterTwo />
	
			) : (
				<Footer />
			)}

		</React.Fragment>
	);
};

export default Layout;
