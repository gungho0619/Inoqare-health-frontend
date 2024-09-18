import React from 'react'
import TwoColumn from './pageComponents/TwoColumn/TwoColumn'
import About from '@components/common/About'
import Service from '@components/common/Service/Service'
import Team from '@components/common/Team'
import PageBanner from '@components/common/PageBanner'
const index = () => {
	const pageData = {
		banner: {
			title: "ABOUT US",
			pageName: "ABOUT US",
			bgImage: "/images/treatments/banner_treatments.png"
		}
	}
  return (
    <React.Fragment>
      	<PageBanner data={pageData.banner} />
        <About featureStyle="style3" shape={true}/>
       	<Team />
 		<TwoColumn />      
        <Service />  

		<section className="recommend-tour-area bg-minsk ptb-50">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-md-12">
						<div className="section-title text-center style2 pt-small">
							<h2>
								When Your Health is Involved, Leave Nothing to Chance !
							</h2>
						</div>
						<div className="position-relative py-4 text-center">
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-down"
								className="svg-inline--fa fa-angles-down Challenges_doubleArrow__fUcKa double-arrow"
								role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
								<path fill="currentColor"
									d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z">
								</path>
							</svg>
						</div>
						<div className="pt-30 pb-30 text-center">
							<a className="btn v3" href="/contact-us">
								Contact us
								<i className="ri-logout-circle-r-line"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
    </React.Fragment>
  )
}

export default index