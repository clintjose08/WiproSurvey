import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  textAlign: 'center',
  display: 'inline-block',
  marginLeft:'30%',
  marginTop:'10%',
  width:'40%',
  height:'50%',
};
const cardheadstyle={
  background:'black',
  textAlign:'left',
}
const cardTextStyle={
  width:'90%',
  textAlign:'left'
}
const buttonStye={
  marginLeft:30,
}
class Login extends Component{
  constructor(props) {
   super(props);
   this.state = {value: 5};
 }

 handleChange = (event, index, value) => this.setState({value});
	render(){
		return(<div><Paper style={style}>
      <Card>
        <CardHeader title="Comments" style={cardheadstyle} titleColor='white'/>
        <CardText style={cardTextStyle}>
        <SelectField
          floatingLabelText="Question Type"
          value={this.state.value}
          onChange={this.handleChange}
        >
           <MenuItem value={1} primaryText="Multiple Choice" />
           <MenuItem value={2} primaryText="Dropdown" />
           <MenuItem value={3} primaryText="Star Ratings" />
           <MenuItem value={4} primaryText="Slider" />
           <MenuItem value={5} primaryText="Single Textbox" />
           <MenuItem value={5} primaryText="Comment Box" />
         </SelectField>
          <br /><br />
          <TextField
            hintText="Type your Questions/Comments"
            fullWidth={true}
          /><br /><br />
          <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
          <RaisedButton label="Cancel" style={buttonStye}/>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default Login;
