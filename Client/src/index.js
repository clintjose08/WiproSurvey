import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import WelcomeEdit from './view/Welcome'
import ThankyouEdit from './view/Thankyou'
import CommentsEdit from './view/Comments';
import SurveyDetails from './component/SurveyDetails';
import Login from './component/Login';
import CreateSurvey from './component/CreateSurvey';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AddQuestion from './view/AddQuestion';
import DropdownEdit from './view/Dropdown';
import StarRatingsEdit from './view/StarRatings';
import SliderEdit from './view/Slider';
import SingleTextEdit from './view/SingleText';
import MultiChoiceEdit from './view/MultiChoice';
import QgroupEdit from './view/Qgroup';
import CheckBoxEdit from './view/CheckBox';
import YesOrNoEdit from './view/YesOrNo';

injectTapEventPlugin();

ReactDOM.render(
 <MuiThemeProvider>
 <Router history={hashHistory}>
     <Route path="/" component={Login}/>
     <Route path="/Home" component={App}>
       <Route path="CreateSurvey" component={CreateSurvey}/>
       <Route path="AddQuestion" component={AddQuestion}/>
       <Route path="SurveyDetails" component={SurveyDetails}/>
       <Route path="Welcome" component={WelcomeEdit}/>
       <Route path="Comments" component={CommentsEdit}/>
       <Route path="Dropdown" component={DropdownEdit}/>
       <Route path="StarRatings" component={StarRatingsEdit}/>
       <Route path="Slider" component={SliderEdit}/>
       <Route path="SingleText" component={SingleTextEdit}/>
       <Route path="MultiChoice" component={MultiChoiceEdit}/>
       <Route path="Qgroup" component={QgroupEdit}/>
       <Route path="YesOrNo" component={YesOrNoEdit}/>
       <Route path="CheckBox" component={CheckBoxEdit}/>
       <Route path="Thankyou" component={ThankyouEdit}/>
    </Route>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
