import "./ColorSlider.css"
import React from "react"

const ColorSlider =({baseColor, colorName} )=> {
    
    return <div>
        <label htmlFor={baseColor}>{colorName}</label>
		<input
        type="range"
        className="slider slider--{{baseColor}}"
        id="redSlider"
        min="0"
        max="255"
        defaultValue="0"
      /></div>
}

export default ColorSlider