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
class Comments extends Component{
  constructor(props) {
   super(props);
   this.state = {value: 6};
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
           <MenuItem value={6} primaryText="Comments" />
         </SelectField>
          <br /><br />
          <TextField
            hintText="Overall Comments"
            fullWidth={true}
          /><br /><br />
          <Link to="Home/AddQuestion" activeClassName="active">
            <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
          </Link>
          <Link to="Home/AddQuestion" activeClassName="active">
            <RaisedButton label="Cancel" style={buttonStye}/>
          </Link>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default Comments;
