import React from "react";
import Link from "next/link";
import {
	faEnvelopeOpenText,
	faPenToSquare,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "@components/Layout/Cookie";
import styles from "./Footer.module.scss";
import { useState } from "react";
import Cookies from "js-cookie";

const FooterTwo = () => {
  return (
    <>
      <footer className='footer-wrap style1 pt-20 pb-20'>
        <div className='container'>
          <div className='footer-top'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-12'>
              <a href="/" className={`${styles.footerLogo} mb-4`}>
              <img src="/images/logo.svg" alt="logo Inoqare" style={{maxWidth: '120px'}} />
		          </a>
              <div style={{display: 'inline-block', marginLeft: '20px'}}>
              <ul className='social-profile v1'>
        
                  <li>
                    <a target='_blank' href='https://facebook.com/inoqare'>
                      <i className='ri-facebook-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://linkedin.com'>
                      <i className='ri-linkedin-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://instagram.com/inoqare'>
                      <i className='ri-instagram-line'></i>
                    </a>
                  </li>
                </ul>
                </div>
              </div>
              <div className='col-lg-6 col-md-12'>
                <div className='copyright-text'>
                  <p>
                    Copyright <span className='las la-copyright'></span> 2023 Inoqare.
                    All Rights Reserved By{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
