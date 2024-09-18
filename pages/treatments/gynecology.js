import React from "react";
import Specialities2 from "../../components/HomeOne/Specialties2";

const data = [
  {
    question: "GYNECOLOGY - Surgery of the uterus and cervix",
    answer: [
      {
        text: "INDICATIONS",
        classes: "heading-text-accordion",
      },
      {
        para: (
          <p>
            Bleeding and / or
            <br />
            Pain caused by benign pathologies (fibroids, adenomyosis, etc.).
            <br />
            It can also be used to treat certain prolapse or gynecological
            cancers.
            <br />
            Total hysterectomy is the most common.
          </p>
        ),
      },
      {
        text: "Treatments",
        classes: "heading-text-accordion",
      },
      {
        para: (
          <p>
            Surgery is mainly used to treat tumors confined to the cervix.{" "}
            <br />
            The purpose of surgery is to remove all of the tumor and eliminate
            the risk of recurrence. This most often involves removing the uterus
            and the network of lymph nodes located near the uterus.
            <br />
            Several types of interventions exist. The choice depends on the
            precise extent of the cancer. But your age and your possible desire
            for a child can also influence this choice.
          </p>
        ),
      },
      {
        text: "ENLARGED COLPO-HYSTÉRECTOMY",
        classes: "heading-text-accordion",
      },
      {
        para: (
          <p>
            The most frequently performed procedure is an enlarged
            colpo-hysterectomy, also known as the Wertheim procedure. During
            this procedure, the surgeon removes the uterus, the parameters and
            the upper part of the vagina. Most often, the ovaries also need to
            be removed. Enlarged colpo-hysterectomy is offered to treat tumors
            limited to the cervix and smaller than 4 centimeters in size. <br />
            Enlarged colpo-hysterectomy may be preceded by brachytherapy
            performed 6 to 8 weeks before the operation. Preoperative
            brachytherapy makes it possible to reduce the size of the tumor to
            promote its total removal during surgery. Most often, it takes about
            a week in hospital.
          </p>
        ),
      },
    ],
  },
  {
    question: "GANGLION SURGERY",
    answer: [
      {
        para: (
          <p>
            It is often necessary to remove the lymph nodes from the pelvis.
            This procedure, called lymph node dissection or pelvic
            lymphadenectomy, can be done before uterine surgery, but most often
            it is done at the same time as the enlarged colpohysterectomy.{" "}
            <br />
            The sentinel node technique is under evaluation. It involves
            removing the lymph node (s) closest to the tumor to determine if
            they have been invaded by cancer cells. This technique would avoid
            removing all of the lymph nodes from the pelvis if it is not
            necessary.
          </p>
        ),
      },
    ],
  },
  {
    question: "HYSTERECTOMY (ABLATION OF THE UTERUS)",
    answer: [
      {
        text: "This operation involves removing only the uterus (simple hysterectomy) and also, in some cases, parameters and lymph nodes. This is called an enlarged hysterectomy. Hysterectomy may be offered to treat small tumors limited to the cervix.",
      },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
  {
    question: "TRACHELECTOMY (ABLATION OF THE NECK OF THE UTERUS)",
    answer: [
      {
        para: (
          <p>
            A trachelectomy involves removing only the cervix and sometimes also
            the upper part of the vagina, parameters and lymph nodes (enlarged
            trachelectomy). <br />
            When the cervix is ​​removed, the surgeon makes special stitches
            (called cerclage) to partially close the uterus where the cervix
            was. The new orifice formed allows the evacuation of blood from the
            uterus to the vagina during menstruation.
            <br />
            This procedure can treat certain tumors limited to the cervix that
            are no larger than 2 centimeters in size, while preserving the
            uterus. This so-called conservative surgery is an alternative that
            can be offered to young women who wish to maintain their fertility
            and are considering a future pregnancy. Very delicate, this
            intervention is carried out in a few specialized centers in France.
            <br />
            This information is given as an indication and must be transmitted
            by a doctor on the day of your treatment.
          </p>
        ),
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
  {
    question: "SURGERY FOR UNLIMITED TUMORS IN THE NECK OF THE UTERUS",
    answer: [
      {
        para: (
          <p>
            When the tumor is larger than 4 centimeters or when it has spread
            beyond the cervix (without forming distant metastasis), the standard
            treatment is concomitant radiochemotherapy.
            <br />
            However, this treatment can sometimes be supplemented by surgery.
            The need for surgery and the type of surgery to be performed are
            discussed on a case-by-case basis during the multidisciplinary
            consultation meeting.
          </p>
        ),
      },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
  {
    question: "SURGERY FOR FIBROS IN THE UT ERUS OR MYOMECTOMY",
    answer: [
      {
        text: "This can be done by",
        classes: "heading-text-accordion",
      },
      {
        para: (
          <p>
            Abdominal approach (laparotomy), <br />
            Vaginal use (hysteroscopy)
          </p>
        ),
      },
      {
        text: "By laparoscopy",
        classes: "heading-text-accordion",
      },
      {
        text: "Abdominal myomectomy requires an incision in the abdomen and one or more incisions in the uterus to remove the fibroid (s).",
      },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
  {
    question: "Tumors of the nerve pathways (neurogenic tumors)",
    answer: [
      {
        para: (
          <p>
            A set of nerves run through the chest. The different types of tumors
            that can affect them are not serious.
            <br />
            Neurogenic tumors are treated with an operation. Most often, it is
            sufficient to remove them. Sometimes the presence of a neurosurgeon
            is necessary for the surgical work.
            <br />
            This is the subject of discussion during a multidisciplinary staff.{" "}
            <br />
            This information is given as an indication and must be transmitted
            by a doctor on the day of your treatment.
          </p>
        ),
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment.",
      },
    ],
  },
  {
    question: "TRUMP SURGERY OR SALPINGECTOMY",
    answer: [
      {
        para: (
          <p>
            The salpingectomy is performed under general anesthesia and requires
            hospitalization between one and five days.
            <br />
            There are two methods of performing a salpingectomy, similar to
            those of oophorectomy (removal of the ovaries). <br />
            Laparotomy ablation
            <br />
            During a laparotomy, the surgeon makes several incisions in the
            abdomen. He then uses it to insert instruments that will be used to
            remove the fallopian tube (s).
          </p>
        ),
      },
      {
        para: (
          <p>
            Ablation by laparoscopic surgery
            <br />
            The gynecological surgeon begins by injecting carbon dioxide
            directly into the abdomen using a needle and a thin tube. He can
            then insert an optical cable to follow the operation on a video
            screen. Incisions are made in the abdomen, to introduce the
            instruments necessary for the removal of the uterine tube (s).
            <br />
            The difference between these two methods and that during a
            laparotomy, one “opens” the abdomen of the patient, while a
            laparoscopic surgery keeps the abdomen “closed”, one sees inside
            with the help of an optical cable.
            <br />
            Why resort to salpingectomy?
            <br />
            Tubal infection
            <br />
            Salpingitis
            <br />
            This is the overall term for inflammation of the uterine tubes. Its
            causes are often sexually transmitted diseases, which cause
            inflammation of one or two tubes. It does not require the removal of
            the tubes, except in the case of a major complication.
            <br />
            Hydrosalpinx
            <br />
            Hydrosalpinx is an infection of one of the fallopian tubes. It fills
            with fluid, sometimes pus, which prevents it from functioning and
            delivering the eggs. If this infection is treated in time, one can
            simply unblock the affected tube. On the other hand, if it is too
            damaged to continue to function, even after the infection has
            passed, it must be removed by salpingectomy.
            <br />
            Pyosalpinx
            <br />
            One of the most severe complications of salpingitis, infection of
            the fallopian tubes. Purulent abscesses appear, which causes intense
            pain and in many cases prevents sterility of the patients. As with
            hydrosalpinx, the damaged tube will have to be removed by
            salpingectomy.
            <br />
            Tubal ectopic pregnancy
            <br />
            Ectopic pregnancy is an abnormal pregnancy (also called ectopic):
            instead of growing in the womb, the embryo develops elsewhere. In
            the ovary, or sometimes in the fallopian tubes that connect the
            ovary to the uterus.
            <br />
            This environment is absolutely not adapted to the good growth of an
            embryo. Worse, he endangers the mother by blocking this trunk.
          </p>
        ),
      },
    ],
  },
  {
    question: "OVA SURGERY (Oophorectomy)",
    answer: [
      { text: "Definition", classes: "heading-text-accordion" },
      {
        text: "Oophorectomy is the removal of one or two ovaries in women. They are removed if there is a cyst or suspected infection or cancer. A woman can still have children with only one ovary. The operation is performed under anesthesia.",
      },

      {
        text: "The ovaries will produce eggs, which are necessary for procreation, as well as hormones such as estrogen and progesterones. Therefore, if the oophorectomy involves the removal of both ovaries, it will lead to sterilization of the woman and trigger her menopause.",
      },
      {
        text: "The removal of the ovaries or fallopian tubes are procedures mainly performed by laparoscopy (exploration of the abdomen). To do this, three small skin incisions are made to introduce the instruments and a camera into the abdominal cavity.",
      },
      {
        text: "By means of the ex-vivo method it is possible to overcome the period of ischemia which is the period during which an organ is no longer perfused with blood or oxygen which is on average from 5 a.m. to 6 a.m. which makes it possible to prepare the lungs for a transplant until the moment when the surgeon considers that the lungs are said to be “transplantable” with an optimization of the chances of success.",
      },
      {
        text: "Depending on the case, the operation can take place on an outpatient basis, the patient being able, in principle, to go home the same evening. In the case of an oophorectomy performed for cancer, the length of hospital stay can vary from 1 to 7 days",
      },
      {
        text: "This information is given as an indication and must be transmitted by a doctor on the day of your treatment.",
      },
      {
        text: "The information contained on this site should not be used as a substitute for a medical consultation. Always speak with your doctor for information on diagnosis and treatment",
      },
    ],
  },
  {
    question: "OVARIECTOMY, UNILATERAL AND BILATERAL",
    answer: [
      {
        para: (
          <p>
            Oophorectomy involves the removal of one ovary (unilateral
            oophorectomy) or both ovaries (bilateral oophorectomy) and is
            commonly associated with the simultaneous removal of the fallopian
            tubes (salpingo-oophorectomy) due to:
            <br />
            Cyst or <br />
            Benign ovarian tumor
            <br />
            Endometriosis
            <br />
            Torsion of the ovary
            <br />
            Tubo-ovarian abscess
            <br />
            Ovarian cancer
            <br />
            Increased risk (BRCA1 or BRCA2 gene mutations) of ovarian cancer or
            breast cancer
          </p>
        ),
      },
      { text: "Surgical intervention", classes: "heading-text-accordion" },
      {
        text: "Ovariectomy by laparoscopy (or laparoscopy), the most frequent, the most recent, and minimally invasive technique, consisting in making several small incisions (3 or even 4) on the abdomen to introduce the operating instruments, to perform the intervention by video /camera. This technique allows a shorter hospital stay and has the advantage of being not very aggressive, causing little postoperative pain, and allows a rapid resumption of daily activities",
      },
      { text: "After the intervention", classes: "heading-text-accordion" },
      {
        para: (
          <p>
            Taking simple analgesics <br />
            Possibly rapid resumption of normal daily activities and light
            activities
            <br />
            Resumption of normal physical and sports activities after 1 month
            <br />
            No specific post-operative diet
            <br />
            Work stoppage of 2 to 4 weeks, depending on the physical nature of
            the profession or not
            <br />
            In the event of a laparoscopy: pain towards the shoulders or under
            the ribs may occur the day after the operation and disappear within
            24 / 48h
            <br />
            Post-operative consultation 1 month after the operation by your
            surgeon
          </p>
        ),
      },
      {
        para: (
          <p>
            Duration of the intervention: 1 hour <br />
            Average length of hospitalization: 2 to 4 days
          </p>
        ),
      },
      {
        para: (
          <p>
            Little painful intervention <br />
            Under general anesthesia
          </p>
        ),
      },
    ],
  },
];

const Faq = () => {
  return <Specialities2 data={data} title="Gynecology" bg="bg-gynecology" />;
};

export default Faq;
