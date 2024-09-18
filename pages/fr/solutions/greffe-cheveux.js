import React from "react";
import HeroSection from '@components/LandingPage/HeroSection';
import Features from '@components/LandingPage/Features';
import Process from '@components/LandingPage/Process';
import Before from '@components/LandingPage/Before';

export default function HairTransplant() {
  const pageData = {
    hero: {
      title_part1: "#GREFFE DE CHEVEUX",
      title_part2: "NE CHERCHEZ PLUS !",
      text: "Si vous cherchez à obtenir une greffe de cheveux sans vous ruiner, Inoqare est la solution parfaite pour vous. Service 100% gratuit : Inoqare vous aide a trouver le partenaire idéal pour votre traitement partout dans le monde. Obtenez plusieurs devis en quelques clics. Inoqare est une plateforme en ligne gratuite pour vous aider à trouver les meilleurs hôpitaux et cliniques de greffe de cheveux dans le monde, à des prix imbattables et sans frais cachés. Nous savons que la perte de cheveux peut être un sujet sensible, c'est pourquoi nous offrons un service discret et confidentiel. Donc, si vous cherchez une solution abordable et fiable à votre perte de cheveux, ne cherchez pas plus loin qu'Inoqare.",
      title_btn :"Votre analyse en ligne gratuite",
      link_btn :"",
      img_hero:"/images/landingpage/hair/hero/two.jpeg",
    },
    features : {
      title: "Nos services",
      sub_title: "Nous sommes ici pour vous parler d'un problème qui touche beaucoup de gens : la perte de cheveux. Pour beaucoup d'entre nous, nos cheveux font partie intégrante de notre identité. C'est le reflet de notre santé et cela peut être un facteur important dans notre confiance en nous. Malheureusement, tout le monde n'a pas la chance d'avoir des mèches épaisses et brillantes. Pour certains d'entre nous, la perte de cheveux est un problème très réel et très pénible. Lorsque la perte de cheveux est sévère, elle peut signaler le début de complexes et de dépression. Et une fois que cela devient permanent, la seule vraie solution est une greffe de cheveux. Mais qu'est-ce qu'une greffe de cheveux ? Il s'agit d'une intervention chirurgicale au cours de laquelle des follicules pileux sains sont prélevés sur une autre partie du corps et transplantés sur la zone dégarnie. Si vous luttez contre la perte de cheveux, ne désespérez pas, il existe une solution. Contactez un spécialiste de la greffe de cheveux dès aujourd'hui pour discuter de vos options. ",
      cards: [
        {
          image_url: "/images/landingpage/hair/features/first.png",
          title: 'GREFFE FUE SAPPHIRE',
        },
        {
          image_url: "/images/landingpage/hair/features/second.png",
          title: 'GREFFE DHI',
        },
        {
          image_url: "/images/landingpage/hair/features/third.png",
          title: 'GREFFE DES CHEVEUX TYPE AFRO',
        },
        {
          image_url: "/images/landingpage/hair/features/fourth.png",
          title: 'GREFFE DE BARBE',
        },
      ],
      title_btn :"Consultation en ligne",
      link_btn :"",
      description:"",
    },
    process : {
      title: 'Votre voyage en 5 étapes',
      sub_title: 'Accédez aux meilleurs soins médicaux où que vous soyez dans le monde',
      call_to_action_text: {
        primary_text: 'Organisons votre voyage médical dès maintenant !',
        secondary_text:
          'Un expert médical vous appellera et vous offrira une consultation gratuite',
      },
      call_to_action_button: {
        text: 'Cliquez ici pour une consultation gratuite',
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
          title: 'Planification',
          description:
            "",
        },
        {
          image_url: "/images/landingpage/process/third.jpg",
          title: 'Transport',
          description:
            "",
        },
        {
          image_url: "/images/landingpage/process/fourth.jpg",
          title: 'Hébergement',
          description:
            "",
        },        
        {
          image_url: "/images/landingpage/process/fifth.jpg",
          title: 'Suivi médical',
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
			title: "Avant / Après",
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
