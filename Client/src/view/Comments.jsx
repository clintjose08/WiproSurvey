import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {IndexLink, Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import QuestionType from '../component/QuestionType';
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
        <QuestionType />
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
