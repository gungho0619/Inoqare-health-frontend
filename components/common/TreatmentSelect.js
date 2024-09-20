import React from "react";
import Select from "react-select";

export default function TreatmentSelect(props) {
  const {
    value,
    handleChange,
    error,
    sx = {},
    height = "60px",
    inputSx = {},
    placeholder = "Desired Country For Medication",
    options,
  } = props;

  return (
    <Select
      id="treatment_select"
      instanceId="treatment_select"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="countrySelectWrapper"
      styles={{
        control: (styles, state) => ({
          ...styles,
          height: height,
          borderRadius: "none",
          paddingLeft: "10px",
          border: state.isFocused && "1px solid #78d2ff",
          border: error && "1px solid #dc3545",
          boxShadow: "none",
          outline: "none",
          ":hover": {
            border: state.isFocused && "1px solid #78d2ff",
            border: error && "1px solid #dc3545",
          },
          ...sx,
        }),
        input: (styles) => ({ ...styles, ...inputSx }),
      }}
      options={options}
    />
  );
}
