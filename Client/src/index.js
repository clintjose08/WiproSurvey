import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Welcome from './view/Welcome'
import Thankyou from './view/Thankyou'
import Comments from './view/Comments';
import SurveyDetails from './component/SurveyDetails';
import Login from './component/Login';
import CreateSurvey from './component/CreateSurvey';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AddQuestion from './view/AddQuestion';
import Dropdown from './view/Dropdown';
import StarRatings from './view/StarRatings';
import Slider from './view/Slider';
import SingleText from './view/SingleText';
import MultiChoice from './view/MultiChoice';
import Qgroup from './view/Qgroup';
import CheckBox from './view/CheckBox';
import YesOrNo from './view/YesOrNo';

injectTapEventPlugin();

ReactDOM.render(
 <MuiThemeProvider>
 <Router history={hashHistory}>
     <Route path="/" component={Login}/>
     <Route path="/Home" component={App}>
       <Route path="CreateSurvey" component={CreateSurvey}/>
       <Route path="AddQuestion" component={AddQuestion}/>
       <Route path="SurveyDetails" component={SurveyDetails}/>
       <Route path="Welcome" component={Welcome}/>
       <Route path="Comments" component={Comments}/>
       <Route path="Dropdown" component={Dropdown}/>
       <Route path="StarRatings" component={StarRatings}/>
       <Route path="Slider" component={Slider}/>
       <Route path="SingleText" component={SingleText}/>
       <Route path="MultiChoice" component={MultiChoice}/>
       <Route path="Qgroup" component={Qgroup}/>
       <Route path="YesOrNo" component={YesOrNo}/>
       <Route path="CheckBox" component={CheckBox}/>
       <Route path="Thankyou" component={Thankyou}/>
    </Route>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
