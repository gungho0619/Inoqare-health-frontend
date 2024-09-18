import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import StepOne from './CallbackForm';

import {
  getStep
} from '../../store/priceSlice';

const PricePlanForm = (props) => {
  const dispatch = useDispatch();

  const step = useSelector(getStep);
  
  useEffect(() => {
  }, []);

  return (
    <section className="price-plan-form-wrapper">
      <div className="container">
        <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="price-plan-form">
            {/*
            {step === 1 && (
              <StepOne sid={props.sid} /> 
            )}
            {step === 2 && (
              <StepTwo />
            )}
            {step === 3 && (
              <StepThree />
            )}
            {step === 4 && (
              <StepFour />
            )}
            {step === 5 && (
              <StepFive />
            )}
            {step === 6 && (
              <StepSix />
            )}
            {step === 7 && (
              <StepSeven />
            )}
            */}
            {step === 1 && (
              <StepOne sid={props.sid} /> 
            )}
            {step === 2 && (
              <StepFour />
            )}
            {step === 3 && (
              <StepSix />
            )}
            {step === 4 && (
              <StepSeven />
            )}
             </div>
        </div>
                        {step === 5 && (
              <StepCalendar />
            )}
      </div>
    </section>
  );
};

export default PricePlanForm;
