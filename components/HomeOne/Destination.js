import React from 'react';
import Link from 'next/link';

const Desnitaions = ({ des1, des2, des3, des4, des5 }) => {
  return (
    <>
      <section className='service-wrap pt-100'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style1 text-center'>
                <h2>Easy Access to Options Around the World</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='service-item style1 text-center '>
                <div className='position-relative'>
                  <div className='service-img pe-0'>
                    <Link href='/tours'>
                      <a>
                        <img className='rounded-0 h-50' src={'/images/tour/'+des1+'.jpg'} alt='Image' />
                      </a>
                    </Link>
                  </div>
                  <h4 className='position-absolute w-100 text-uppercase cbottom-20'>
                    {des1}
                  </h4>
                </div>
                <div className='position-relative'>
                  <div className='service-img pe-0'>
                    <Link href='/tours'>
                      <a>
                        <img className='rounded-0 h-50' src={'/images/tour/'+des2+'.jpg'} alt='Image' />
                      </a>
                    </Link>
                  </div>
                  <h4 className='position-absolute w-100 text-uppercase cbottom-20'>
                    {des2}
                  </h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='service-item style1 text-center position-relative h-100 pb-30'>
                <div className='service-img h-100'>
                  <Link href='/tours'>
                    <a>
                      <img className='rounded-0 h-100' src={'/images/tour/'+des3+'.jpg'} alt='Image' />
                    </a>
                  </Link>
                </div>
                  <h4 className='position-absolute w-100 text-uppercase cbottom-50'>
                    {des3}
                  </h4>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='service-item style1 text-center position-relative'>
              <div className='position-relative'>
                  <div className='service-img ps-0'>
                    <Link href='/tours'>
                      <a>
                        <img className='rounded-0 h-50' src={'/images/tour/'+des4+'.jpg'} alt='Image' />
                      </a>
                    </Link>
                  </div>
                  <h4 className='position-absolute w-100 text-uppercase cbottom-20'>
                    {des4}
                  </h4>
                </div>
                <div className='position-relative'>
                  <div className='service-img ps-0'>
                    <Link href='/tours'>
                      <a>
                        <img className='rounded-0 h-50' src={'/images/tour/'+des5+'.jpg'} alt='Image' />
                      </a>
                    </Link>
                  </div>
                  <h4 className='position-absolute w-100 text-uppercase cbottom-20'>
                    {des5}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-20'>
            <div className='col-12 text-center'>
            <Link href='/tours'>
              <a className='btn v2'>
                VIEW ALL DESTINATIONS
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Desnitaions;
