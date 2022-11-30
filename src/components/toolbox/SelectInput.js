import React from "react";

const SelectedInput = ({
  name,
  label,
  onChange,
  defultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {error&&<div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectedInput;