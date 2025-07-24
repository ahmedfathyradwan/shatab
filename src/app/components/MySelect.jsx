"use client";

import Select from "react-select";

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "5rem",
    padding: "2px 10px",
    border: `1px solid var(--primaryColor)`,
    boxShadow: "none",
    fontFamily: "changa",
    fontSize: "var(--fs15)",
    color: "var(--textColor)",
    backgroundColor: "#fff",
    margin: "0 0rem 2rem",
    width: "100%",
    borderColor: "var(--primaryColor)",
    "&:hover": {
      borderColor: "var(--primaryColor)",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "5rem",
    fontSize: "var(--fs15)",
    fontFamily: "changa",
    padding: "1.5rem 0.5rem",
    zIndex: 10,
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "var(--primaryColor)" : "#fff",
    color: isFocused ? "#fff" : "var(--textColor)",
    borderRadius: "5rem",
    padding: "1rem 3rem",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--textColor)",
  }),
};

export default function MySelect({ value, onChange, options, placeholder }) {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isSearchable={false}
    />
  );
}
