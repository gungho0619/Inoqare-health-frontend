import React from 'react';
import PageBanner from '../components/common/PageBanner';
import RecommendTour from "@components/HomeOne/RecommendTour";
import AdventureTour from "@components/HomeOne/AdventureTour";

import Link from 'next/link'

const Destination = () => {
  return (
		<React.Fragment>

      <PageBanner
        bannerTitle='Our Recommended Destinations'
        pageName='Destinations'
      />
      <RecommendTour />
      <AdventureTour
				heading="When Your Health is Involved, Leave Nothing to Chance"
				para="Get in touch with a Inoqare Expert"
			/>

		</React.Fragment>
  );
};

export default Destination;
