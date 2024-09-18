import React from "react";
import Specialities2 from "../../components/HomeOne/Specialties2";

const data = [
  {
    question: "Hip Prosthesis",
    answer: [
      {
        text: "There are many models of prostheses, different in their form, their materials, some are implanted without “cement” (term used which actually designates an acrylic resin). The models used in the service are derived from models implanted for more than 30 years, giving excellent results which are maintained for many years. It is therefore for us a guarantee of safety and reliability, and are subject to continuous monitoring, at each inspection consultation.",
      },
      {
        text: "In general, in people under 80 years of age, an unsealed acetabulum with an alumina ceramic joint surface will be used, provided the anatomy of the bony pelvis allows it to be securely attached. The ceramics are individually tested before implantation, and have been improved throughout the last decades, making them a perfectly reliable material, in particular with regard to the risks of fracture which have especially been reported for other types of ceramics (zirconia, that we do not use).",
      },
      {
        text: "The undeniable theoretical advantage of this type of implant is its almost indestructible nature. When we know that the majority of polyethylene prosthesis changes are made after 10 or 15 years due to their wear, we see the benefit of using an implant that is very resistant to wear. More rarely, it will be a prosthesis whose acetabulum is polyethylene, sealed",
      },
      {
        text: "Regardless of the type of acetabulum used, the femoral part will either be sealed with an acrylic resin, or implanted without cement if the bone quality allows it, especially in younger patients.",
      },
    ],
  },
  {
    question: "What types of prosthesis?",
    answer: [
      {
        text: "It is made up of two nested pieces",
        classes: "heading-text-accordion",
      },
      {
        text: `1 – One of the parts replaces the articular part of the pelvis (acetabulum).`,
      },
      {
        text: `2 – The other replaces the head of the femur, and includes a rod that is implanted in the femur, and a stainless steel or ceramic head that articulates with the acetabulum.`,
      },
    ],
  },
  {
    question: "Scar",
    answer: [
      {
        text: "There are several ways to approach the hip to implant a prosthesis. The first used in the service is at the top of the thigh, on the front, about 10 to 12 centimeters. The surgeon thus passes between the muscles, without cutting them, nor cutting any bone, except the neck and the head of the femur which are replaced by the prosthesis. This approach is therefore non-invasive, it allows faster functional recovery and presents the least risk of dislocation.",
      },
    ],
  },
  {
    question: "When to operate?",
    answer: [
      {
        para: (
          <p>
            Whatever the reason for your hip pain, there is never an urgent
            procedure. It is indeed a heavy intervention and not without
            complications which must therefore be prevented by taking
            appropriate precautions and examinations (even if the progress of
            anesthesia and the great habit of this operation make it almost an
            intervention. routine, the operation lasting on average 45 minutes).
          </p>
        ),
      },
    ],
  },
  {
    question: "What benefits should you get from an intervention ?",
    answer: [
      {
        text: "Whatever the cause of the alteration of the hip joint (wear of the cartilage or osteoarthritis, rheumatic disease, necrosis, post-traumatic sequelae or a childhood disease), impotence is due to pain of increasing intensity, of various locations (on the front of the joint or on the contrary external or buttocks, in the thigh or in the knee), and stiffness which can become disabling in everyday life, for care of foot, to sit, to go up the stairs and to sound in the long run on the knees and the spine.",
      },
      {
        text: "A total hip prosthesis, by replacing the damaged part of the joint, restores flexibility, eliminates pain due to the deterioration of the hip, and can improve the function of the knees and back. Most people who have been operated on, after a few months, even “forget” that they are wearing a prosthesis, lead a normal life and can even resume sports activities. A minority however will be able to feel its presence from time to time, without it constituting a significant discomfort. Exceptionally, a flawless prosthesis may remain painful or stiff, without a specific cause.",
      },
      {
        text: `The first rising is done on the 1st postoperative day, walking is resumed in full support.`,
      },
      {
        text: "The duration of hospitalization is 3-5 days, after which a return will be made most often to home, or to a convalescent home for people living alone.",
      },
    ],
  },
  {
    question: "Prosthesis follow-up",
    answer: [
      {
        text: "In the vast majority of cases, a total hip prosthesis will allow you to lead a normal life, to the exclusion of some violent sports activities that we do not recommend, but it remains an inert material, a mechanical part that can wear out during time.",
      },
      {
        text: "– It can also unseal.",
      },
      {
        text: `– She remains very susceptible to infections.`,
      },
      {
        text: "– It can leave some residual pain without finding any particular anomaly.",
      },
      {
        text: "– It should therefore be reviewed regularly by your surgeon to make sure that everything is fine.",
      },
      {
        text: "In the postoperative period, a follow-up consultation will be given to you at 3 months and 1 year.",
      },
      {
        text: "Usually, beyond the first year, one consultation every two to five years is sufficient. In the event of a problem, it is important to return quickly to consult.",
      },
    ],
  },
  {
    question: "Minimally Invasive Hip Surgery (MIS)",
    answer: [
      {
        text: "So as not to confuse minimally invasive surgery (Mini Invasive Surgery) and mini scarring (Mini Incision Surgery).",
      },
      {
        text: "In recent years, many surgeons have taken an interest in so-called “minimally invasive” surgery for total hip prostheses.",
      },
      {
        text: "This name in fact brings together two possibilities that can be combined, but not necessarily, hence a certain ambiguity which is moreover readily maintained",
        classes: "heading-text-accordion",
      },
      {
        text: "– The mini skin incision (mini open or Mini Incision Surgery or M.I.S.) which only covers the scar, which is the only thing you will see.",
      },
      {
        text: "– The minimally invasive surgery (Mini Invasive Surgery or M.I.S.) which proposes to make a less “dilapidated” in-depth approach.",
      },
      {
        text: "This technique proposes to respect more bone or muscle capital and would reduce perioperative bleeding, postoperative complications and allow faster functional recovery.",
      },
    ],
  },
  {
    question: "What are the differences?",
    answer: [
      {
        text: "There is therefore a difference between the mini skin incision that the operation will see and the route first used in depth, invisible.",
      },
      {
        text: "True minimally invasive surgery is one which respects the deep anatomical elements (muscles, tendons, bones) and which provides sufficient visibility to correctly and safely place the prosthesis, without for all that mistreating the skin, where the almost all infections.",
      },
      {
        text: "Multiple paths to reach the joint",
        classes: "heading-text-accordion",
      },
      {
        text: "– The hip is a deep joint surrounded by thick muscles.",
      },
      {
        text: "– The placement of the prosthesis therefore requires “crossing” them.",
      },
      {
        text: "– Multiple paths (first routes) exist.",
      },
      {
        text: "– They are used most often depending on habits, and sometimes depending on the anatomical features of the hip of certain patients.",
      },
      {
        text: "To sum them up",
        classes: "heading-text-accordion",
      },
      {
        text: "– The anterior approach, and in particular the modified Hueter approach as we practice it, does not cut any muscle and strictly respects the periarticular anatomy. It is a difficult technique with a fairly long learning curve. In our experience, it does not allow operation of certain hips (stiff, already operated, poorly formed, dislocated, etc.). Its detractors oppose it, which is true, a reduced visibility on the femur.",
      },
      {
        text: "– The posterior pathways cut all or part of the posterior muscles (pelvic-trochanteric). It is currently the most widely used route in the world. It is simple, easy to learn, giving a wide light on the joint. Its disadvantages are dislocation and poor, if not lack, healing of the cut muscles. The reduction in scar length is of no interest other than aesthetics, since the deep muscles still have to be cut, and visibility becomes poor, making it riskier to fit the prosthesis in our opinion.",
      },
      {
        text: "The external channels section",
        classes: "heading-text-accordion",
      },
      {
        text: "– Or, the trochanter (trochanterotomies in various ways) to spare the musculature but require a time of bone consolidation which in a small percentage will not take place and may require reoperation, and do not allow immediate resumption of full support.",
      },
      {
        text: "– Or, the gluteus minimus and vastus lateralis muscles (Hardinge approach or related), the healing of which remains difficult, if not random.",
      },
      {
        text: "It is clear that whatever the length of the skin scar, what determines the invasiveness of the first approach is what happens in depth and that to consider that the surgery is minimally invasive because the incision is less than 7 cm is a decoy.",
      },
      {
        text: "As such, we consider that only the pure anterior routes that we practice really deserve the name of minimally invasive, and even non-invasive.",
      },
      {
        text: "The length of the skin incision usually varies from 6 to 12 cm in our practice, sometimes a little more depending on the foreseeable difficulties and the body mass. It is easy to reduce it to around 6 or 7 cm, which we do regularly, but an internal survey over a year of operated patients showed us that the length of the incision was the parameter that worried them the least, if at all, in this type of surgery.",
      },
    ],
  },
  {
    question: "Shoulder Dislocation",
    answer: [
      {
        para: (
          <p>
            <strong>What is it about ?</strong>
          </p>
        ),
      },
      {
        text: "The shoulder is a complex joint. It is made up of the humerus which articulates with the glenoid of the scapula. It is a lightly strained joint with great mobility.",
      },
      {
        text: "Its stability depends on the integrity",
        classes: "heading-text-accordion",
      },
      {
        text: "– Bone surfaces (glenoid and humerus).",
      },
      {
        text: "– Capsuloligamentous elements (capsule and labrum).",
      },
      {
        text: "A shoulder is unstable when the head of the humerus loses contact with the glenoid, the part of the scapula with which it articulates. This loss of contact between the articular surfaces corresponds to dislocation or “dislocation”. The humeral head moves more often in front of the glenoid (anterior instability) than behind (posterior instability). The first episode is often traumatic and is a turning point for the shoulder. The risk of recurrence after a first episode is around 50%, especially when the patient is young. The more the number of recurrence increases, the more the structures stabilizing the shoulder will be damaged, and the more the risk of recurrence will increase until it occurs for minor movements.",
      },
      {
        text: "The factors favoring recurrence are",
      },
      {
        text: "– Hyperlaxity.",
      },
      {
        text: "– The existence of a fracture of the glenoid or a notch of the humeral head.",
      },
      {
        text: "The lesion assessment includes a standard radiographic assessment and an MRI or arthro-CT scan depending on the surgeon’s judgment. It is performed as a preoperative assessment in order to better appreciate the importance of bone or capsuloligamentous lesions. A dislocation episode after 40 years requires checking the integrity of the shoulder tendons, which can be ruptured with the trauma.",
      },
    ],
  },
  {
    question: "Do you still have to operate?",
    answer: [
      {
        text: "In the absence of bone lesions, reduction of the dislocation is done in the emergency room, followed by X-ray control. If this is the first episode of dislocation, elbow-to-body immobilization is put in place for 1 month and then rehabilitation is started to restore mobility to the shoulder.",
      },
      {
        text: "– Rehabilitation alone does not decrease the rate of recurrence.",
      },
      {
        text: "– Surgical treatment significantly reduces the risk of recurrence.",
      },
      {
        text: "– The decision is made on a case-by-case basis depending on the anatomical lesions, the frequency of instability, sports and professional activities.",
      },
    ],
  },
  {
    question: "How is the intervention carried out?",
    answer: [
      {
        text: "There are two methods today to stabilize a shoulder that lifts forward",
        classes: "heading-text-accordion",
      },
      {
        text: "1 – The bone abutment, which we carry out in a conventional way “open” with a scar of 5 cm in the delto pectoral groove. It consists of taking a fragment of bone from the scapula called the coracoid onto which the coraco biceps is inserted and fixing it with two screws to the anterior part of the glenoid, thus making a bone stopper preventing the head from humerus to dislocate.",
      },
      {
        text: "2 -The Bankart intervention, which corresponds to a reinsertion of the anterior rim of the glenoid and which we perform arthroscopically (video surgery).",
      },
      {
        text: "These two methods require loco-regional anesthesia associated with general comfort anesthesia.",
      },
      {
        text: "Each method has its advantages and disadvantages",
      },
      {
        text: "– Conventional “open” surgery (Latarjet abutment) carries a greater risk of infection but has the advantage of a low risk of recurrence (approximately 3 to 4%).",
      },
      {
        text: "– Arthroscopic surgery (Bankart intervention) has the advantage of presenting a practically zero risk of infection, but the risk of recurrence is higher (between 8 and 10%), especially in hyperlaxed patients. The choice between these two methods is dictated by objective elements: importance of bone lesions, type of sport (contact or not), context of ligament hyperlaxity, patient age, etc. Thus, Latarjet-type intervention will be reserved for very young patients. , sports or hyperlaxes and Bankart’s intervention for older patients who do not practice contact sports.",
      },
    ],
  },
  {
    question: "What are the consequences of an intervention?",
    answer: [
      {
        text: "The average hospital stay is: 12-24 hours, discharge is the same day.",
      },
      {
        text: "The arm is immobilized elbow to the body for 1 month and rehabilitation is started on the fifth postoperative day.",
      },
      {
        text: "– Dressing treatments are performed three times a week for 15 days and analgesic treatment is instituted postoperatively.",
      },
      {
        text: "– Rehabilitation lasts on average 3 months.",
      },
      {
        text: "– Resumption of driving is possible around the 6th postoperative week and that of sports activities requiring the shoulder around the 4th postoperative month.",
      },
      {
        text: "– Resumption of professional activity depends on the level of physical activity required.",
      },
    ],
  },
  {
    question: "What are the results?",
    answer: [
      {
        text: "The recurrence rate after Bankart intervention is 8 to 10% on average, while that after Latarjet abutment is lower around 4%, provided that the indication for surgery is well established.",
      },
    ],
  },
  {
    question: "What are the risks?",
    answer: [
      {
        text: "Any surgical procedure poses a risk of complications which must be weighed against the risk of natural worsening of the disease and the benefits of treatment. The risks common to any surgery are postoperative infection, hematoma, wound healing disorders and algodystrophy.",
      },
      {
        text: "This rare complication results in a swollen upper limb, painful with sweating for several months, and can leave sequelae such as residual pain, stiffness of the fingers or wrist. The specific risks are recurrence of instability, lack of consolidation of the bone stop (pseudarthrosis), transient nerve damage and the occurrence of stiffness in the shoulder. All in all, we should not overestimate the risks, but simply be aware that a surgical intervention always involves a small amount of risks.",
      },
      {
        text: "Your surgeon is in the best position to answer any questions you may have before or after your procedure, so don’t hesitate to talk to them.",
      },

      { text: "Number of days of hospitalization : 12h – 24h." },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
];

const Faq = () => {
  return (
    <Specialities2 data={data} title="Orthopedics" bg="bg-orthopedic-surgery" />
  );
};

export default Faq;
