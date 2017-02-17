import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import Login from './Login';
import SurveyDetails from './SurveyDetails';
import CreateSurvey from './CreateSurvey';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(
 <MuiThemeProvider>
 <Router history={hashHistory}>
     <Route path="/" component={Login}/>
     <Route path="CreateSurvey" component={CreateSurvey}/>
     <Route path="SurveyDetails" component={SurveyDetails}/>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
