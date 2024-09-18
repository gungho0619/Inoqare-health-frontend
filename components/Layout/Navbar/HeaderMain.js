import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HeaderMenu } from "@data/dynamicMenu";
import Link from "next/link";

const HeaderMain = ({ menuName = "main", mobileView }) => {
	const router = useRouter();
	const menus = HeaderMenu[menuName];
	const [sticky, setSticky] = useState(false);
	const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

	const showStickyMenu = () => {
		if (window.scrollY >= 80) setSticky(true);
		else setSticky(false);
	};

	if (typeof window !== "undefined")
		window.addEventListener("scroll", showStickyMenu);

	const toggleMobileMenu = () => setDisplayMobileMenu(!displayMobileMenu);

	useEffect(() => {
		setDisplayMobileMenu(false);
	}, [router.pathname]);

	return (
		<header
			className={`header-wrap style1 ${sticky ? "is-sticky" : ""} ${
				menuName ? "" : "d-md-none"
			}`}
		>
			<div className="header-bottom">
				<div className="container-fluid">
					<div className="row align-items-center justify-content-between">
						<div className="col-6 d-flex d-md-none">
							<div id="google_translate_element_mobile"></div>
						</div>
						<div className="col-lg-2 col-md-3 col-4">
							<div className="logo v2 margin-left-sm">
								<Link href="/">
									<a>
										<img
											src="/images/logo.svg"
											alt="Inoqare"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-8 col-md-9 col-2 order-lg-1 order-md-2 order-2">
							<div
								className={
									displayMobileMenu
										? "main-menu-wrap open"
										: "main-menu-wrap"
								}
							>
								<div className="menu-close xl-none">
									<a onClick={toggleMobileMenu}>
										<i className="las la-times"></i>
									</a>
								</div>

								<div id="menu">
									<ul className={`main-menu pt-5 pt-md-0`}>
										{menus?.menus.map((menu, i) => (
											<li key={i}>
												<Link href={menu.path}>
													<a>
														{menu.name.toLowerCase() ===
															"home" && (
															<>
																<i className="las la-home"></i>{" "}
																&nbsp;
															</>
														)}
														{menu.name}
													</a>
												</Link>
											</li>
										))}
										{mobileView && HeaderMenu.topMenus.map((menu, i) => (
												<li key={i}>
													<Link href={menu.path}>
														<a>{menu.name}</a>
													</Link>
												</li>
											)
										)}
										{mobileView ? 
										<>
											<li>
												<Link href="/about-us">
													<a>ABOUT US</a>
												</Link>
											</li>
											<li>
												<Link href="/contact-us">
													<a>CONTACT US</a>
												</Link>
											</li>
										</>	: <></>
									}
									</ul>
								</div>
							</div>

							<div className="mobile-bar-wrap">
								<div className="mobile-menu xl-none">
									<a onClick={toggleMobileMenu}>
										<i className="las la-bars"></i>
									</a>
								</div>
							</div>
						</div>

						{menus?.quote && (
							<div className="col-lg-2 col-md-6 order-lg-2 order-md-1 md-none">
								<div className="header-bottom-right">
									<div className="contact-box">
										<Link href="/get-quote/">
											<a className="btn v3">
												GET A QUOTE{" "}
												<i className="ri-logout-circle-r-line"></i>
											</a>
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderMain;
