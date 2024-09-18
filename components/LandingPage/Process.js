import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const Process = ({process}) => 
{
  const router = useRouter();

  const { pathname } = router;

  return (
    <section className='ptb-80' id="process">
    <div className="process_container_wrapper">
      <div className='section-title text-center style1 mb-40'>
        <h2>{process.title}</h2>
        <span>{process.sub_title}</span>
      </div>
      <div className="process_card_container mb-40">
        {process.steps.map((data, i) => {
          return (
            <div className="process_card" key={i}>
                  <div className="hovereffect bordereffect mb-40">
                      <img className="img-responsive" src={data.image_url} alt={data.title}/>
                         <div className="overlay">
				          <p>
                  <h2>{data.title}</h2>
				          </p>
                        </div>
                  </div> 
              <div className="text-center mb-0">
                <div className="promo-content">
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="process_call_to_action">
        <h2 className="process_cta_primary_text">
          {process.call_to_action_text.primary_text}
        </h2>
        <h3 className="process_cta_secondary_text">
          {process.call_to_action_text.secondary_text}
        </h3>
        {pathname === "/solutions/hair-transplant" && 
                <Link href="/price-plan/hair">
                    <a className="process_cta_button">
                    {process.call_to_action_button.text} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
                    {pathname === "/fr/solutions/greffe-cheveux" && 
                <Link href="/price-plan/cheveux">
                <a className="process_cta_button">
                {process.call_to_action_button.text} <span className="ml-2 right-icon white">&#8594;</span>
                </a>
            </Link>
        }
 {pathname === "/solutions" && 
                <Link href="/price-plan/general">
                <a className="process_cta_button">
                {process.call_to_action_button.text} <span className="ml-2 right-icon white">&#8594;</span>
                </a>
            </Link>
        }
            {pathname === "/solutions/dental" && 
                <Link href="/price-plan/dental">
                    <a className="process_cta_button">
                    {process.call_to_action_button.text} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/solutions/gastric" && 
                <Link href="/price-plan/gastric">
                    <a className="process_cta_button">
                    {process.call_to_action_button.text} <span className="ml-2 right-icon white">&#8594;</span>
                    </a>
                </Link>
            }

      </div>
    </div>
    </section>
  );
};

export default Process;
