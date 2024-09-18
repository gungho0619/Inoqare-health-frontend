import React from "react";

const PromoW = ({data}) => {
	return (
			<div className="container">
				<div className="row align-items-end no-display">
					<div className="col-md-12">
						<div className="section-title style1 text-center">
							<span className="fs-24 fw-500 text-primary">{data.title}</span>
							<h2 className="fs-28 fw-700">{data.text}</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{data.promos.map((item, i) => (
						<div className="col-sm-4 col-4 m-auto" key={i}>
							<div className="col-lg-6 inline">
								<img alt="" src={item.image} data-original={item.image} data-lazy-src={item.image}></img>
							</div>
							<div className="col-lg-6 inline">
                                <h4 className="banner-form">{item.title}</h4>
							</div>

                        </div>
					))}
				</div>
			</div>
	);
};

export default PromoW;
