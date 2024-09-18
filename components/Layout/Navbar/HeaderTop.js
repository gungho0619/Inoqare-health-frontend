import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderMenu } from "@data/dynamicMenu";

const HeaderTop = ({ displayContact, displayAuth, toggleAuth, authData }) => {
	const menus = HeaderMenu.topMenus;
	const router = useRouter();

	return (
		<header className="header-wrap style1">
		    <div className={ displayContact ? "body_overlay open" : "body_overlay" }></div>
		    <div className={displayAuth ? "header-top open" : "header-top" }>
		        <div className="container-fluid">
		            <div className="row align-items-center">
		                <div className="col-lg-7 col-md-12">
		                    <div className="header-top-left">
		                        <div className="close-header-top xl-none" onClick={()=>toggleAuth}>
		                            <button type="button">
		                                <i className="las la-times"></i>
		                            </button>
		                        </div>
		                        <div id="menu_espace">
		                            <ul>
                                        {menus.map((menu, i)=> 
											<li key={i}>
												<Link href={menu.path}>
													<a className={`link style3 link${i+1} ${router.pathname === menu.path ? 'active'+(i+1) : ''}`}>
														{menu.name}
													</a>
												</Link>
											</li>
                                        )}
		                            </ul>
		                        </div>
		                    </div>
		                </div>

		                <div className="col-lg-5">
		                    <div className="header-top-right">
		                        <Link href="/about-us">
		                            <a className="link style3 border-right"> About us</a>
		                        </Link>
		                        <Link href="/contact-us">
		                            <a className="link style3">Contact us</a>
		                        </Link>
		                        <div id="google_translate_element" style={{ marginLeft: "10px" }}></div>
		                        <Link href={ authData.user ? "/quote-list" : "/log-in" }>
                                    <a className="link style3">
                                        <i className="ri-user-line"></i>
                                        {authData.user ? authData.user.first_name : "Sign in"}
                                    </a>
		                        </Link>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </div>
		</header>
	);
};

export default HeaderTop;
