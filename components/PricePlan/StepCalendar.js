import { InlineWidget } from 'react-calendly';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';


import {
    getFormData,
  } from '../../store/priceSlice';


const StepCalendar = () => {  
    const dispatch = useDispatch();

    const formData = useSelector(getFormData);
    const [first_name] = useState(formData.first_name);
    const [last_name] = useState(formData.last_name);
    const [email] = useState(formData.email);
    const [phone] = useState(formData.phone);
    const [treatment_info] = useState(formData.specialty.label);
    const [specialty] = useState(formData.rootSpecialty.label);
    const [selectedCountry] = useState(formData.country.label);

    const [country_code] = useState(formData.country_code);
    
    
return (
    <>

<InlineWidget url="https://calendly.com/inoqare/medical"
prefill={{
    email: email,
    firstName: first_name,
    lastName: last_name,
    customAnswers: {
      a1: 'Your analysis : '+specialty+' '+treatment_info+'. '+'Desired country for medication : '+selectedCountry,
      a2: country_code+phone,
    },
    date: new Date(Date.now() + 86400000)
  }}/>
    </>
  );
};

export default StepCalendar