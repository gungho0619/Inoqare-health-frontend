import React from "react";
import Select from "react-select";
import country_data from "../../data/country_code";

export default function CountrySelect(props) {
	const {
		value,
		handleChange,
		error,
		sx = {},
		height = '60px',
		inputSx = {},
		placeholder = "Desired Country For Medication",
	} = props;

	return (
		<Select
			id="country_select"
			instanceId="country_select"
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
			options={country_data}
		/>
	);
}
