import "./ColorSlider.css";
import React from "react";

const ColorSlider = ({ baseColor, colorName, value, onValueChange }) => {
  const className = `slider slider--${baseColor}`;

  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={className}
        id="redSlider"
        min="0"
        max="255"
        value={value}
        onChange={onValueChange}
      />
    </>
  );
};

export default ColorSlider;
