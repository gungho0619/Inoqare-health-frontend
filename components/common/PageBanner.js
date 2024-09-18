import React from "react";
import Link from "next/link";

const Wrapper = ({children, bgImage, bg, type}) => {
	return (
		<React.Fragment>
			{bgImage ?
				<section className={`breadcrumb-wrap ${type === 'style2' ? 'style2 bg-heath' : 'bg-f'}`}  style={{backgroundImage: `url(${bgImage})`}} >
					{children}
				</section>
				:
				<section className={`breadcrumb-wrap ${bg} ${type === 'style2' ? 'style2 bg-heath' : 'bg-f'}`} >
					{children}
				</section>
			}
		</React.Fragment>
	)
} 

const PageBanner = ({ data, type, bannerTitle, pageName, bg }) => {
	return (
		<React.Fragment>
			<Wrapper bgImage={data?.bgImage} bg={bg} type={type}>
				{type !== 'style2' && <div className="overlay op-8 bg-minsk"></div>}
				<div className="container">
					<div className="row">
						<div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 ">
							<div className="breadcrumb-title">
								<h2 className="fs-50 fw-600">{data?.title ? data.title : bannerTitle}</h2>
								<ul className="breadcrumb-menu">
									<li>
										<Link href="/">
											<a>Home </a>
										</Link>
										<i className="las la-angle-double-right"></i>
									</li>
									<li>{data?.pageName ? data.pageName : pageName}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</React.Fragment>
	);
};

export default PageBanner;
