import React from "react";
import Features from '@components/LandingPage/Features';
import Process from '@components/LandingPage/Process';
import Faq from '@components/LandingPage/Faq';
import Before from '@components/LandingPage/Before';
import HomeBanner from "@components/HomeBanner/HomeBanner";

// import styles from './LandingPage.module.css';

export default function LandingPage() {
  const pageData = {
    banner: {
      title: "<span class='text-marine'>100% Free :</span> Inoqare helps you find the best partner for your treatment anywhere in the world.",
      smTitle: "Healthcare Services for <span class='text-marine'>Everyone, Everywhere, Anytime.</span>",
      video: "/videos/inoqare-homepage.mp4"
    },
  
    features : {
      title: "Nos services",
      sub_title: "Inoqare is your single touchpoint to access top-quality overseas medical treatments from anywhere in the world.",
      cards: [
        {
          image_url: "/images/landingpage/hair/features/first.png",
          title: 'HAIR TRANSPLANT',
          link: "/price-plan/hair",
        },
        {
          image_url: "/images/landingpage/dental/features/third.jpg",
          title: 'DENTAL',
          link: "/price-plan/dental",

        },
        {
          image_url: "/images/landingpage/gastric/features/loss-weight.jpeg",
          title: 'GASTRIC - WEIGHT LOSS',
          link: "/price-plan/gastric",

        },
        {
          image_url: "/images/landingpage/features/corrective.jpeg",
          title: 'CORRECTIVE SURGERY',
          link: "/get-quote/",
        },
        {
          image_url: "/images/home/enters.png",
          title: 'OTHERS',
          link: "/get-quote/",
        },
      ],
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
        link: '/get-quote/',
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
  }
  return (
    <>
    	<HomeBanner data={pageData.banner}/>
      <Features 
        data={pageData.features}
      />
      <Process 
        process={pageData.process}
      />
    </>
  );
}
