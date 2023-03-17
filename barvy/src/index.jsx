import React from "react";
import { createRoot } from "react-dom/client";
import ColorSlider from "./components/ColorSlider/ColorSlider";
import "./style.css";
import { useState } from "react";

function App() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [color, setColor] = useState("rgb(0, 0, 0)");

  const handleRedChange = (event) => {
    const value = event.target.value;
    setRedValue(value);
    updateColor(value, greenValue, blueValue);
  };

  const handleGreenChange = (event) => {
    const value = event.target.value;
    setGreenValue(value);
    updateColor(redValue, value, blueValue);
  };

  const handleBlueChange = (event) => {
    const value = event.target.value;
    setBlueValue(value);
    updateColor(redValue, greenValue, value);
  };

  const updateColor = (red, green, blue) => {
    const color = `rgb(${red}, ${green}, ${blue})`;
    setColor(color);
  };

  return (
    <div className="App">
      <div class="color-panel">
        <h1>Mixér barev</h1>
        <div className="sliders">
          <ColorSlider
            baseColor="red"
            colorName="Červená"
            value={redValue}
            onValueChange={handleRedChange}
          />
          <ColorSlider
            baseColor="green"
            colorName="Zelená"
            value={greenValue}
            onValueChange={handleGreenChange}
          />
          <ColorSlider
            baseColor="blue"
            colorName="Modrá"
            value={blueValue}
            onValueChange={handleBlueChange}
          />
        </div>
        <div className="color-box" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}

createRoot(document.querySelector("#app")).render(<App />);
