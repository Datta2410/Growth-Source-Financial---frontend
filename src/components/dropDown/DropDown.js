import React from "react";
import PropTypes from "prop-types";
import "./Inputs.css";

const DropDown = ({
  name,
  label,
  className,
  size,
  onChange,
  options,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <select
        id={name}
        name={name}
        onChange={onChange}
        className={`${size} ${className}`}
      >
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name != null ? option.name : option.zoneName}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDown.defaultProps = {
  options: [
    {
      _id: "",
      name: "",
    },
  ],
};

DropDown.propTypes = {
  options: PropTypes.array,
};
export default DropDown;
