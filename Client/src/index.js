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
import AddQuestion from './component/AddQuestion';
import Dropdown from './component/Dropdown';
import StarRatings from './component/StarRatings';
import Slider from './component/Slider';
import SingleText from './component/SingleText';
import MultiChoice from './component/MultiChoice';
import Checkbox from './component/Checkbox';
injectTapEventPlugin();

ReactDOM.render(
 <MuiThemeProvider>
 <Router history={hashHistory}>
     <Route path="/" component={Login}/>

     <Route path="/Home" component={App}>
       <Route path="CreateSurvey" component={CreateSurvey}/>
       <Route path="SurveyDetails" component={SurveyDetails}/>
       <Route path="Comments" component={Comments}/>
       <Route path="AddQuestion" component={AddQuestion}/>
       <Route path="Dropdown" component={Dropdown}/>
       <Route path="StarRatings" component={StarRatings}/>
       <Route path="Slider" component={Slider}/>
       <Route path="SingleText" component={SingleText}/>
       <Route path="MultiChoice" component={MultiChoice}/>
       <Route path="Checkbox" component={Checkbox}/>
    </Route>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
