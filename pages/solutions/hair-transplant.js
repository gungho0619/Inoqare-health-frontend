import React from "react";
import HeroSection from '@components/LandingPage/HeroSection';
import Features from '@components/LandingPage/Features';
import Process from '@components/LandingPage/Process';
import Before from '@components/LandingPage/Before';

export default function HairTransplant() {
  const pageData = {
    hero: {
      title_part1: "#HAIR TRANSPLANT",
      title_part2: "DON'T LOOK ANY FURTHER !",
      text: "You want to gain hair without losing your money? <br/> Inoqare selects for you the best international hospitals and clinics at unbeatable rates and without fees.",
      title_btn :"Get Your 100% Free Consultation",
      link_btn :"",
      img_hero:"/images/landingpage/hair/hero/two.jpeg",
    },
    features : {
      title: "Our services",
      sub_title: "Having beautiful hair is a sign of success and beauty in our society. Isn't it said that our hair is a reflection of our health? Unfortunately, we are not all equal when it comes to this problem and when massive hair loss (or beard hair loss) occurs, it often signals the beginning of complexes or even depression... And when it has become permanent, the only solution is a hair transplant.",
      cards: [
        {
          image_url: "/images/landingpage/hair/features/first.png",
          title: 'FUE Hair Transplant SAPPHIRE',
        },
        {
          image_url: "/images/landingpage/hair/features/second.png",
          title: 'DHI Hair Transplant',
        },
        {
          image_url: "/images/landingpage/hair/features/third.png",
          title: 'AFRO AND KINKY HAIR TRANSPLANT',
        },
        {
          image_url: "/images/landingpage/hair/features/fourth.png",
          title: 'BEARD TRANSPLANT',
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
					image: "/images/landingpage/hair/before-after/1.jpg",
				},
				{
          title: "",
					link: "#",
					image: "/images/landingpage/hair/before-after/2.jpg",
				},
				{
          title: "",
					link: "#",
					image: "/images/landingpage/hair/before-after/3.jpg",
				},
				{
          title: "",
					link: "#",
					image: "/images/landingpage/hair/before-after/4.jpg",
				},
				{
					link: "#",
					image: "/images/landingpage/hair/before-after/5.jpg",
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
