import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from "next/link";


import {
  fetchCountrySmallListAsync,
  getCountryList,
  changeCountry,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepFour = () => {
  const dispatch = useDispatch();

  const formData = useSelector(getFormData);
  const countryList = useSelector(getCountryList);

  const [selectedCountry, setSelectedCountry] = useState(formData.country);
  const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {
    dispatch(fetchCountrySmallListAsync(formData.specialty));
  }, []);

  const onClickCountry = (item) => {
    setErrorMsg((prevState) => ({ ...prevState, selectedCountry: '' }));

    setSelectedCountry(item);
  }

  const prevStep = (e) => {
    e.preventDefault();

    dispatch(decStep());
  }

  const nextStep = (e) => {
    e.preventDefault();

    const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }

    dispatch(changeCountry({
      _id: selectedCountry._id,
      label: selectedCountry.label,
      imageUrl: selectedCountry.imageUrl
    }));

    dispatch(incStep());
  }

  const handleValidation = () => {
    const errorObj = {};

    if (!selectedCountry || (selectedCountry && selectedCountry._id === '')) {
      errorObj.selectedCountry = "Please select country.";
    }

    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
      <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >Choose the country</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "57.15%", backgroundColor: "#78D2FF" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-body">
        <form className="form-wrap">
				  <div className="display-country ptb-50">
            {countryList.length > 0
              && countryList.map((item) => {                    
                return (
                  <div className="recommend-tour-item style2 country-list-wrapper" key={item._id}>
                    <div
                      style={{ background: `url(${item.imageUrl}) no-repeat center center` }}
                      className={`recommend-tour-bg bg-f each-country-wrapper ${selectedCountry && selectedCountry._id === item._id ? 'selected' : ''} `}

                      onClick={() => onClickCountry(item)}
                    >
                      <h4>{item.label}</h4>
                    </div>
                  </div>
                  )
            })}
            {errorMsg.selectedCountry && (
              <div className="error-msg">
                {errorMsg.selectedCountry}
              </div>
            )}
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-lg-2">
                <button onClick={prevStep} className="btn v10">
                  Prev
                </button>
              </div>
              <div className="col">
                <button onClick={nextStep} className="btn v6">
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
	);
};

export default StepFour;