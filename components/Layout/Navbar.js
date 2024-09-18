import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "../../utils/ActiveLink";
import AuthContext from "../../context/authContext";
import category from "../../data/language_category";
import {
  translateLanguage,
  googleTranslateElementInit,
  getLocation,
} from "../GoogleTranslate/GoogleTranslate";

const Navbar = () => {
  const router = useRouter();
  const [mobileView, setMobileView] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 567px)").matches
  );
  const authData = useContext(AuthContext);
  const [display, setDisplay] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 567px)")
      .addEventListener("change", (e) => setMobileView(e.matches));
  }, []);

  const toggleCart = () => {
    setDisplay(!display);
  };
  const toggleContact = () => {
    setDisplayContact(!displayContact);
  };
  const toggleMobileMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
  };
  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  // sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  //set language
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState({
    country_name: "English",
    code: "en",
    text: "English",
  });

  //toggle language
  const toggleCategory = () => {
    setOpen(!open);
  };

  // Toggle function for select language
  const toggleSelected = (cat, index) => {
    translateLanguage(cat.text);
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
    setName(cat);
  };

  // Google translator
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = () =>
      googleTranslateElementInit(
        mobileView
          ? "google_translate_element_mobile"
          : "google_translate_element"
      );
     getLocation(setName, toggleSelected);
  }, [mobileView]);

  const secondNavbar = [
    "/",
    "/services",
    "/patient",
    "/treatments",
    "/treatments/cardiology",
    "/treatments/plumonology",
    "/treatments/weight-loss-surgery",
    "/treatments/pulmonary",
    "/treatments/orthopedic-surgery",
    "/treatments/neurosurgery",
    "/treatments/pediatrics-all-specialties",
    "/treatments/gynecology",
    "/treatments/urology",
    "/services/treatments",
    "/testimonial",
  ].includes(router.pathname);

  return (
    <>
      <div className="page-wrapper">
        <div className={display ? "body_overlay open" : "body_overlay"}></div>
        {/* Top Header */}
        <header className="header-wrap style1">
          <div
            className={displayContact ? "body_overlay open" : "body_overlay"}
          ></div>
          <div className={displayAuth ? "header-top open" : "header-top"}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="header-top-left">
                    <div
                      className="close-header-top xl-none"
                      onClick={toggleAuth}
                    >
                      <button type="button">
                        <i className="las la-times"></i>
                      </button>
                    </div>
                    <div id="menu_espace">
                      <ul>
                        <li>
                          <Link href="/" activeClassName="active1">
                            <a className="link style3 link1">Individuals</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/brokers" activeClassName="active2">
                            <a className="link style3 link2">Brokers</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/enterprise" activeClassName="active3">
                            <a className="link style3 link3">Enterprises</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/partners" activeClassName="active4">
                            <a className="link style3 link4">Partners</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="header-top-right">
                    <Link href="/about-us">
                      <a className="link style3 border-right">About us</a>
                    </Link>
                    <Link href="/contact-us" activeClassName="active">
                      <a className="link style3">Contact Us</a>
                    </Link>
                    <div
                      id="google_translate_element"
                      style={{ marginLeft: "10px" }}
                    ></div>
                    {/* <div
                      onClick={() => toggleCategory()}
                      className={
                        open
                          ? "nice-select open d-none d-md-block"
                          : "nice-select d-none d-md-block"
                      }
                    >
                      <span className="current notranslate">
                        <img
                          src={`//parisinternationalcare.fr/wp-content/plugins/gtranslate/flags/24/${name.code}.png`}
                          height="24"
                          width="24"
                          alt="en"
                        />{" "}
                        {name.country_name}
                      </span>
                      <ul className="list">
                        {category.length > 0 &&
                          category.map((cat, index) => (
                            <li
                              key={index}
                              onClick={(e) => toggleSelected(cat, index)}
                              onChange={(e) => e}
                              className={
                                clicked === index
                                  ? "option selected focus"
                                  : "option"
                              }
                              style={{ textAlign: "left", paddingLeft: "10px" }}
                            >
                              <span className="notranslate">
                                <img
                                  src={`//parisinternationalcare.fr/wp-content/plugins/gtranslate/flags/24/${cat.code}.png`}
                                  height="24"
                                  width="24"
                                  alt="en"
                                />{" "}
                                {cat.country_name}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div> */}
                    <Link href={authData.user ? "/quote-list" : "/log-in"}>
                      <a className="link style3">
                        <i className="ri-user-line"></i>
                        {authData.user ? authData.user.first_name : "Sign in"}
                      </a>
                    </Link>
                    <div className="contact-box xl-none d-none">
                      <span className="ri-phone-line"></span>
                      <p>
                        Contact Now <br />
                        <a href="tel:+15143214567">+1 (514) 321-4567</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navbar area */}
        <header
          className={
            sticky ? "is-sticky header-wrap style1" : "header-wrap style1"
          }
        >
          <div className={secondNavbar && "header-bottom"}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-6 d-flex d-md-none">
                  <div id="google_translate_element_mobile"></div>
                  {/* <div
                    onClick={() => toggleCategory()}
                    className={open ? "nice-select open" : "nice-select"}
                    style={{ color: "black" }}
                  >
                    <span
                      className="current notranslate"
                      style={{ marginLeft: "-20px" }}
                    >
                      <img
                        src={`//parisinternationalcare.fr/wp-content/plugins/gtranslate/flags/24/${name.code}.png`}
                        height="24"
                        width="24"
                        alt="en"
                      />{" "}
                      {name.country_name}
                    </span>
                    <ul className="list d-flex flex-column align-items-start p-2">
                      {category.length > 0 &&
                        category.map((cat, index) => (
                          <li
                            key={index}
                            onClick={(e) => toggleSelected(cat, index)}
                            onChange={(e) => e}
                            className={
                              clicked === index
                                ? "option selected focus"
                                : "option"
                            }
                          >
                            <span className="notranslate">
                              <img
                                src={`//parisinternationalcare.fr/wp-content/plugins/gtranslate/flags/24/${cat.code}.png`}
                                height="24"
                                width="24"
                                alt="en"
                              />{" "}
                              {cat.country_name}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div> */}
                </div>
                {secondNavbar && (
                  <div className="col-lg-2 col-md-3 col-5">
                    <div className="logo v2 margin-left-sm">
                      <Link href="/">
                        <a>
                          <img src="/images/logo.svg" alt="Inoqare logo" />
                        </a>
                      </Link>
                    </div>
                  </div>
                )}

                <div
                  className="col-lg-8 col-md-9 col-1 order-lg-1 order-md-2 order-2"
                  style={{ paddingLeft: "0" }}
                >
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

                    {secondNavbar && (
                      <div id="menu">
                        <ul className="main-menu">
                          <li>
                            <a href="/" activeClassName="active">
                              {" "}
                              <i className="las la-home"></i>
                            </a>
                          </li>

                          <li>
                            <Link href="/patient">
                              <a activeClassName="active">PATIENT CARE</a>
                            </Link>
                          </li>
                          <li className="">
                            {/*has-children */}
                            <a href="/services">SERVICE +</a>
                            {/* <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span> */}
                            {/* <ul className="sub-menu">
                            <li>
                              <Link
                                href="/destination"
                                activeClassName="active"
                              >
                                <a>Destination</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/destination-details"
                                activeClassName="active"
                              >
                                <a>Destination Details</a>
                              </Link>
                            </li>
                          </ul> */}
                          </li>

                          <li className="">
                            <a href="/treatments">TREATMENTS</a>
                            {/* <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li className="has-children">
                              <a href="#">Shop Layout</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link
                                    href="/shop-left-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop Left Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop-right-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop Right Sidebar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop-no-sidebar"
                                    activeClassName="active"
                                  >
                                    <a>Shop No Sidebar</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                href="/shop-details"
                                activeClassName="active"
                              >
                                <a>Shop Details</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/wishlist" activeClassName="active">
                                <a>Wishlist</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cart" activeClassName="active">
                                <a>Cart</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/checkout" activeClassName="active">
                                <a>Checkout</a>
                              </Link>
                            </li>
                            <li className="has-children">
                              <a href="#">User</a>
                              <span className="menu-expand">
                                <i className="las la-angle-down"></i>
                              </span>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/log-in" activeClassName="active">
                                    <a>Log In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/register"
                                    activeClassName="active"
                                  >
                                    <a>Register</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/forgot-password"
                                    activeClassName="active"
                                  >
                                    <a>Forgot Password</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/quote-list"
                                    activeClassName="active"
                                  >
                                    <a>My Account</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul> */}
                          </li>

                          <li>
                            <a href="/testimonial">TESTIMONIALS</a>
                          </li>

                          <li className="">
                            <a href="/get-quote">PERSONALISED SERVICES</a>
                            {/* <span className="menu-expand">
                            <i className="las la-angle-down"></i>
                          </span>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/about-us" activeClassName="active">
                                <a>About Us</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/contact-us" activeClassName="active">
                                <a>Contact Us</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/team" activeClassName="active">
                                <a>Team</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/pricing-plan"
                                activeClassName="active"
                              >
                                <a>Pricing Plan</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/testimonial"
                                activeClassName="active"
                              >
                                <a>Testimonials</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/faq" activeClassName="active">
                                <a>FAQ</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/privacy-policy"
                                activeClassName="active"
                              >
                                <a>Privacy Policy</a>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/terms-condition"
                                activeClassName="active"
                              >
                                <a>Terms & Condition</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/404" activeClassName="active">
                                <a>404</a>
                              </Link>
                            </li>
                          </ul> */}
                          </li>
                          {mobileView && (
                            <>
                              <hr />
                              <li>
                                <Link href="/">
                                  <a activeClassName="active">INDIVIDUALS</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/brokers">
                                  <a activeClassName="active">BROKERS</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/enterprise">
                                  <a activeClassName="active">ENTERPRISE</a>
                                </Link>
                              </li>
                              <li>
                                <Link href="/partners">
                                  <a activeClassName="active">
                                    MEDICAL PARTNERS
                                  </a>
                                </Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mobile-bar-wrap">
                    {/*<div
                      className="shopcart xl-none d-none"
                      onClick={toggleCart}
                    >
                      <button type="button">
                        <i className="ri-shopping-cart-line"></i>
                        <span className="item-amt">1</span>
                      </button>
                      <span className="cart-total">$0.00</span>
                    </div>

                     <div
                      className="sidebar-menu xl-none"
                      onClick={toggleContact}
                    >
                      <span className="ri-menu-3-line"></span>
                    </div> */}

                    {/* <div
                      className="mobile-top-bar xl-none"
                      onClick={toggleAuth}
                    >
                      <i className="las la-sliders-h"></i>
                    </div> */}

                    <div className="mobile-menu xl-none">
                      <a onClick={toggleMobileMenu}>
                        <i className="las la-bars"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {secondNavbar && (
                  <div className="col-lg-2 col-md-6 order-lg-2 order-md-1 md-none">
                    <div className="header-bottom-right">
                      <div className="contact-box">
                        <a className="btn v3" href="/get-quote/">
                          GET A QUOTE <i className="ri-logout-circle-r-line"></i>
                        </a>
                      </div>
                      {/*<div className="sidebar-menu" onClick={toggleContact}>
                      <span className="ri-menu-3-line"></span>
                    </div>*/}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar Modal */}
        <div
          className={displayContact ? "contact-popup open" : "contact-popup"}
        >
          <div className="contact-popup-title">
            <h2>Contact Us</h2>
            <button
              type="button"
              className="close-popup"
              onClick={toggleContact}
            >
              <i className="ri-close-fill"></i>
            </button>
          </div>

          <div className="contact-popup-wrap">
            <div className="contact-address">
              <div className="contact-icon">
                <i className="ri-map-pin-fill"></i>
              </div>
              <div className="contact-info">
                <h5>Bougival, France</h5>
                <p>Address: 10 Rue de la Croix aux Vents
78380 Bougival, FRANCE</p>
                <p>
                  Phone: <a href="tel:2132008224">213-200-8224</a>
                  <a href="tel:2132008225">213-200-8225</a>
                </p>
              </div>

              <div className="contact-info">
                <h5 className="mtb-15">Follow Us On:</h5>

                <ul className="social-profile v1">
                  <li>
                    <a target="_blank" href="https://facebook.com">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://linkedin.com">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://instagram.com">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product cart sidebar */}
        <div className={display ? "cart-popup open" : "cart-popup"}>
          <div className="cart-popup-title">
            <h2>Shopping Cart (4)</h2>
            <button type="button" className="close-popup" onClick={toggleCart}>
              <i className="las la-times"></i>
            </button>
          </div>

          <div className="cart-popup-item-wrap">
            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-1.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Large Suitcase</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>

            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-2.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Leather Backpack</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>

            <div className="cart-popup-item">
              <div className="cart-popup-item-img">
                <img src="/images/product/cart-thumb-3.jpg" alt="Image" />
              </div>
              <div className="cart-popup-item-name">
                <p>Orange Suitcase</p>
                <div className="product-quantity">
                  <div className="qtySelector">
                    <span className="ri-subtract-line decreaseQty"></span>
                    <input
                      type="text"
                      className="qtyValue"
                      value="1"
                      onChange={(e) => e}
                    />
                    <span className="las la-plus increaseQty"></span>
                  </div>
                </div>
              </div>
              <div className="cart-popup-item-price">
                <button type="button">
                  <i className="las la-times"></i>
                </button>
                <span>$148.00</span>
              </div>
            </div>
          </div>

          <div className="cart-popup-total-wrap">
            <div className="cart-popup-total">
              <h5>TOTAL</h5>
              <h5>$444.00</h5>
            </div>

            <Link href="/shop-left-sidebar">
              <a className="btn v4">Continue Shopping</a>
            </Link>
            <Link href="/checkout">
              <a className="btn v3">Check Out</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;