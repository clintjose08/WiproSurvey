import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Login from './Login';
import SurveyDetails from './SurveyDetails';
class App extends Component {
  render() {
    return (
      <div className="App">

        <SurveyDetails/>
      </div>
    );
  }
}

export default App;
