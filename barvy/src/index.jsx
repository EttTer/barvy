import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorSlider from './components/ColorSlider/ColorSlider';
import './style.css';
import { useState } from 'react';


const App = () => {

  const [redValue,setRedValue] =useState ("")
  const [greenValue,setGreenValue] =useState ("")
  const [blueValue,setBlueValue] =useState ("")


  return (
    <div className="container">
      <header>
        
      </header>
      <main>
   
	<div className='color-panel'>
		<h1>Mixér barev</h1>
		<div className='sliders'>


      <ColorSlider baseColor="red" colorName="Červená" key = "red" />
      <ColorSlider baseColor="green" colorName="Zelená" key = "green"/>
      <ColorSlider baseColor="blue" colorName="Modrá" key ="blue"/>

<label htmlFor='green'>Zelená</label>
			<input
        type="range"
        className='slider slider--green'
        id="greenSlider"
        min="0"
        max="255"
        value="0"
      />

<label htmlFor='blue'>Modrá</label>
			<input
        type="range"
        className='slider slider--blue'
        id="blueSlider"
        min="0"
        max="255"
        value="0"
      />
		</div>
		<div className="color-box" id="color-box"></div>
	</div>

      </main>
      <footer>
       
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
