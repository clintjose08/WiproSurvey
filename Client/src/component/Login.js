import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {IndexLink, Link} from 'react-router';
import TextField from 'material-ui/TextField';
import survey from '../../images/survey.jpg';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  textAlign: 'center',
  display: 'inline-block',
  width:'40%',
  height:'50%',
};
const cardheadstyle={
  background:'#242323',
  textAlign:'center'

};
const cardTitleStyle={
   color:'#FFFFFF',
   fontSize:'125%',
   fontWeight:'bold'
};
const buttonStye={
  color:'white',
}


class Login extends Component{
	render(){
		return(<div  style={{textAlign:'center',marginTop:"7%"}}>
      <img src= {survey} style={{postion:'fixed',margin:'auto',width:400,height:'auto'}}/>
      <h1 style={{fontWeight:'bold'}}>Wipro Survey</h1>
      <Paper style={style}>
      
      <Card style={{background:'#E5E4E2'}}>
        <CardHeader title="Please sign in to your account" style={cardheadstyle} titleStyle={cardTitleStyle} />
        <CardText>
          <TextField
            hintText="Enter your Emp-ID"
           hintStyle={{fontWeight:'bold'}} 
           underlineStyle={{borderColor:'#37861E'}}
           
          /><br />
          <TextField
           hintText="Enter your Password"
           hintStyle={{fontWeight:'bold'}} 
           underlineStyle={{borderColor:'#37861E'}}
           
          /><br />
          <Link to="Home/CreateSurvey" activeClassName="active">
            <RaisedButton label="Submit" backgroundColor='#1C6D03 ' labelStyle={{color:'#FFFFFF ',fontWeight:'bold'}}/>
          </Link>
        </CardText>
      </Card>
      </Paper>
		</div>);
	}
 }
 export default Login;
