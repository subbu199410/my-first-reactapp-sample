import React, { Component } from 'react';
import './App.css';
import UserInput from './UserIO/UserInput.js';
import UserOutput from './UserIO/UserOutput.js';

class App extends Component{
   state = {
     userName:"Subbu"
   };

    switchUsernameHandler = (event) =>{
      this.setState({userName:event.target.value});
    }
    render(){
  return (
    <div className="App">
      <label>First React Assignment</label>
      <br></br>
      <UserInput name={this.state.userName} changeEvent={this.switchUsernameHandler}></UserInput>
      <br></br>
      <label>User Output:</label>
      <UserOutput UserName={this.state.userName} message="My Bonnie lies over the ocean."></UserOutput>
      <UserOutput UserName={this.state.userName} message="Oh, bring back my Bonnie to me."></UserOutput>
    </div>
  );
  }
}

export default App;
