import React from "react";
import Specialities2 from "../../components/HomeOne/Specialties2";

const data = [
  {
    question: "Benign Prostatic Hyperplasia",
    answer: [
      {
        text: "Benign prostatic hyperplasia (BPH) is a common pathology favored by aging and linked to the development of a prostatic adenoma responsible for a chronic obstacle to bladder emptying.",
      },
      {
        text: "The evolution of BPH can have an impact on",
        classes: "heading-text-accordion",
      },
      {
        text: "– The lower urinary tract (fighting bladder).",
      },
      {
        text: "– The upper urinary tract (chronic obstructive renal failure).",
      },
      {
        text: "The clinical diagnosis is based on the examination and the search for urinary symptoms of the lower apparatus (SBAU) which are urinary functional signs",
        classes: "heading-text-accordion",
      },
      { text: "– Delay in starting." },
      { text: "– Dysuria, weak stream, late drops." },
      { text: "– Pollakiuria, urgency, urgency, urination burns." },
      {
        text: "– Acute complications are acute retention of urine, urogenital infections, hematuria and acute obstructive renal failure.",
      },
      {
        text: "– Chronic complications are chronic bladder retention, bladder lithiasis and chronic obstructive renal failure.",
      },
      {
        text: "Surgical treatment includes three interventions",
        classes: "heading-text-accordion",
      },
      { text: "1 – The cervico-prostatic incision (PCI)." },
      { text: "2 – Transurethral resection of the prostate (TURP)." },
      { text: "3 – The high way adenomectomy (AVH)." },
      {
        text: "After TURP or AVH, prostatic adenoma should be referred for pathology for prostate cancer. The main side effect is retrograde ejaculation.",
      },
    ],
  },
  {
    question: "Surgical Treatments",
    answer: [
      {
        text: "Endoscopic resection is for smaller enlarged prostate",
        classes: "heading-text-accordion",
      },
      {
        text: `– It consists of cutting the diseased tissue under visual control using a rigid endoscope introduced through the urethra. Continuous washing pushes the chips back to the bladder and they are recovered for analysis by a pressure-vacuum system at the end of the operation.`,
      },
      {
        text: `A bipolar current resector may be used in subjects taking anticoagulants provided that approximately 1 cm of tissue is preserved above an anatomical landmark called veru montanum, the preservation of antegrade ejaculation is possible.`,
      },
      { text: "Number of days of hospitalization: 1-5 days." },
      { text: "Suprapubic adenomectomy", classes: "heading-text-accordion" },
      {
        text: "– Enucleation of the prostate finds a cleavage plane between the adenoma and the prostate shell. It is performed by the trans-vesical or trans-prostatic route at the cost of a short incision in the lower abdomen. It does not cause erectile dysfunction because the erectile nerves are not directly exposed, but retrograde ejaculation is constant. It is therefore necessary to prevent the future operated on who will no longer see an ejaculate, but should not experience any alteration in orgasm, this being linked to a rhythmic activity of the perineal floor and not to the passage of sperm.",
      },
      { text: "Number of days of hospitalization : 5-7 days." },
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
  {
    question: "Cervico-Prostatic Incision",
    answer: [
      {
        text: "The cervico-prostatic incision consists of slitting the smooth sphincter and the posterior aspect of the prostate until veru montanum. Indicated for small prostates, it generally has rapid consequences and rarely results in retrograde ejaculation.",
      },
      {
        text: "The laser has made a sensational entry into prostate surgery (vaporization, resection, enucleation are possible), but the implementation of the technique and in particular the cost of the optical fiber should be compared with the low benefits compared to more conventional techniques.",
      },
      {
        text: "Other techniques and physical means (cryotherapy, localized hyperthermia, radiofrequencies) remain more anecdotal.",
      },
      {
        text: "On the other hand, the injection of botulinum toxin into the prostate parenchyma shows promise.",
      },
      { text: "Number of days of hospitalization : 4-7 days." },
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
  {
    question: "Replacing the Aortic Valve",
    answer: [
      {
        text: "Adhesions are responsible for a specific morbidity which combines chronic pain, bridle occlusions, infertility, and excess morbidity in the event of further surgery. Pelvic pain in operated patients may be related to postoperative adhesions.",
      },
      {
        text: "Ultrasonography and dynamic MRI identify parietointestinal adhesions, but do not specify whether they are involved in the painful picture.",
      },
      {
        text: "The prevention of adhesions includes observing the specific surgical rules for laparoscopic and laparotomy, and the use of anti-adhesion products.",
      },
      {
        text: "These products decrease the rates, extent and overall score of adhesions. Their effectiveness has been proven by studies with a good level of evidence. Patients with abdomino-pelvic pain likely to be due to adhesions may benefit from laparoscopic adhesiolysis which improves pain symptoms in more than half of cases, but also exposes a variable rate of complications, such as wounds. digestive.",
      },
      {
        text: "The only way to treat adhesions is to remove or separate them surgically. This surgery is called adhesiolysis. It is used in particular when the pain is significant and in cases of infertility or intestinal obstruction.",
      },
      {
        text: "Postoperative adhesions are an abnormal healing phenomenon that occurs after a surgical intervention and which will connect several tissues or two organs that were normally free. These adhesions are extremely common and can affect anyone.",
      },
      { text: "Duration of the intervention : 1h-2h." },
      { text: "Average length of hospitalization : 2-4 days." },
      { text: "Intervention little painful, under general anesthesia." },
    ],
  },
];

const Faq = () => {
  return <Specialities2 data={data} title="Urology" bg="bg-urology" />;
};

export default Faq;
