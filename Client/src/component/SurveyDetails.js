import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {IndexLink, Link} from 'react-router';
import request from 'superagent';
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
  textAlign:'center',
}
const buttonStye={
  marginLeft:30,
}

class SurveyDetails extends Component{
  constructor() {
    	super();
    this.state = {
      name:''
    }
  }
  createDb(){
    var questStore=[];
    questStore.push({'new':"jsdkjsk"});
    localStorage.setItem('questStore',questStore);
    var nameData={
      surveyname:this.state.name
    }
    request.post('http://localhost:9080/api/createSurvey')
            .set('Content-Type', 'application/json')
            .send(nameData)
             .end((err,res)=>
             {
               console.log("posted");
              })

  }
  nameChange(e)
  {
    this.setState({
      name:e.target.value
    })
  }
	render(){
		return(<div><Paper style={style}>
      <Card>
        <CardHeader title="Create Survey" style={cardheadstyle} titleColor='white'/>
        <CardText>
          <TextField
            hintText="Name of the survey"
            onChange={this.nameChange.bind(this)}
          /><br />
          <TextField
            hintText="Description about the survey" multiLine={true} rows={2}
          /><br />

          <Link to="Home/AddQuestion" activeClassName="active">
            <RaisedButton label="Submit" onClick={this.createDb.bind(this)} backgroundColor="#004D40" labelColor='white'/>
          </Link>
          <Link to="Home/CreateSurvey" activeClassName="active">
            <RaisedButton label="Cancel" style={buttonStye}/>
          </Link>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default SurveyDetails;
