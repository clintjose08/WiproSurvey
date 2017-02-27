import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import {IndexLink, Link} from 'react-router';
import {blueGrey500,white} from 'material-ui/styles/colors';

class SelectType extends Component {

render()
{
  return(
  <SelectField
    iconStyle={{background:'#607D8B'}}
    floatingLabelText="Question Type"
    value={this.state.value}
    onChange={this.handleChange}
    underlineStyle={{borderColor:blueGrey500}} floatingLabelStyle={{color:blueGrey500}}
  >
    <Link to="Home/StarRatings" activeClassName="active">
  <MenuItem value={1} primaryText="Star Ratings" />
  </Link>
  <Link to="Home/Dropdown" activeClassName="active">
     <MenuItem value={2} primaryText="Dropdown" />
  </Link>
  <Link to="Home/MultiChoice" activeClassName="active">
     <MenuItem value={3} primaryText="Multiple Choice" />
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
  <Link to="Home/Checkbox" activeClassName="active">
     <MenuItem value={6} primaryText="Checkbox" />
  </Link>
  <Link to="Home/QuestionGroup" activeClassName="active">
     <MenuItem value={6} primaryText="Question Group" />
  </Link>
  <Link to="Home/YesorNo" activeClassName="active">
     <MenuItem value={6} primaryText="Yes/No" />
  </Link>
   </SelectField>);
}
}

export default SelectType;
