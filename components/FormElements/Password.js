import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Password({
  error,
  handleChange,
  value,
  placeholder = "Password",
  name,
}) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="form-group">
      <div className="pass-wrapper">
        <input
          className={`form-control ${error && "error-input"}`}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          type={passwordShown ? "text" : "password"}
        />
        <i className="eye" onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </i>
      </div>
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}
