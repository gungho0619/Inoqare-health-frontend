import React from "react";
import Link from "next/link";

const specialitiesData = [
  "Cancer",
  "Cardiology",
  "Orthopaedics",
  "Ophthalmology",
  "Urology",
  "Gynaecology",
];

export default function Treatments() {
  return (
    <>
      <section className="service-wrap pt-20 pb-50">
        <div className="container">
          <div className="row mb-40 align-items-end">
            <div className="col-md-12">
              <div className="section-title style1 text-center">
                <h2>All Specialities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {specialitiesData.map((s) => (
              <div className="col-6 col-md-3 col-lg-2">
                <div className="service-item style1">
                  <div className="service-img">
                    <Link href="#">
                      <a>
                        <img
                          src={`/images/specialities/${s.toLowerCase()}.png`}
                          alt="Image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="service-info">
                    <Link href="#">
                      <a>{s}</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row mt-20">
            <div className="col-12 text-center">
              <Link href="/contact-us">
                <a className="btn v2">Talk to Expert</a>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
