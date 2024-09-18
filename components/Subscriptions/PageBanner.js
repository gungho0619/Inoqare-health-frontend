import React from "react";
import Link from "next/link";

const PageBanner = ({ bannerTitle, pageName, bg = "subscriptions" }) => {
  return (
    <>
      <section className={`breadcrumb-wrap bg-f br-bg-1 bg-${bg}`}>
        <div className="overlay op-8 bg-minsk"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
              <div className="breadcrumb-title">
                <h2>{bannerTitle}</h2>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link href="/">
                      <a>Home </a>
                    </Link>
                    <i className="las la-angle-double-right"></i>
                  </li>
                  <li>
                    <Link href="/partners">
                      <a>Medical Partners </a>
                    </Link>
                    <i className="las la-angle-double-right"></i>
                  </li>
                  <li><Link href={`/${pageName.toLowerCase()}`}>
                    <a>{pageName}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBanner;