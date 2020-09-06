import React from 'react';
import Car from '../src/Components/car.js';
import Car2 from '../src/Components/car2.js';
import Info from './Components/Info.js';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <>
    <Car/>
    <Car2/>
    <Info model={carinfo.model}/>
    </>
  );
}

export default App;

