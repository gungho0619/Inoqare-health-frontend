import React from "react";
import Specialities2 from "../../components/HomeOne/Specialties2";

const data = [
  {
    question: "Pediatric Liver Transplant (LIVER)",
    answer: [
      {
        text: "Definition",
        classes: "heading-text-accordion",
      },
      {
        text: "Liver transplantation, or liver transplant, is a surgical procedure that involves replacing a diseased liver with a healthy liver, taken from a donor.",
      },
      {
        text: "Indications",
        classes: "heading-text-accordion",
      },
      {
        text: "– Chronic cholestatic diseases (including atresia of the bile ducts).",
      },
      { text: "– Fulminant hepatitis." },
      { text: "– Metabolic diseases." },
      {
        text: "Process",
        classes: "heading-text-accordion",
      },
      {
        text: "All treatment options are discussed within the framework of a multidisciplinary staff involving all the specialists concerned before starting a registration on the national waiting list.",
      },
      {
        text: "The team will study the indications mentioned above and may consider 2 cases",
        classes: "heading-text-accordion",
      },
      { text: "1 – Donation of part of the liver by the mother or father." },
      {
        text: "2 – Donation from a child organ donor in a state of brain death (brain death).",
      },
      {
        text: "3 – Donation from an adult organ donor in a state of brain death (brain death).",
      },
      {
        text: "Once a compatible donor is found and accepted by the surgical team, the liver sample is taken before being transplanted in the hours following the collection between 6 a.m. and 8 a.m. afterwards, unless the donor is a relative, this period is much shorter.",
      },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation.",
      },
      {
        text: "Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
];

const Faq = () => {
  return <Specialities2 data={data} title="Pediatrics" bg="bg-pediatrics" />;
};

export default Faq;
