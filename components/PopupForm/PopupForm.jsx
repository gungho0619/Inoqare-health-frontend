import CountrySelect from "@components/common/CountrySelect";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getCookie, setCookie } from "utils/cookie";
import styles from './PopupForm.module.scss';

const INITIAL_STATE = {
	treatment_info: "",
	destination_country: "",
	email: "",
};

const PopupForm = () => {
    const router = useRouter();
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [errorMsg, setErrorMsg] = useState({});
    const [popup, setPopup] = useState(false);
    
    useEffect(() => {
        const cookie = getCookie('popup');
        if(!cookie) setTimeout(() => {
          setPopup(true);
          setCookie('popup', 'true', 7)
        }, 60000);
    }, []);

	const handleValidation = () => {
		const errorObj = {};
		if (formData.treatment_info.length === 0) {
			errorObj.treatment_info = "Treatment info is required";
		}
		if (formData.destination_country.length === 0) {
			errorObj.destination_country = "Country is required";
		}
		if (formData.email.length === 0) {
			errorObj.email = "Email is required";
		} else if (
			!formData.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			errorObj.email = "Email is invalid";
		}
		setErrorMsg(errorObj);
		return errorObj;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleCountryChange = (name, value) => {
		setFormData((prevState) => ({ ...prevState, [name]: value }));
		setErrorMsg((prevState) => ({ ...prevState, [name]: null }));
	};

	const handleSubmit = (e) => {
        e.preventDefault();
		const obj = handleValidation();
		for (const [_, value] of Object.entries(obj)) {
            if (value && value.length > 0) return;
		}
        setPopup(false);
		router.push(
			`/get-quote?treatment_info=${formData.treatment_info}&destination_country=${formData.destination_country.name}&email=${formData.email}`
		);
	};

	return (
        <React.Fragment>
            {popup ?
                <form className={`${styles.popupFormWrapper}`} onSubmit={(e)=> handleSubmit(e)}>
                    <div className={`${styles.popupForm}`}>
                        <button type="button" className={styles.closeBtn} onClick={()=>setPopup(false)}>
                            <img src="/images/close.svg" alt="" />
                        </button>
                        <div className="row mx-0">
                            <div className="col-md-6 px-0">
                                <div className="position-relative h-100"> 
                                    <div className={`flex-img h-100 position-absolute w-100 left-0 top-0 ${styles.flexImage}`}>
                                        <img src="/images/home/enters.png" alt="" /> 
                                    </div>
                                    <div className={`${styles.content} text-white text-center d-flex justify-content-center align-items-center flex-column h-100 p-4`}>
                                        <img src="/images/logo.svg" alt="Inoqare logo" className="mb-5"/>
                                        <p className="fw-600">Access the Best Quality Medical Care No Matter Where You Are in the World Healthcare Services for Everyone, Everywhere, Anytime.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-0"> 
                                <div className="p-4">
                                    <div className="form-group">
                                        <label className="mb-2">What treatment you need?</label>
                                        <input
                                            className={`form-control ${
                                                errorMsg.treatment_info && "error-input"
                                            }`}
                                            name="treatment_info"
                                            value={formData.treatment_info}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Treatment, Specialities.."
                                        />
                                        {errorMsg.treatment_info && (
                                            <div className="error-msg">
                                                {errorMsg.treatment_info}
                                            </div>
                                        )}
                                    </div>
                                    <div className={`form-group ${styles.countrySelect}`}>
                                        <label className="mb-2">Where you want treatment?</label>
                                        <CountrySelect
                                            height="50px"
                                            placeholder="Country"
                                            error={errorMsg.destination_country}
                                            value={formData.destination_country}
                                            handleChange={(value) =>
                                                handleCountryChange("destination_country", value)
                                            }
                                        />
                                        {errorMsg.destination_country && (
                                            <div className="error-msg">
                                                {errorMsg.destination_country}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-2">Your Email Address</label>
                                        <input
                                            className={`form-control ${
                                                errorMsg.email && "error-input"
                                            }`}
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Your email address"
                                        />
                                        {errorMsg.email && (
                                            <div className="error-msg">{errorMsg.email}</div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn v3 d-flex align-items-center"
                                        onClick={handleSubmit}
                                    >
                                        Let's Start
                                        <i className="ri-logout-circle-r-line ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                : <></>
            }
            <button className={`${styles.popupButton}`} onClick={()=> setPopup(true)}>
                <img src="/images/favicon.png" alt="" className="me-md-2"/>
                <span>Let's start</span>
            </button>
        </React.Fragment>
	);
}

export default PopupForm