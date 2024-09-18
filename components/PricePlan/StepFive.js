import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeWhenTreatment,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepFive = () => {
  const dispatch = useDispatch();

  const formData = useSelector(getFormData);

  const [whenTreatment, setWhenTreatment] = useState(formData.whenTreatment);
  const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {    
  }, []);

  const onClickWhen = (when) => {
    setWhenTreatment(when);
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

    dispatch(changeWhenTreatment(whenTreatment));
    dispatch(incStep());
  }

  const handleValidation = () => {
    const errorObj = {};

    if (!whenTreatment || whenTreatment === '') {
      errorObj.whenTreatment = "Please select when you want to do.";
    }
    
    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
      <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >When do you want to do this treatment?</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "71.42%", backgroundColor: "#78D2FF" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-body">
        <form className="form-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group specialty-list-wrapper">
                <div
                  className={`each-specialty-wrapper ${whenTreatment === 'asap' ? 'selected' : ''}`}
                  onClick={() => onClickWhen('asap')}
                >
                  <img src="/images/steps/3.png" alt="img" />
                  <p>As soon as possible</p>
                </div>
                <div
                  className={`each-specialty-wrapper ${whenTreatment === '3_months' ? 'selected' : ''}`}
                  onClick={() => onClickWhen('3_months')}
                >
                                    <img src="/images/steps/4.png" alt="img" />
                  <p>Within the next 3 months</p>
                </div>
                <div
                  className={`each-specialty-wrapper ${whenTreatment === '12_months' ? 'selected' : ''}`}
                  onClick={() => onClickWhen('12_months')}
                >
                                    <img src="/images/steps/5.png" alt="img" />
                  <p>Within the next 12 months</p>
                </div>
                <div
                  className={`each-specialty-wrapper ${whenTreatment === 'want_some_information' ? 'selected' : ''}`}
                  onClick={() => onClickWhen('want_some_information')}
                >
                                                      <img src="/images/steps/6.png" alt="img" />
                  <p>I just want to have some information</p>
                </div>
              </div>
            </div>
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

export default StepFive;