import React,{Component} from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {IndexLink, Link} from 'react-router';
class CreateSurvey extends Component{
	render(){
		return(<div>
      <Link to="/SurveyDetails" activeClassName="active">
          <RaisedButton label="CreateSurvey" backgroundColor="#004D40" labelColor='white'/>
      </Link>
		</div>);
	}
 }
 export default CreateSurvey;
