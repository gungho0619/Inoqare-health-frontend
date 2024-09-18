import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import {
  fetchCountrySmallListAsync,
  fetchPriceAsync,
  getCountryList,
  getPriceList,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepSeven = () => {
  const dispatch = useDispatch();

  const formData = useSelector(getFormData);
  const countryList = useSelector(getCountryList);
  const priceList = useSelector(getPriceList);

  const [selectedCountry, setSelectedCountry] = useState(formData.country);
  const [errorMsg, setErrorMsg] = useState({});

  useEffect(() => {
    dispatch(fetchCountrySmallListAsync(formData.specialty));
  }, []);

  useEffect(() => {
    if (!formData || !formData.specialty || !formData.specialty._id || !formData.country || !formData.country._id) {
      return;
    }

    const requestParams = {
      specialtyId: formData.specialty._id,
      countryId: formData.country._id,
    }

    dispatch(fetchPriceAsync(requestParams));
  }, [formData, selectedCountry]);

  useEffect(() => {
    if (!formData || !formData.specialty || !formData.specialty._id || !countryList) {
      return;
    }

    for (let i = 0; i < countryList.length; i++) {
      const eachCountry = countryList[i];
      if (eachCountry._id === selectedCountry._id)
        continue;

      const requestParams = {
        specialtyId: formData.specialty._id,
        countryId: eachCountry._id,
      }

      dispatch(fetchPriceAsync(requestParams));
    }
  }, [formData, countryList]);

  const prevStep = (e) => {
    e.preventDefault();

    dispatch(decStep());
  }
  const nextStep = (e) => {
    e.preventDefault();

    dispatch(incStep());
  }

  const onClickCountry = (item) => {
    console.log(`item = ${JSON.stringify(item)}`);
    setSelectedCountry(item);

  }

  return (
    <>
      <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >Your proposition</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%", backgroundColor: "#78D2FF" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-body">
        <form className="form-wrap">
          <div className="row">
          <h3></h3>
            <div className="col-lg-6">
              <div className="form-group country-list-wrapper">
                <div className="recommend-tour-item style2 country-list-wrapper">
                  <div
                    className={`recommend-tour-bg bg-f each-country-wrapper ${selectedCountry && selectedCountry._id === selectedCountry._id ? 'selected' : ''}`}
                    style={{ background: `url(${selectedCountry.imageUrl}) no-repeat center center` }}
                  >
                    <p>{selectedCountry.label}</p>
                    <h4></h4>
                    <p>${selectedCountry && selectedCountry._id && priceList.find((each) => each.countryId === selectedCountry._id) && priceList.find((each) => each.countryId === selectedCountry._id).price}</p>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-lg-6">
              <div className="form-group country-list-wrapper">
                {countryList.length > 0
                  && countryList.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="recommend-tour-item style2 country-list-wrapper"
                      >
                        <div
                          className={`recommend-tour-bg bg-f each-country-list ${selectedCountry && selectedCountry._id === item._id ? 'selected' : ''}`}
                          style={{ background: `url(${item.imageUrl}) no-repeat center center` }}
                          onClick={() => onClickCountry(item)}
                        >
                          <h4></h4>                         
                          <p>{item.label}</p>
                          <p>${item && item._id && priceList.find((each) => each.countryId === item._id) && priceList.find((each) => each.countryId === item._id).price}</p>                
                          </div>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>

          <div className="container">
          <div className="row">
            <div className="col">
            <button onClick={nextStep} className="btn v6">
              Book a free appointment with the doctor now
              </button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepSeven;