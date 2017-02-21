import React, { Component } from 'react';
import SurveyBar from './component/SurveyBar';
class App extends Component{
  render() {
    return (
      <div className="App">
      <SurveyBar/>
      <div className="main" >
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
