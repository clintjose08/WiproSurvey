import React,{Component} from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  textAlign: 'center',
  display: 'inline-block',
  margin:'auto',
  marginTop:'10%',
  width:'40%',
  height:'50%',
};
const cardheadstyle={
  background:'black',
  textAlign:'center',
}
const buttonStye={
  marginLeft:30,
}


class SurveyDetails extends Component{
	render(){
		return(<div><Paper style={style}>
      <Card>
        <CardHeader title="Create Survey" style={cardheadstyle} titleColor='white'/>
        <CardText>
          <TextField
            hintText="Name of the survey"
          /><br />
          <TextField
            hintText="Description about the survey" multiLine={true} rows={2}
          /><br />
          <RaisedButton label="Submit" backgroundColor="#004D40" labelColor='white'/>
          <RaisedButton label="Cancel" disabled={true} style={buttonStye}/>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default SurveyDetails;
