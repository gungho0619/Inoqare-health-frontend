import React from "react";

const TwoColumn = () => {
	return (
		<section className="py-5">
			<div className="container">
                <h2 className="fs-24 text-primary fw-300 mb-1">
                    Offer Better Services without Breaking a Sweat
                </h2>
                <h1 className="fs-28 text-dark fw-600">
                    Inoqare ’s user-friendly platform enables insurance brokers to provide better and more comprehensive services to the insured!
                </h1>
                <hr className="w-25" />
				<div className={`row flex-column-reverse flex-md-row`}>
					<div className={`col-sm-6 mb-4`}>
                        <p>
                            <strong className="text-primary">Discover Affordable Options : </strong>
                            Discover and recommend the most cost-effective treatment options in foreign countries
                        </p>
                        <p>
                            <strong className="text-primary">Ensure Healthcare Quality : </strong>
                            As your international partners, we care for your client’s wellbeing and successful treatment at every step
                        </p>
                        <p>
                            <strong className="text-primary">Find Answers to Your Questions : </strong>
                            Clear your doubts about international healthcare, travel, and insurance regulations
                        </p>
                        <p>
                            <strong className="text-primary">Work with International Providers : </strong>
                            Inoqare connects you with world-class health institutions and medical professionals
                        </p>
                        <p>
                            <strong className="text-primary">Multiple Treatment Options : </strong>
                            Recommend all types of medical procedures and treatments available on our platform
                        </p>
                        <p>
                            <strong className="text-primary">Multiple Destination Options : </strong> 
                            Offer treatments in multiple countries without spending hours searching for information
                        </p>
					</div>
					<div className={`col-sm-6 mb-4`}>
						<div className="image h-100 flex-img">
							<img src="/images/home/enters.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TwoColumn;
