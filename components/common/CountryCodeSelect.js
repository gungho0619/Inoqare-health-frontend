import React, { useState, useEffect } from "react";
import { getCountry } from "../GoogleTranslate/GoogleTranslate";
import countries from "../../data/country_code_old";
import Select from "react-select";

const options = [];

export default function CountryCodeSelect({
  setChange,
  isGeoInfo = true,
  value,
  error,
  setFormData,
  name = "country_code",
  placeholder = "Country Code",
  height = "60px",
  inputStyles,
}) {
  useEffect(() => {
    const getCountryInfo = async () => {
      const c = await getCountry();
      setFormData((prevState) => ({
        ...prevState,
        [name]: options.find((o) => o.key === c),
      }));
    };
    countries.forEach((item) => {
      options.push({
        key: item.name,
        value: `${item.name}-${item.dial_code}`,
        label: (
          <span>
            <img
              src={`/api/flag?country_code=${item.code}`} // Fetch the flag via API route
              height="24"
              width="24"
              alt={`${item.name} flag`}
            />{" "}
            {item.name} ({item.dial_code})
          </span>
        ),
      });
    });
    if (isGeoInfo) getCountryInfo();
  }, []);

  if (typeof value === "string" && value.length > 0) {
    setFormData((prevState) => ({
      ...prevState,
      country_code: options.find((o) => o.value.includes(value)),
    }));
  }

  return (
    <Select
      styles={{
        control: (styles, state) => ({
          ...styles,
          height: height,
          borderRadius: "none",
          paddingLeft: "5px",
          border: state.isFocused && "1px solid #78d2ff",
          border: error && "1px solid #dc3545",
          boxShadow: "none",
          outline: "none",
          ":hover": {
            border: state.isFocused && "1px solid #78d2ff",
            border: error && "1px solid #dc3545",
          },
        }),
        input: (styles) => ({
          ...styles,
          padding: "0",
          margin: "0",
          ...inputStyles,
        }),
      }}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={(v) => {
        if (setChange) setChange(true);
        setFormData((prevState) => ({ ...prevState, [name]: v }));
      }}
    />
  );
}
