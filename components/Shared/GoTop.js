import React, { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <a className='back-to-top active bounce' onClick={() => scrollToTop()}>
          <i className='las la-arrow-up'></i>
        </a>
      )}

    </>
  );
};

export default GoTop;
