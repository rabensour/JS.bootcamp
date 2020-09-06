import React from 'react';
import Shot from './Shot';
import Shot2 from './Shot2.js';
import Ex8 from './Ex8.js'

const shoot7 = () => {
  alert('I was clicked')
}

export default function App() {

  function shoot(){
    alert('Nice Shot!')
  }
 const shoot2 = () => {
    alert({})
  }

  const shoot4 = (goal) => {
    alert(goal);
  }



  return (
    <>
    <Shot/>
    <Shot2 btn={shoot}/>
    <button onClick={shoot2}>Keep Shooting</button><br></br>
    <button onClick={() => shoot4("goal")}>goal</button><br></br>
    <button onClick={shoot7}> Click Me ! </button>
    <Ex8/>
    </>
  );
} 


