import React from 'react';
import PrintHello from './Ex1';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './Ex3';
import BootstrapCard2 from './Ex4'
import Jumbotron from './Ex5'
import Alert from './Ex6';
import Alert2 from './Ex7';
import Alert3 from './Ex8';
import Alert4 from './Ex9';

function App() {
  return (
    <>
  <PrintHello/>
  <BootstrapCard/>
  <BootstrapCard2 
  title = 'McCartney' 
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
  buttonUrl = 'https://en.wikipedia.org/wiki/Paul_McCartney'
  description = 'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
  />
  <Jumbotron
  title="Welcome to react"
  description="React is the most popular rendering library in the world"
  buttonLabel="Go to the official website"
  buttonURL="https://reactjs.org/"
/>
<Alert/>
<Alert2/>
<Alert3 text = "This is a warning-alert - Check it out!" color ="orange"/>
<Alert3 text = "This is a danger-alert - Check it out!" color = "red"/>
<Alert4/>
</>
  );
}

export default App;

