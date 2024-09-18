import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeHasMedicalProblem,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepTwo = () => {
  const dispatch = useDispatch();

  const formData = useSelector(getFormData);

  const [hasProblem, setHasProblem] = useState(formData.hasMedicalProblem);
  const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {    
  }, []);

  const onClickHasProblem = (has) => {
    setHasProblem(has);
  }

  const prevStep = (e) => {
    e.preventDefault();

    dispatch(decStep());
  }

  const nextStep = (e) => {
    e.preventDefault();

    dispatch(changeHasMedicalProblem(hasProblem));
    dispatch(incStep());
  }

  const handleValidation = () => {
    const errorObj = {};
    
    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
      <div className="form-header bg-minsk">
        <div className="quote-header">
          <span style={{color: 'white'}} >Have you had surgery recently?</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "28.57%", backgroundColor: "#78D2FF" }}
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
                  className={`each-specialty-wrapper ${hasProblem ? 'selected' : ''}`}
                  onClick={() => onClickHasProblem(true)}
                >
                  <p>Yes</p>
                </div>
                <div
                  className={`each-specialty-wrapper ${!hasProblem ? 'selected' : ''}`}
                  onClick={() => onClickHasProblem(false)}
                >
                  <p>No</p>
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

export default StepTwo;