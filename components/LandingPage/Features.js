import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';


const Features = ({data}) => {
  const router = useRouter();

  const { pathname } = router;

  return (

<section className='bg-minsk ptb-80' id="features">
<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
      <div className='section-title text-center style2 mb-40'>
        <h2>{data.title}</h2>
        <span style={{fontSize: 16 + 'px'}} className="new-line mt-20">{data.sub_title.split("<br/>").join("\n")}</span>
      </div>
    </div>
  </div>
  <div className='row'>
    <div className='col-md-12'>
        <div className="grid-wrap">
      {data.cards.map((data, i) => {
          return (
    <div key={i} className="hovereffect bordereffect">
        <img className="img-responsive" src={data.image_url} alt=""/>
        <a href={data.link}>
<div className="overlay"> 
				          <p>
                  <h2>{data.title}</h2>
				          </p>
            </div>
            <h2>{data.title}</h2></a>

            </div> 
                  );
                })}  
        </div>  
        <div className='section-title text-center style2 mt-40'>
        <span style={{fontSize: 16 + 'px'}} className="new-line">{data.description && data.description.split("<br/>").join("\n")}</span>
        {pathname === "/solutions/hair-transplant" && 
                <Link href="/price-plan/hair">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
                    {pathname === "/fr/solutions/greffe-cheveux" && 
                <Link href="/price-plan/cheveux">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/solutions/dental" && 
                <Link href="/price-plan/dental">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/solutions/gastric" && 
                <Link href="/price-plan/gastric">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
      </div>      
      
    </div>
    </div>
  </div>
</section>

  );
};

export default Features;