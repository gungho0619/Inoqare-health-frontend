import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Link from 'next/link';

const FourZeroFour = () => {
  return (
    <>
      <PageBanner bannerTitle='404 Error' pageName='404 Error' />
      <div className='error-wrap ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='error-content'>
                <span className='trans_text v4'>Oops!</span>
                <h2>404 error</h2>
                <p>The Page you are looking for is not available</p>
                <Link href='/'>
                  <a className='btn v1 mt-3'>
                    <i className='las la-arrow-left'></i>Back to Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourZeroFour;
