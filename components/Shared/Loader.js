import React from 'react';

const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className='preloader js-preloader'>
          <img src='/images/loader.gif' alt='Image' />
        </div>
      )}
    </>
  );
};

export default Loader;
