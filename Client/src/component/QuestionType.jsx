import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
class QuestionType extends Component{
  constructor(props) {
   super(props);
   this.state = {value:1};
  }
  render(){
		return(<div>
      <SelectField
        floatingLabelText="Question Type"
        value={this.state.value}
        onChange={this.handleChange}
      >
      <Link to="Home/MultiChoice" activeClassName="active">
         <MenuItem value={1} primaryText="Multiple Choice" />
      </Link>
      <Link to="Home/Dropdown" activeClassName="active">
         <MenuItem value={2} primaryText="Dropdown" />
      </Link>
      <Link to="Home/StarRatings" activeClassName="active">
         <MenuItem value={3} primaryText="Star Ratings" />
      </Link>
      <Link to="Home/Slider" activeClassName="active">
         <MenuItem value={4} primaryText="Slider" />
      </Link>
      <Link to="Home/SingleText" activeClassName="active">
         <MenuItem value={5} primaryText="Single Textbox" />
      </Link>
      <Link to="Home/Comments" activeClassName="active">
         <MenuItem value={6} primaryText="Comments" />
      </Link>
       </SelectField>
		</div>);
	}
 }
 export default QuestionType;
