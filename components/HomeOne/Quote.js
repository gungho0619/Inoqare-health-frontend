import React from "react";
import Link from "next/link";

const Quote = ({ h2Text, paraText, imgs, headings, texts }) => {
  return (
    <section className="service-wrap pt-20 pb-50" id="works">
      <div className="container">
        <div className="row mb-40 align-items-end">
          <div className="col-md-12">
            <div className="section-title style1 text-center">
              <span className="fs-sm-24">How it Works</span>
              <h2 className="fs-sm-20">{h2Text}</h2>
              {paraText && <p className="fs-sm-14">{paraText}</p>}
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-4 row-cols-md-2">
          {headings.map((head, i) => (
            <div key={i} className="col">
              <div className="service-item style1">
                <div className="service-img">
                  <Link href="#">
                    <a>
                      <img src={imgs[i]} alt="Image" />
                    </a>
                  </Link>
                </div>
                <div className="service-info">
                  <h4 className="fs-sm-20">
                    <Link href="#">
                      <a>{head}</a>
                    </Link>
                  </h4>
                  <p className="fs-sm-14">{texts[i]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-20">
          <div className="col-12 text-center">
            <Link href="/get-quote">
              <a className="btn v2">
                Get a Quote <i className="ri-logout-circle-r-line"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
