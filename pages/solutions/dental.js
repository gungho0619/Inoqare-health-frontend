import React from "react";
import HeroSection from '@components/LandingPage/HeroSection';
import Features from '@components/LandingPage/Features';
import Process from '@components/LandingPage/Process';
import Before from '@components/LandingPage/Before';

export default function HairTransplant() {
  const pageData = {
    hero: {
      title_part1: "#SMILE SOLUTIONS",
      title_part2: "DON'T LOOK ANY FURTHER !",
      text: "You want a beautiful smile without losing your money? <br/> Inoqare selects for you the best international hospitals and clinics at unbeatable rates and without fees.",
      title_btn :"Get Your 100% Free Consultation",
      link_btn :"",
      img_hero:"/images/landingpage/dental/hero/two.jpg",
    },
    features : {
      title: "Our services",
      sub_title: "Having a beautiful smile is a sign of success and beauty in our society. Don't we say that our teeth are a reflection of our health? Unfortunately, we are not all equal when it comes to this problem and when dental deterioration occurs, it often signals the beginning of complexes, or even depression... It is never too late, and even if it is total, a solution is always possible.",
      cards: [
        {
          image_url: "/images/landingpage/dental/features/first.webp",
          title: 'Dental Implants',
        },
        {
          image_url: "/images/landingpage/dental/features/second.webp",
          title: 'Dental Crowns-Full Veneers',
        },
        {
          image_url: "/images/landingpage/dental/features/third.jpg",
          title: 'Smile Makeover',
        },
        {
          image_url: "/images/landingpage/dental/features/fourth.webp",
          title: 'Laminate Veneers',
        },
        {
          image_url: "/images/landingpage/dental/features/fifth.webp",
          title: 'Dental Bridges',
        },
      ],
      title_btn :"Get Your 100% Free Consultation",
      link_btn :"",
      description:"",
    },
    process : {
      title: 'Planning Your Medical Trip',
      sub_title: 'Access the Best Quality Medical Care No Matter Where You Are in the World',
      call_to_action_text: {
        primary_text: 'Go ahead and start arranging your medical trip now!',
        secondary_text:
          'A medical expert will call and provide you with a free consultation',
      },
      call_to_action_button: {
        text: 'Click here for a free consultation',
        link: '/price-plan/dental',
      },
      steps: [
        {
          image_url: "/images/landingpage/process/first.jpg",
          title: 'Consultation',
          description:
            "",
        },
        {
          image_url: "/images/landingpage/process/second.jpg",
          title: 'Planning',
          description:
            "",
        },
        {
          image_url: "/images/landingpage/process/third.jpg",
          title: 'Transportation',
          description:
            "",
        },
        {
          image_url: "/images/landingpage/process/fourth.jpg",
          title: 'Accommodation',
          description:
            "",
        },        
        {
          image_url: "/images/landingpage/process/fifth.jpg",
          title: 'Medical Follow-Up',
          description:
            "",
        },

      ],

      },
    faq: {
      title: "Frequently Ask Question",
      sub_title: "What are you looking and find the solution on our FAQ",
    },
    before: {
			title: "Before / After",
			before_after: [
				{
          title: "Test1",
					link: "#",
					image: "/images/landingpage/dental/before-after/1.png",
				},
				{
					link: "#",
					image: "/images/landingpage/dental/before-after/2.png",
				},
				{
					link: "#",
					image: "/images/landingpage/dental/before-after/3.png",
				},
				{
					link: "#",
					image: "/images/landingpage/dental/before-after/4.png",
				},
				{
					link: "#",
					image: "/images/landingpage/dental/before-after/5.png",
				},
			]
		},
  }
  return (
    <>
      <HeroSection
            data={pageData.hero}
            />
      <Features 
      data={pageData.features}
      />
      <Process 
      process={pageData.process}
      />
      <Before 
      data={pageData.before}/>

    </>
  );
}
