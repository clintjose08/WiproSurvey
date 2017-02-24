import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddOptions from '../component/AddOptions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Divider from 'material-ui/Divider';
const cardheadstyle={
 background:'black',
 textAlign:'center',
}
const buttonStye={
 marginLeft:30,
}

const style = {
  textAlign: 'center',
  display: 'inline-block',
  marginLeft:'30%',
  marginTop:'10%',
  width:'40%',
  height:'50%',
};
const cardTextStyle={
  textAlign:'left',
}


class MultiChoice extends Component {
 constructor() {
   	super();
   this.state = {
     optionArr: [' '],
		 value: 1
   }
 }

handleChange = (event, index, value) => this.setState({value});
 addOptions(e)
 {
  var arr=this.state.optionArr;
  arr.push(' ');
  this.setState({
    optionArr:arr
  })
 }
 removeOptions=(index)=>
 {
  var arr=this.state.optionArr;
  arr.splice(index,1);
  this.setState({
    optionArr:arr
  })
 }
changeOptions=(index,value)=>
{
  var arr=this.state.optionArr;
  arr[index]=value;
  this.setState({
  optionArr:arr
  })
}
 render() {
   const options=this.state.optionArr.map((value,index) => {
     return (
     <AddOptions addoptions={this.addOptions.bind(this)} index={index} value={value} removeoptions={this.removeOptions.bind(this)} changeoptions={this.changeOptions.bind(this)}/>
     );
   });
   return (
     <div>
       <Paper style={style}>
         <Card>
           <CardHeader title="Create MCQ" style={cardheadstyle} titleColor='white'/>
           <CardText style={cardTextStyle}>
					 <SelectField
	           floatingLabelText="Question Type"
	           value={this.state.value}
	           onChange={this.handleChange}
	         >
	         <MenuItem value={1} primaryText="Multiple Choice" />
	         <Link to="Home/MultiChoice" activeClassName="active">
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
	           <br /><br />
             <TextField
               hintText="Question" fullWidth={true}
             /><br /><br />
             <Divider />
             <h3>Answer Choices</h3>
             {options}
             <br />
						 <Link to="Home/AddQuestion" activeClassName="active">
	             <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
	           </Link>
	           <Link to="Home/AddQuestion" activeClassName="active">
	             <RaisedButton label="Cancel" style={buttonStye}/>
	           </Link>
           </CardText>
         </Card>
       </Paper>
     </div>
   );
 }
}

export default MultiChoice;
