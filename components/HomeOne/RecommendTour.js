import React from "react";
import Link from "next/link";

const RecommendtourData = [
	{
		name: "France",
		href: "/destination/france",
		priceopht: "850 to 3000€",
		pricerec: "1200 to 12000€",
		pricecard: "4000 to 25000€",
		pricederma: "250 to 3300€",
	},
	{
		name: "United States",
		href: "/destination/usa",
		priceopht: "3000 to 7000$",
		pricerec: "600 to 12000 $",
		pricecard: "72500 to 180000$",
		pricederma: "400 to 5000 $",
	},
	{
		name: "E.A.U Dubaï",
		href: "/destination/dubai",
		priceopht: "2500 to 6000€",
		pricerec: "3500 to 8000€",
		pricecard: "8500 to 25000€",
		pricederma: "500 to 2000€",
	},
	{
		name: "Canada",
		href: "/destination/canada",
		priceopht: "490 to 2500 $",
		pricerec: "4500 to 8000$",
		pricecard: "3000 to 30000$",
		pricederma: "200 to 3000$",
	},
	{
		name: "Turkey",
		href: "/destination/turkey",
		priceopht: "900 to 4000€",
		pricerec: "150 to 3000€",
		pricecard: "800 to 27000€",
		pricederma: "300 to 950 €",
		allinclude: "yes",
	},
	{
		name: "Mexico",
		href: "/destination/mexico",
		priceopht: "770 a 1200€",
		pricerec: "1300 a 2500€",
		pricecard: "3600 a 35000€",
		pricederma: "60 a 500 €",
	},
	{
		name: "India",
		href: "/destination/india",
		priceopht: "1000 to 3000€",
		pricerec: "800 to 6000€",
		pricecard: "4500 to 17000€",
		pricederma: "100 to 1100€",
		allinclude: "yes",
	},
	{
		name: "United Kingdom",
		href: "/destination/uk",
		priceopht: "2200 to 7100£	",
		pricerec: "1900 to 10000£",
		pricecard: "3500 a 25000£",
		pricederma: "200 to 1000£",
	},
	{
		name: "Tunisia",
		href: "/destination/tunisia",
		priceopht: "700 to 4000€",
		pricerec: "1650 to 2700€",
		pricecard: "3700 to 15000€",
		pricederma: "100 to 800 €",
	},
	{
		name: "Italy",
		href: "/destination/italy",
		priceopht: "Contact us",
		pricerec: "Contact us",
		pricecard: "Contact us",
		pricederma: "Contact us",
	},
	{
		name: "Germany",
		href: "/destination/germany",
		priceopht: "3000 to 9000€",
		pricerec: "800 to 7000€",
		pricecard: "4500 to 50000€",
		pricederma: "350 to 1500€",
	},
];
export default function RecommendTour() {
	return (
		<section className="recommend-tour-area bg-minsk ptb-50">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title text-center style2">
							<h2>
								Quick Access to Treatment Options around the
								Planet
							</h2>
						</div>
					</div>
				</div>
				<div className="rec-wrap ptb-50">
					{RecommendtourData.map((s, i) => (
						<div className="recommend-tour-item style2" key={i}>
							<div
								className={`recommend-tour-bg bg-f rec-bg-${
									i + 1
								}`}
							>
								<h4>{s.name}</h4>
							</div>
							<div className="recommend-tour-info">
								<h4>
									<Link href={s.href}>
										<a>{s.name}</a>
									</Link>
								</h4>
								<table className="color-w">
									<tbody>
										<tr>
											<td>
												<span className="heading-recommend-tour">
													Service
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													Price
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="heading-recommend-tour p">
													Ophthalmologic surgery
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													{s.priceopht}
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="heading-recommend-tour p">
													Reconstructive surgery
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													{s.pricerec}
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="heading-recommend-tour p">
													Cardiac surgery
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													{s.pricecard}
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="heading-recommend-tour p">
													Hair Transplant
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													{s.pricederma}
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<span className="heading-recommend-tour p">
													Other treatments
												</span>
											</td>
											<td>
												<span className="heading-recommend-tour">
													<Link href="/get-quote">
														<a>Contact us </a>
													</Link>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								{s.allinclude === "yes" ? (
									<span>
										Price includes accommodation and medical
										care
									</span>
								) : (
									<p></p>
								)}

								<Link href="/get-quote">
									<a className="link">
										Contact us now{" "}
										<i className="ri-logout-circle-r-line"></i>
									</a>
								</Link>
							</div>
						</div>
					))}

					<div className="recommend-tour-item style2">
						<div className="recommend-tour-bg bg-f rec-bg-12">
							<h4>All countries</h4>
						</div>
						<div className="recommend-tour-info">
							<h4>
								<Link href="/get-quote">
									<a>All countries</a>
								</Link>
							</h4>
							<Link href="/get-quote">
								<a className="link">
									Contact us now{" "}
									<i className="ri-logout-circle-r-line"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
