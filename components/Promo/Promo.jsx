import React from "react";
import styles from './Promo.module.scss';

const Promo = ({data}) => {
	return (
		<section className="promo-wrap pt-50 pb-4">
			<div className="container">
				<div className="row mb-small align-items-end">
					<div className="col-md-12">
						<div className="section-title style1 text-center">
							<span className="fs-24 fw-500 text-primary">{data.title}</span>
							<h2 className="fs-28 fw-700">{data.text}</h2>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-4 ">
					{data.promos.map((item, i) => (
						<div className="col mb-4" key={i}>
							<div className={`service-card hover-img hover-shadow h-100 d-flex flex-column ${styles.promoCard}`}>
								<div className="image flex-img">
									<img
										alt=""
										src={item.image}
										data-original={item.image}
										data-lazy-src={item.image}
									/>
								</div>
								<div className="promo-item style1 text-center mb-0">
									<div className="promo-content">
										<h4>{item.title}</h4>
										<p>{item.text}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Promo;
