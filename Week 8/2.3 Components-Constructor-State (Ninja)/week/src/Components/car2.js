import React from 'react';
import ReactDOM from 'react-dom';

class Car2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
      }
    render() {
      return (
      <>
      <h2>Hi, I am a {this.state.color} Car!</h2>
      </>
      )
    }
  }
  ReactDOM.render(<Car2 model="Mustang"/>, document.getElementById('root'));
  
  export default Car2;