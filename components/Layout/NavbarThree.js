import React, { useState } from 'react';
import Link from '../../utils/ActiveLink';

const NavbarThree = () => {
  const [display, setDisplay] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [sticky, setSticky] = useState(false);

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

  //sticky menu

  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('scroll', showStickyMenu);
  }

  //set language
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('English');

  //set currency
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currencyClicked, setCurrencyClicked] = useState(false);
  const [currencyName, setCurrencyName] = useState('USD');

  const toggleTopCart = () => {
    setDisplay(!display);
  };

  //toggle language
  const toggleCategory = () => {
    setOpen(!open);
  };

  const category = ['English', 'French', 'Arabic'];

  //toggle function for select language
  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat);
  };

  //toggle currency
  const currency = ['USE', 'EURO', 'YEN'];

  const toggleCurrency = () => {
    setOpenCurrency(!openCurrency);
  };

  //toggle function for select currency
  const toggleSelectedCurrency = (cat, index) => {
    if (currencyClicked === index) {
      return setCurrencyClicked(null);
    }
    setCurrencyClicked(index);
    setCurrencyName(cat);
  };

  return (
    <>
      <div
        className={displayContact ? 'body_overlay open' : 'body_overlay'}
      ></div>
      <header className='header-wrap style3'>
        <div className={display ? 'body_overlay open' : 'body_overlay'}></div>
        <div className={displayAuth ? 'header-top open' : 'header-top'}>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-12'>
                <div className='header-top-left'>
                  <div
                    className='close-header-top xl-none'
                    onClick={toggleAuth}
                  >
                    <button type='button'>
                      <i className='las la-times'></i>
                    </button>
                  </div>
                  <p>
                    Find the best spot, restaurant, hotel, fitness center, shop
                    etc.
                  </p>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='header-top-right'>
                  <Link href='/log-in'>
                    <a className='link style3'>
                      <i className='ri-user-line'></i>SIGN IN
                    </a>
                  </Link>
                  <div
                    onClick={() => toggleCategory()}
                    className={open ? 'nice-select open' : 'nice-select'}
                  >
                    <span className='current'>{name}</span>
                    <ul className='list'>
                      {category.length > 0 &&
                        category.map((cat, index) => (
                          <li
                            key={index}
                            onClick={(e) => toggleSelected(cat, index)}
                            onChange={(e) => e}
                            className={
                              clicked === index
                                ? 'option selected focus'
                                : 'option'
                            }
                          >
                            {cat}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div
                    onClick={() => toggleCurrency()}
                    className={
                      openCurrency ? 'nice-select open' : 'nice-select'
                    }
                  >
                    <span className='current'>{currencyName}</span>
                    <ul className='list'>
                      {currency.length > 0 &&
                        currency.map((cur, index) => (
                          <li
                            key={index}
                            onClick={(e) => toggleSelectedCurrency(cur, index)}
                            onChange={(e) => e}
                            className={
                              clicked === index
                                ? 'option selected focus'
                                : 'option'
                            }
                          >
                            {cur}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='shopcart md-none' onClick={toggleCart}>
                    <button type='button'>
                      <i className='ri-shopping-cart-line'></i>
                      <span className='item-amt'>1</span>
                    </button>
                    <span className='cart-total'>$0.00</span>
                  </div>
                  <div className='contact-box xl-none'>
                    <span className='ri-phone-line'></span>
                    <p>
                      Contact Now <br />
                      <a href='tel:+15143214567'>+1 (514) 321-4567</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header
        className={
          sticky ? 'is-sticky header-wrap style2' : 'header-wrap style2'
        }
      >
        <div className='header-bottom'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-5'>
                <div className='logo v2'>
                  <Link href='/'>
                    <a>
                      <img src='/images/logo.png' alt='Image' />
                    </a>
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 col-md-9 col-7 order-lg-1 order-md-2 order-2'>
                <div
                  className={
                    displayMobileMenu ? 'main-menu-wrap open' : 'main-menu-wrap'
                  }
                >
                  <div className='menu-close xl-none'>
                    <a onClick={toggleMobileMenu}>
                      <i className='las la-times'></i>
                    </a>
                  </div>
                  <div id='menu'>
                    <ul className='main-menu'>
                      <li className='has-children'>
                        <a href='#'>HOME</a>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li>
                            <Link href='/' activeClassName='active'>
                              <a>HOME 1</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/index-2' activeClassName='active'>
                              <a>HOME 2</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/index-3' activeClassName='active'>
                              <a>HOME 3</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>TOURS</a>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li>
                            <Link href='/tours' activeClassName='active'>
                              <a>TOURS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/tour-details' activeClassName='active'>
                              <a>TOURS DETAILS</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>DESTINATION</a>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li>
                            <Link href='/destination' activeClassName='active'>
                              <a>DESTINATIONS</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/destination-details'
                              activeClassName='active'
                            >
                              <a>DESTINATION DETAILS</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>SHOP</a>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li className='has-children'>
                            <a href='#'>SHOP LAYOUT</a>
                            <span className='menu-expand'>
                              <i className='las la-angle-down'></i>
                            </span>
                            <ul className='sub-menu'>
                              <li>
                                <Link
                                  href='/shop-left-sidebar'
                                  activeClassName='active'
                                >
                                  <a>SHOP LEFT SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/shop-right-sidebar'
                                  activeClassName='active'
                                >
                                  <a>SHOP RIGHR SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/shop-no-sidebar'
                                  activeClassName='active'
                                >
                                  <a>SHOP NO SIDEBAR</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href='/shop-details' activeClassName='active'>
                              <a>SHOP DETAILS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/wishlist' activeClassName='active'>
                              <a>WISHLIST</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/cart' activeClassName='active'>
                              <a>CART</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/checkout' activeClassName='active'>
                              <a>CHECKOUT</a>
                            </Link>
                          </li>
                          <li className='has-children'>
                            <a href='#'>USER</a>
                            <span className='menu-expand'>
                              <i className='las la-angle-down'></i>
                            </span>
                            <ul className='sub-menu'>
                              <li>
                                <Link href='/log-in' activeClassName='active'>
                                  <a>LOG IN</a>
                                </Link>
                              </li>
                              <li>
                                <Link href='/register' activeClassName='active'>
                                  <a>REGISTER</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/forgot-password'
                                  activeClassName='active'
                                >
                                  <a>FORGOT PASSWORD</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/admin/profile'
                                  activeClassName='active'
                                >
                                  <a>MY ACCOUNT</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>BLOG</a>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li className='has-children'>
                            <a href='#'>BLOG LAYOUT</a>
                            <span className='menu-expand'>
                              <i className='las la-angle-down'></i>
                            </span>
                            <ul className='sub-menu'>
                              <li>
                                <Link
                                  href='/blog-left-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG LEFT SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/blog-right-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG RIGHT SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/blog-no-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG NO SIDEBAR</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className='has-children'>
                            <a href='#'>BLOG DETAILS</a>
                            <span className='menu-expand'>
                              <i className='las la-angle-down'></i>
                            </span>
                            <ul className='sub-menu'>
                              <li>
                                <Link
                                  href='/blog-details-left-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG DETAILS LEFT SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/blog-details-right-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG DETAILS RIGHT SIDEBAR</a>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href='/blog-details-no-sidebar'
                                  activeClassName='active'
                                >
                                  <a>BLOG DETAILS NO SIDEBAR</a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <Link href='/contact-us'>
                          <a>PAGES</a>
                        </Link>
                        <span className='menu-expand'>
                          <i className='las la-angle-down'></i>
                        </span>
                        <ul className='sub-menu'>
                          <li>
                            <Link href='/about-us' activeClassName='active'>
                              <a>ABOUT US</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/contact-us' activeClassName='active'>
                              <a>CONTACT US</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/team' activeClassName='active'>
                              <a>TEAM</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/pricing-plan' activeClassName='active'>
                              <a>PRICING PLAN</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/testimonial' activeClassName='active'>
                              <a>TESTIMONIALS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/faq' activeClassName='active'>
                              <a>FAQ</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/privacy-policy'
                              activeClassName='active'
                            >
                              <a>PRIVACY POLICY</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/terms-condition'
                              activeClassName='active'
                            >
                              <a>TERMS & CONDITIONS</a>
                            </Link>
                          </li>
                          <li>
                            <Link href='/404' activeClassName='active'>
                              <a>404</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='mobile-bar-wrap'>
                  <div className='shopcart xl-none' onClick={toggleCart}>
                    <button type='button'>
                      <i className='ri-shopping-cart-line'></i>
                      <span className='item-amt'>1</span>
                    </button>
                    <span className='cart-total'>$0.00</span>
                  </div>
                  <div className='sidebar-menu xl-none' onClick={toggleContact}>
                    <span className='ri-menu-3-line'></span>
                  </div>
                  <div className='mobile-top-bar xl-none' onClick={toggleAuth}>
                    <i className='las la-sliders-h'></i>
                  </div>
                  <div className='mobile-menu xl-none'>
                    <a onClick={toggleMobileMenu}>
                      <i className='las la-bars'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 order-lg-2 order-md-1 md-none'>
                <div className='header-bottom-right'>
                  <div className='contact-box'>
                    <span className='ri-phone-line'></span>
                    <p>
                      Contact Now <br />
                      <a href='tel:+15143214567'>+1 (514) 321-4567</a>
                    </p>
                  </div>
                  <div className='sidebar-menu' onClick={toggleContact}>
                    <span className='ri-menu-3-line'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={displayContact ? 'contact-popup open' : 'contact-popup'}>
        <div className='contact-popup-title'>
          <h2>Contact Us</h2>
          <button type='button' className='close-popup' onClick={toggleContact}>
            <i className='ri-close-fill'></i>
          </button>
        </div>
        <div className='contact-popup-wrap'>
          <div className='contact-address'>
            <div className='contact-icon'>
              <i className='ri-map-pin-fill'></i>
            </div>
            <div className='contact-info'>
              <h5>San Francisco,USA</h5>
              <p>Address: 123 westearn Road,LA</p>
              <p>
                Phone: <a href='tel:2132008224'>213-200-8224</a>
                <a href='tel:2132008225'>213-200-8225</a>
              </p>
              <h5 className='mt-30 mb-20'>Follow Us On:</h5>
              <ul className='social-profile v1'>
                <li>
                  <a target='_blank' href='https://facebook.com'>
                    <i className='ri-facebook-fill'></i>
                  </a>
                </li>
                <li>
                  <a target='_blank' href='https://linkedin.com'>
                    <i className='ri-linkedin-fill'></i>
                  </a>
                </li>
                <li>
                  <a target='_blank' href='https://twitter.com'>
                    <i className='ri-twitter-fill'></i>
                  </a>
                </li>
                <li>
                  <a target='_blank' href='https://instagram.com'>
                    <i className='ri-instagram-line'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='comp_map'>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd'></iframe>
          </div>
        </div>
      </div>

      <div className={display ? 'cart-popup open' : 'cart-popup'}>
        <div className='cart-popup-title'>
          <h2>Shopping Cart (4)</h2>
          <button type='button' className='close-popup' onClick={toggleCart}>
            <i className='las la-times'></i>
          </button>
        </div>
        <div className='cart-popup-item-wrap'>
          <div className='cart-popup-item'>
            <div className='cart-popup-item-img'>
              <img src='/images/product/cart-thumb-1.jpg' alt='Image' />
            </div>
            <div className='cart-popup-item-name'>
              <p>Large Suitcase</p>
              <div className='product-quantity'>
                <div className='qtySelector'>
                  <span className='ri-subtract-line decreaseQty'></span>
                  <input
                    type='text'
                    className='qtyValue'
                    value='1'
                    onChange={(e) => e}
                  />
                  <span className='las la-plus increaseQty'></span>
                </div>
              </div>
            </div>
            <div className='cart-popup-item-price'>
              <button type='button'>
                <i className='las la-times'></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>
          <div className='cart-popup-item'>
            <div className='cart-popup-item-img'>
              <img src='/images/product/cart-thumb-2.jpg' alt='Image' />
            </div>
            <div className='cart-popup-item-name'>
              <p>Leather Backpack</p>
              <div className='product-quantity'>
                <div className='qtySelector'>
                  <span className='ri-subtract-line decreaseQty'></span>
                  <input
                    type='text'
                    className='qtyValue'
                    value='1'
                    onChange={(e) => e}
                  />
                  <span className='las la-plus increaseQty'></span>
                </div>
              </div>
            </div>
            <div className='cart-popup-item-price'>
              <button type='button'>
                <i className='las la-times'></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>
          <div className='cart-popup-item'>
            <div className='cart-popup-item-img'>
              <img src='/images/product/cart-thumb-3.jpg' alt='Image' />
            </div>
            <div className='cart-popup-item-name'>
              <p>Orange Suitcase</p>
              <div className='product-quantity'>
                <div className='qtySelector'>
                  <span className='ri-subtract-line decreaseQty'></span>
                  <input
                    type='text'
                    className='qtyValue'
                    value='1'
                    onChange={(e) => e}
                  />
                  <span className='las la-plus increaseQty'></span>
                </div>
              </div>
            </div>
            <div className='cart-popup-item-price'>
              <button type='button'>
                <i className='las la-times'></i>
              </button>
              <span>$148.00</span>
            </div>
          </div>
        </div>

        <div className='cart-popup-total-wrap'>
          <div className='cart-popup-total'>
            <h5>TOTAL</h5>
            <h5>$444.00</h5>
          </div>
          <Link href='/shop-left-sidebar'>
              <a className='btn v4'>Continue Shopping</a>
            </Link>

            <Link href='/checkout'>
              <a className='btn v3'>Check Out</a>
            </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarThree;
