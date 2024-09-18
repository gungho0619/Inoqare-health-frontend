import React from 'react'
import World from "react-svg-worldmap";
import data from "@data/country_map";

const TwoColumn = () => {
  return (
    <section className='pt-small'>
        <div className="container">
            <div className="section-title style1">
                <span>Who we are ?</span>
                <h2>Quick Access To Treatment Options Around The Planet</h2>
                <hr className='w-25'/>
            </div>
            <div className={`row`}>
                 <div className={`col-sm-6 mb-4`}>
                    <p>Inoqare is a subsidiary of Paris International Care, which is the market leader in the transportation of transplant teams and organs in France. </p>                    
                    <p>We combine the power of our rich experience, long-standing relationships and in-depth industry knowledge to enable seamless, frictionless, borderless healthcare delivery.</p>
                    <p><strong>Extensive reach</strong> Rely on our global experience in some of the most complex and demanding areas of healthcare delivery.</p>
                    <p><strong>Strong networks</strong> verage our relationships with global providers, including hospitals, brokers, governments and professionals.</p>
                    <p><strong>Robust treatments</strong> Access the best treatments, wherever you are. Get your best health back and let us do the rest.</p>
                    <p>We currently work on all 4 continents of the Americas, Europe, Africa and Asia.</p>
                </div>
                <div className={`col-sm-6 mb-4`}>
                    <World color="#78d2ff" size="xl" data={data} />
                 </div>
                
            </div>
        </div>
    </section>
  )
}

export default TwoColumn