import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
	loop: true,
	margin: 0,
	nav: true,
	mouseDrag: false,
	autoplayHoverPause: false,
	items: 1,
	dots: false,
	autoplay: false,
	navText: ["prev", "next"],
};

const SingleTour = () => {
	const [display, setDisplay] = useState(false);
	const [isMounted, setisMounted] = useState(false);

	useEffect(() => {
		setisMounted(true);
		setDisplay(true);
		setisMounted(false);
	}, []);

	return (
		<div className="page-wrapper mt-100">
			<div className="adventure-tour-wrap">
				<div className="container">
					<div className="section-title style1 text-center">
						<span className="fs-sm-24 mb-3 mb-sm-0">This is where Inoqare enters the picture.</span>
						<h2 className="mb-3 mb-sm-0">Inoqare</h2>
						<h4 className="fs-sm-14">
							Reliable | Affordable | Patient-centric | Global
						</h4>
					</div>
				</div>
			</div>
			<div className="single-tour pt-20">
				<div className="container-fluid px-0">
            <div className="single-tour-item bg-f tour-bg-1">
              <div className="single-tour-info style1">
                <div className="box">
                  <div className="tour-shape-two sm-none">
                    <img
                      src="/images/tour/shape-2.png"
                      alt="Image"
                    />
                  </div>
                  <div className="tour-details">
                    <Link href="/tour-details">
                      <a>
                        <h4 className="fs-sm-16">Offer Better Services without Breaking a Sweat</h4>
                      </a>
                    </Link>
                    <div className="row">
                      <div className="col-lg-6 span-item-detail">
                        <span>{">"}  Discover Affordable Options</span>
                        <p className="ml-25 fs-sm-14 ">
                          Discover and
                          recommend the most
                          cost-effective
                          treatment options in
                          foreign countries
                        </p>
                        <span>
                          {">"} Ensure
                          Healthcare Quality{" "}
                        </span>
                        <p className="ml-25 fs-sm-14">
                          As your
                          international
                          partners, we care
                          for your client’s
                          wellbeing and
                          successful treatment
                          at every step
                        </p>
                        <span>
                          {">"} Find Answers
                          to Your Questions
                        </span>
                        <p className="ml-25 fs-sm-14">
                          Clear your doubts
                          about international
                          healthcare, travel,
                          and insurance
                          regulations
                        </p>
                      </div>
                      <div className="col-lg-6 span-item-detail">
                        <span>
                          {">"} Work with
                          International
                          Providers
                        </span>
                        <p className="ml-25 fs-sm-14">
                          Inoqare connects you
                          with world-class
                          health institutions
                          and medical
                          professionals
                        </p>
                        <span>
                          {">"} Multiple
                          Treatment Options
                        </span>{" "}
                        <p className="ml-25 fs-sm-14">
                          Recommend all types
                          of medical
                          procedures and
                          treatments available
                          on our platform
                        </p>
                        <span>
                          {">"} Multiple
                          Destination Options
                        </span>{" "}
                        <p className="ml-25 fs-sm-14">
                          Offer treatments in
                          multiple countries
                          without spending
                          hours searching for
                          information
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
				</div>
			</div>
		</div>
	);
};

export default SingleTour;
