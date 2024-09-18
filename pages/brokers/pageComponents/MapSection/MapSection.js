import React from 'react'
import World from "react-svg-worldmap";
import data from "@data/country_map";

const MapSection = () => {
    const pageData = {
        title: "We Deliver International Healthcare Excellence On A Turnkey Basis",
        text: "Inoqare is the industry-leading platform that allows individuals, insurance companies, and enterprises to access quality medical treatments on a turnkey basis. We combine the power of our rich experience, time-honored relationships, and sound industry knowledge to enable borderless, seamless, and frictionless delivery of on-demand healthcare.",
        content: [
            {
                icon: "flaticon-customer-care",
                title: "Full Coverage",
                info: "Our global experience in some of the most demanding healthcare sectors empowers us to offer an extensive range of treatments and destinations."
            },
            {
                icon: "flaticon-support",
                title: "Better Prices",
                info: "Utilize our relationships with international providers including hospitals, governments, and professionals to access special prices that fit your client’s plan."
            },
            {
                icon: "flaticon-tour-guide",
                title: "Robust Treatments",
                info: "Let Inoqare look after your clients through treatment planning, appointment booking, traveling, medical procedure, and rehabilitation."
            }
        ]
    }
    
  return (
    <section className="">
        <div className="container">
            <h1 className="fs-28 text-dark fw-700">{pageData.title}</h1>
            <hr className="w-25" />
            <p>{pageData.text}</p>
            <div className={`row flex-md-row-reverse align-items-center`}>
                <div className={`col-md-7 mb-4`}>
                    {pageData.content.map((item, i) => 
                        <div className="about-feature-item mb-4" key={i}>
                            <i className={item.icon}></i>
                            <h4 className="about-head-banner fs-sm-16">{item.title}</h4>
                            <p className="font-16 fs-sm-14">{item.info}</p>
                        </div>
                    )}
                </div>
                <div className={`col-md-5`}>
                    <World color="#78d2ff" size="lg" data={data} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MapSection