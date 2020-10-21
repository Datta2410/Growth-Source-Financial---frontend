import React from "react";
import PropTypes from "prop-types";
import "./MultiInput.css";

const MultiInput = ({
  type,
  options,
  label,
  name,
  onChange,
  checkedIndex,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      {options.map((option, i) => (
        <label htmlFor={option} key={option}>
          {checkedIndex === null ? (
            <input
              type={type}
              id={option}
              name={name}
              value={option}
              onChange={onChange}
            />
          ) : (
            <input
              type={type}
              id={option}
              name={name}
              value={option}
              onChange={onChange}
              checked={checkedIndex === i}
            />
          )}

          {option}
        </label>
      ))}
    </div>
  );
};
MultiInput.defaultProps = {
  options: [],
  type: "checkbox",
  checkedIndex: null,
};

MultiInput.propTypes = {
  options: PropTypes.array,
  checkedIndex: PropTypes.number,
};

export default MultiInput;
