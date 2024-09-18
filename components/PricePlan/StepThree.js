import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import {
  changeQAOne,
  changeQATwo,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepThree = () => {
  const dispatch = useDispatch();

  const formData = useSelector(getFormData);
  
  const [answer1, setAnswer1] = useState(formData.qaOne);
  const [answer2, setAnswer2] = useState(formData.qaTwo);

  const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {
  }, []);

  const onChangeAnswer1 = (event) => {
    setAnswer1(event.target.value);
  }

  const onChangeAnswer2 = (event) => {
    setAnswer2(event.target.value);
  }

  const prevStep = (e) => {
    e.preventDefault();

    dispatch(decStep());
  }

  const nextStep = (e) => {
    e.preventDefault();

    /* const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    } */

    dispatch(changeQAOne(answer1));
    dispatch(changeQATwo(answer2));

    dispatch(incStep());
  }

  const handleValidation = () => {
    const errorObj = {};

    if (!answer1 || answer1 === '') {
      errorObj.answer1 = "Answer 1 is required";
    }

    if (!answer2 || answer2 === '') {
      errorObj.answer2 = "Answer 2 is required";
    }
    
    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
          <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >Are you currently taking medication or suffering from a medical condition?</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "42.86%", backgroundColor: "#78D2FF" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="form-body">
        <form className="form-wrap">

          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  className="form-control answer"
                  rows="5"
                  placeholder="Medications"
                  value={answer1}
                  onChange={onChangeAnswer1}
                ></textarea>
                {errorMsg.answer1 && (
                  <div className="error-msg">
                    {errorMsg.answer1}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  className="form-control answer"
                  rows="5"
                  placeholder="Chronic disease"
                  value={answer2}
                  onChange={onChangeAnswer2}
                ></textarea>
                {errorMsg.answer2 && (
                  <div className="error-msg">
                    {errorMsg.answer2}
                  </div>
                )}
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

export default StepThree;