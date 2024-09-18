import React from "react";
import HeroSection from '@components/LandingPage/HeroSection';
import Features from '@components/LandingPage/Features';
import Process from '@components/LandingPage/Process';
import Before from '@components/LandingPage/Before';

export default function HairTransplant() {
  const pageData = {
    hero: {
      title_part1: "#LOSS WEIGHT SOLUTIONS",
      title_part2: "DON'T LOOK ANY FURTHER !",
      text: "Are you struggling with obesity and constantly feeling out of shape?<br/>You are one step closer to shedding that weight and getting the body you deserve!<br/>Inoqare provides you with a complete service! From surgical to non-surgical treatments for weight loss and obesity problems. <br/> We select for you the best international hospitals and clinics at unbeatable rates and without fees.",
      title_btn :"Get Your 100% Free Consultation",
      link_btn :"",
      img_hero:"/images/landingpage/gastric/hero/one.jpg",
    },
    features : {
      title: "Our services",
      sub_title: "Having a slim and fit body is a sign of success and beauty in our society. Isn't it said that our body is the reflection of our health? Unfortunately, we are not all equal in front of this problem and when weight gain occurs, it often signals the beginning of complexes, even depression... And when it reaches important health problems (diabetes, hypertension, cholesterole, bad knees and back...) it is necessary to take care of yourself quickly, don't worry a solution is always possible.",
      cards: [
        {
          image_url: "/images/landingpage/gastric/features/1.jpg",
          title: 'Gastric Balloon',
        },
        {
          image_url: "/images/landingpage/gastric/features/2.jpg",
          title: 'Gastric Sleeve',
        },
        {
          image_url: "/images/landingpage/gastric/features/3.jpg",
          title: 'Gastric Bypass',
        },
        {
          image_url: "/images/landingpage/gastric/features/4.jpg",
          title: 'Non-Surgical Procedures',
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
        link: '#',
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
          title: "",
					link: "#",
					image: "/images/landingpage/gastric/before-after/1.jpg",
				},
				{
          title: "",
					link: "#",
					image: "/images/landingpage/gastric/before-after/2.jpg",
				},
				{
          title: "",
					link: "#",
					image: "/images/landingpage/gastric/before-after/3.png",
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
