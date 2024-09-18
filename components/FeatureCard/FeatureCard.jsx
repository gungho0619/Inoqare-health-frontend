import React from "react";
import Link from 'next/link';

const FeatureCard = ({data, type}) => {
	return (
		<div className={`row mb-30 ${type === 'textNoBorder' ? '' : 'align-items-center'}`}>
			<div className="col-lg-6 mb-2">
				<div className="testimonial-item new-design">
					<div className="testimonial-bg">
						<img src={data.image} />
					</div>
				</div>
			</div>
			<div className="col-lg-6 mb-2">
				<div className={`${type === 'textNoBorder' ? 'h-100 d-flex flex-column justify-content-between' : 'services-border'} px-3`}>
					<div className="d-flex align-items-center">
						<span className="heading-services">{data.title} </span>
					</div>
					{data.data.map((list, i) => (
						<div className="d-flex align-items-center" key={i}>
							<i className="ri-arrow-right-s-line challenges-arrow"></i>
							{list.url 
								? <Link href={list.url}>
									<a><span className="heading-services p">{list.title}</span></a>
								</Link>
								: <span className="heading-services p">{list.title}</span>
							}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
