import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Login from './component/Login';
import Comments from './component/Comments';
import SurveyDetails from './component/SurveyDetails';
import CreateSurvey from './component/CreateSurvey';
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
     <Route path="Comments" component={Comments}/>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
