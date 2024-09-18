import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import {
  fetchRootSpecialtyListAsync,
  fetchSpecialtyListAsync,
  getRootSpecialtyListFilter,
  getSpecialtyList,
  clearSpecialtyList,
  clearSpecialtyListFilter,
  changeRootSpecialty,
  changeSpecialty,
  getFormData,
  incStep,
  decStep
} from '../../store/priceSlice';

const StepOne = (props) => {
	const dispatch = useDispatch();
  const { sid } = props;

	const rootSpecialtyListFilter = useSelector(getRootSpecialtyListFilter);
  const specialtyList = useSelector(getSpecialtyList);
  const formData = useSelector(getFormData);

  const [rootSpecialty, setRootSpecialty] = useState(formData.rootSpecialty);
  const [selectedSpecialty, setSelectedSpecialty] = useState(formData.specialty);
  const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {
    dispatch(fetchRootSpecialtyListAsync());
  }, []);

  useEffect(() => {
    const selectedRoot = rootSpecialtyListFilter.find((elem) => elem.label.toLowerCase() === sid);
    if (!selectedRoot || !selectedRoot.value || selectedRoot.value === '') {
      dispatch(clearSpecialtyList());
      dispatch(clearSpecialtyListFilter());
      setSelectedSpecialty(null);

      return;
    }

    setRootSpecialty(selectedRoot);

    setErrorMsg((prevState) => ({ ...prevState, rootSpecialty: '' }));

    dispatch(fetchSpecialtyListAsync(selectedRoot.value));
  }, [sid, rootSpecialtyListFilter]);

  const onClickSpecialty = (item) => {
  	setErrorMsg((prevState) => ({ ...prevState, selectedSpecialty: '' }));

  	setSelectedSpecialty(item);
  }

  const nextStep = (e) => {
  	e.preventDefault();

  	const obj = handleValidation();
    for (const [_, value] of Object.entries(obj)) {
      if (value && value.length > 0) {
        return;
      }
    }

    dispatch(changeRootSpecialty({
    	_id: rootSpecialty.value,
    	label: rootSpecialty.label
    }));
    dispatch(changeSpecialty({
    	_id: selectedSpecialty._id,
    	label: selectedSpecialty.label
    }));

    dispatch(incStep());
  }

  const handleValidation = () => {
    const errorObj = {};
    
    if (!rootSpecialty || (rootSpecialty && rootSpecialty.value === '')) {
      errorObj.rootSpecialty = "Root specialty is required";
    }

    if (!selectedSpecialty || (selectedSpecialty && selectedSpecialty._id === '')) {
      errorObj.selectedSpecialty = "Specialty is required";
    }

    setErrorMsg(errorObj);
    
    return errorObj;
  };

	return (
		<>
      <div className="form-header bg-minsk">
        <div className="quote-header">
        <span style={{color: 'white'}} >Your analysis</span>
        </div>
      </div>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "14.28%", backgroundColor: "#78D2FF" }}
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
                {specialtyList.length > 0 && (
				          <p className="specialty-list-label">What problem do you have?</p>
				        )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group specialty-list-wrapper">
                {specialtyList.length > 0
              		&& specialtyList.map((item) => {
              			return (
              				<div
              					key={item._id}
              					className={`each-specialty-wrapper ${selectedSpecialty && selectedSpecialty._id === item._id ? 'selected' : ''}`}
              					onClick={() => onClickSpecialty(item)}
              				>
              					<img src={item.imageUrl} alt={item.imageName} />
                    		<p>{item.label}</p>
              				</div>
              			)
              	})}
            		{errorMsg.selectedSpecialty && (
	                <div className="error-msg">
	                  {errorMsg.selectedSpecialty}
	                </div>
	              )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
            	<button onClick={nextStep} className="btn v5">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
	);
};

export default StepOne;