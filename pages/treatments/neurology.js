import React from "react";
import Specialities2 from "../../components/HomeOne/Specialties2";

const data = [
  {
    question: "What is a cerebral arteriovenous malformation?",
    answer: [
      {
        text: "A cerebral arteriovenous malformation refers to a vascular malformation between arteries and veins of the brain forming what is called a “nidus”, in which the pressure is abnormally high causing a risk of bleeding by rupture of the vascular wall estimated between 1 and 5 % per year.",
      },
      {
        text: "These may be more or less large malformations associated with variable venous drainage.",
      },
      {
        text: "Likewise, their location can be deep or shallower in the brain and all of these criteria allow us to classify them and assess the therapeutic risk.",
      },
    ],
  },
  {
    question: "How does a cerebral arteriovenous malformation manifest itself?",
    answer: [
      {
        text: "These malformations are most often discovered when they are symptomatic but can also be accidentally during a brain X-ray examination. The main mode of revelation of this pathology is therefore spontaneous cerebral hematoma. AVMs can also be manifested by the occurrence of partial or generalized seizures in 30% of cases.",
      },
    ],
  },
  {
    question: "How is an arteriovenous malformation treated?",
    answer: [
      {
        text: "Depending on the clinical presentation, AVM will be diagnosed urgently or in consultation and a decision will be proposed for its management.",
      },
      { text: "Two options", classes: "heading-text-accordion" },
      { text: "1 – Radiological monitoring." },
      { text: "2 – Specific treatment." },
      { text: "The latter is based on three modalities which are" },
      { text: "1 – Microsurgery." },
      { text: "2 – Embolization." },
      { text: "3 – Radiosurgery." },
      {
        text: "The therapeutic decision is taken in a multidisciplinary meeting involving neurosurgeons and interventional neuroradiologists. To this end, a weekly multidisciplinary staff is organized to discuss all cases, but in the event of an emergency, specialists immediately consult each other to take charge of the patient. It is not uncommon for a multimodal treatment to be decided combining an endovascular procedure and a surgical procedure, depending on the configuration of the malformation.",
      },
      {
        text: "Radiosurgery is often reserved for post-therapeutic residues and small asymptomatic, epileptogenic or significant AVMs when other therapeutic modalities are considered too risky for the patient.",
      },

      { text: "Number of days of hospitalization : 5 days." },
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
  return <Specialities2 data={data} title="Neurology" bg="bg-neurology" />;
};

export default Faq;
