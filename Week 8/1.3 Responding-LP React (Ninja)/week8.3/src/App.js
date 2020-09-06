import React from 'react';
import Header from './Header.js';
import Section from './Section.js'
import './index.css'
import Contact from './Contact.js'

function App() {
  return (
    <div id="body">
      <Header/>
      <Section icon='fas fa-building' title="About the Company"/>
      <Section icon='fas fa-globe-africa' title="Our Values" bg=' bg-grey'/>
      <Section icon='fas fa-landmark' title="Our Mission"/>
      <Contact/>
    </div>
  );
}

export default App;

