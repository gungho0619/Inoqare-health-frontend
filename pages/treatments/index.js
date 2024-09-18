import React from "react";
import PageBanner from "../../components/Treatments/PageBanner";
import TreatmentsDetails from "../../components/Treatments/TreatmentsDetails";
import AllSpecialities from "../../components/Treatments/AllSpecialities";
import ContactSpecialities from "../../components/Contact/ContactSpecialities";
import Specialties from "../../components/HomeOne/Specialties";

export default function Treatments() {
  return (
    <>
      <PageBanner bannerTitle="Treatments" pageName="Treatments" bg="treatments"/>
      <TreatmentsDetails />
      <Specialties />
      <AllSpecialities />

      {/* <div className="row mt-20">
            <div className="col-12 text-center">
              <Link href="/contact-us">
                <a className="btn v2">Talk to Expert</a>
              </Link>
            </div>
          </div> */}
      <ContactSpecialities />
    </>
  );
}
