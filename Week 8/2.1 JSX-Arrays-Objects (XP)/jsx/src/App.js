import React from 'react';
import Exercice3 from "./Ex3.js"
import Exercice4 from './Ex4.js';
import Exercice5 from './Ex5.js';
import Exercice6 from './Ex6.js';
import Exercice7 from './Ex7.js';
import AO1 from './AO1.js';
import AO2 from './AO2.js';
import "bootstrap/dist/css/bootstrap.min.css";
import AO3 from './AO3.js';
import AO4 from './AO4.js';
import AO5 from './AO5.js';
import AO6 from './AO6.js';


function App() {

  const myelement = <h1>I Love JSX !</h1>

  return (
    <>
      {myelement}
      <h1>I don't use JSX !</h1>
      <Exercice3/>
      <Exercice4/> 
      <Exercice5/>
      <Exercice6/>
      <Exercice7/>
      <AO1/>
      <AO2/>
      <AO3/>
      <AO4/>
      <AO5/>
      <AO6/>
    </>
  );
}
export default App;

